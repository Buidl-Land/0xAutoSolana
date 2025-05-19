use anchor_lang::prelude::*;
use anchor_lang::solana_program::system_program;

#[derive(Accounts)]
pub struct CreateWallet<'info> {
    #[account(mut)]
    pub factory: Account<'info, WalletFactory>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct WalletFactory {
    pub authority: Pubkey,
    pub wallet_count: u64,
    pub is_active: bool,
}

impl WalletFactory {
    pub const SPACE: usize = 8 + 32 + 8 + 1;

    pub fn initialize(ctx: Context<CreateWallet>) -> Result<()> {
        let factory = &mut ctx.accounts.factory;
        factory.authority = ctx.accounts.payer.key();
        factory.wallet_count = 0;
        factory.is_active = true;
        Ok(())
    }

    pub fn create_wallet(
        ctx: Context<CreateWallet>,
        owner: Pubkey,
        spending_limit: u64,
    ) -> Result<Pubkey> {
        let factory = &mut ctx.accounts.factory;
        
        // 生成确定性的钱包地址
        let (wallet_address, bump) = Pubkey::find_program_address(
            &[
                b"wallet",
                factory.authority.as_ref(),
                &factory.wallet_count.to_le_bytes(),
            ],
            ctx.program_id,
        );

        // 创建钱包账户
        let wallet_account = &mut ctx.accounts.factory;
        let rent = Rent::get()?;
        let space = 8 + 32 + 8 + 8 + 8 + 8 + 1;  // SmartWallet 结构体大小
        let lamports = rent.minimum_balance(space);

        let create_account_ix = system_program::create_account {
            from: ctx.accounts.payer.key(),
            to: wallet_address,
            lamports,
            space: space as u64,
            owner: *ctx.program_id,
        };

        anchor_lang::solana_program::program::invoke_signed(
            &create_account_ix,
            &[
                ctx.accounts.payer.to_account_info(),
                wallet_account.to_account_info(),
                ctx.accounts.system_program.to_account_info(),
            ],
            &[&[
                b"wallet",
                factory.authority.as_ref(),
                &factory.wallet_count.to_le_bytes(),
                &[bump],
            ]],
        )?;

        factory.wallet_count += 1;

        Ok(wallet_address)
    }

    pub fn batch_create_wallets(
        ctx: Context<CreateWallet>,
        owners: Vec<Pubkey>,
        spending_limits: Vec<u64>,
    ) -> Result<Vec<Pubkey>> {
        require!(owners.len() == spending_limits.len(), CustomError::InvalidInput);
        
        let mut wallet_addresses = Vec::with_capacity(owners.len());
        
        for i in 0..owners.len() {
            let wallet_address = Self::create_wallet(
                ctx.accounts.clone(),
                owners[i],
                spending_limits[i],
            )?;
            wallet_addresses.push(wallet_address);
        }
        
        Ok(wallet_addresses)
    }
}

#[error_code]
pub enum CustomError {
    #[msg("Invalid input: owners and spending_limits arrays must have the same length")]
    InvalidInput,
} 