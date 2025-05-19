use anchor_lang::prelude::*;
use anchor_lang::solana_program::{system_program, program::invoke};
use anchor_spl::token::{self, Token, TokenAccount, Transfer};

#[derive(Accounts)]
pub struct InitializePool<'info> {
    #[account(init, payer = payer, space = 8 + 32 + 8 + 1)]
    pub pool: Account<'info, PoolingContract>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Deposit<'info> {
    #[account(mut)]
    pub pool: Account<'info, PoolingContract>,
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub pool_token_account: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct Withdraw<'info> {
    #[account(mut)]
    pub pool: Account<'info, PoolingContract>,
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub pool_token_account: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
}

#[account]
pub struct PoolingContract {
    pub authority: Pubkey,
    pub total_deposits: u64,
    pub is_active: bool,
}

impl PoolingContract {
    pub fn initialize(ctx: Context<InitializePool>) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        pool.authority = ctx.accounts.payer.key();
        pool.total_deposits = 0;
        pool.is_active = true;
        Ok(())
    }

    pub fn deposit(ctx: Context<Deposit>, amount: u64) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        require!(pool.is_active, CustomError::PoolInactive);

        // 转移代币到资金池
        let transfer_ix = Transfer {
            from: ctx.accounts.user_token_account.to_account_info(),
            to: ctx.accounts.pool_token_account.to_account_info(),
            authority: ctx.accounts.user.to_account_info(),
        };

        token::transfer(
            CpiContext::new(
                ctx.accounts.token_program.to_account_info(),
                transfer_ix,
            ),
            amount,
        )?;

        pool.total_deposits = pool.total_deposits.checked_add(amount)
            .ok_or(CustomError::OverflowError)?;

        Ok(())
    }

    pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        require!(pool.is_active, CustomError::PoolInactive);
        require!(amount <= pool.total_deposits, CustomError::InsufficientFunds);

        // 从资金池转出代币
        let transfer_ix = Transfer {
            from: ctx.accounts.pool_token_account.to_account_info(),
            to: ctx.accounts.user_token_account.to_account_info(),
            authority: pool.to_account_info(),
        };

        token::transfer(
            CpiContext::new(
                ctx.accounts.token_program.to_account_info(),
                transfer_ix,
            ),
            amount,
        )?;

        pool.total_deposits = pool.total_deposits.checked_sub(amount)
            .ok_or(CustomError::OverflowError)?;

        Ok(())
    }
}

#[error_code]
pub enum CustomError {
    #[msg("Pool is inactive")]
    PoolInactive,
    #[msg("Insufficient funds in pool")]
    InsufficientFunds,
    #[msg("Arithmetic overflow")]
    OverflowError,
} 