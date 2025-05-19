use anchor_lang::prelude::*;

#[derive(Accounts)]
pub struct InitializePointsManager<'info> {
    #[account(init, payer = payer, space = 8 + 32 + 8 + 1)]
    pub points_manager: Account<'info, PointsManager>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ManagePoints<'info> {
    #[account(mut)]
    pub points_manager: Account<'info, PointsManager>,
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(mut)]
    pub user_wallet: Account<'info, crate::SmartWallet>,
}

#[account]
pub struct PointsManager {
    pub authority: Pubkey,
    pub total_points_issued: u64,
    pub is_active: bool,
}

impl PointsManager {
    pub fn initialize(ctx: Context<InitializePointsManager>) -> Result<()> {
        let points_manager = &mut ctx.accounts.points_manager;
        points_manager.authority = ctx.accounts.payer.key();
        points_manager.total_points_issued = 0;
        points_manager.is_active = true;
        Ok(())
    }

    pub fn add_points(
        ctx: Context<ManagePoints>,
        amount: u64,
    ) -> Result<()> {
        let points_manager = &mut ctx.accounts.points_manager;
        require!(points_manager.is_active, CustomError::ManagerInactive);
        require!(
            ctx.accounts.authority.key() == points_manager.authority,
            CustomError::Unauthorized
        );

        let wallet = &mut ctx.accounts.user_wallet;
        wallet.points_balance = wallet.points_balance.checked_add(amount)
            .ok_or(CustomError::OverflowError)?;

        points_manager.total_points_issued = points_manager.total_points_issued
            .checked_add(amount)
            .ok_or(CustomError::OverflowError)?;

        Ok(())
    }

    pub fn deduct_points(
        ctx: Context<ManagePoints>,
        amount: u64,
    ) -> Result<()> {
        let points_manager = &mut ctx.accounts.points_manager;
        require!(points_manager.is_active, CustomError::ManagerInactive);
        require!(
            ctx.accounts.authority.key() == points_manager.authority,
            CustomError::Unauthorized
        );

        let wallet = &mut ctx.accounts.user_wallet;
        require!(
            wallet.points_balance >= amount,
            CustomError::InsufficientPoints
        );

        wallet.points_balance = wallet.points_balance.checked_sub(amount)
            .ok_or(CustomError::OverflowError)?;

        Ok(())
    }

    pub fn batch_add_points(
        ctx: Context<ManagePoints>,
        wallet_addresses: Vec<Pubkey>,
        amounts: Vec<u64>,
    ) -> Result<()> {
        require!(
            wallet_addresses.len() == amounts.len(),
            CustomError::InvalidInput
        );

        for i in 0..wallet_addresses.len() {
            Self::add_points(ctx.accounts.clone(), amounts[i])?;
        }

        Ok(())
    }
}

#[error_code]
pub enum CustomError {
    #[msg("Points manager is inactive")]
    ManagerInactive,
    #[msg("Unauthorized access")]
    Unauthorized,
    #[msg("Insufficient points balance")]
    InsufficientPoints,
    #[msg("Invalid input: arrays must have same length")]
    InvalidInput,
    #[msg("Arithmetic overflow")]
    OverflowError,
} 