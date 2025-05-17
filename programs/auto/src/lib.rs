use anchor_lang::prelude::*;
use anchor_lang::solana_program::{system_program, program::invoke};
use anchor_spl::token::{self, Token, TokenAccount, Transfer};

declare_id!("11111111111111111111111111111111");

pub mod wallet_factory;
pub mod pooling_contract;
pub mod points_manager;

use wallet_factory::*;
use pooling_contract::*;
use points_manager::*;

#[program]
pub mod auto_solana_aa {
    use super::*;

    // 初始化智能钱包
    pub fn initialize_wallet(
        ctx: Context<InitializeWallet>,
        owner: Pubkey,
        spending_limit: u64,
    ) -> Result<()> {
        let wallet = &mut ctx.accounts.wallet;
        wallet.owner = owner;
        wallet.spending_limit = spending_limit;
        wallet.daily_spent = 0;
        wallet.last_day = Clock::get()?.unix_timestamp / 86400;
        wallet.points_balance = 0;
        wallet.is_active = true;
        Ok(())
    }

    // 执行交易
    pub fn execute_transaction(
        ctx: Context<ExecuteTransaction>,
        amount: u64,
        instruction_data: Vec<u8>
    ) -> Result<()> {
        let wallet = &mut ctx.accounts.wallet;
        
        // 检查调用者是否为所有者或授权的策略执行器
        require!(
            ctx.accounts.authority.key() == wallet.owner,
            CustomError::Unauthorized
        );

        // 检查每日限额
        let current_day = Clock::get()?.unix_timestamp / 86400;
        if current_day != wallet.last_day {
            wallet.daily_spent = 0;
            wallet.last_day = current_day;
        }

        require!(
            wallet.daily_spent + amount <= wallet.spending_limit,
            CustomError::SpendingLimitExceeded
        );

        // 更新每日支出
        wallet.daily_spent += amount;

        // 执行交易逻辑
        let ix = anchor_lang::solana_program::instruction::Instruction {
            program_id: *ctx.accounts.target_program.key,
            accounts: vec![],  // 将在运行时填充
            data: instruction_data,
        };

        invoke(
            &ix,
            &[ctx.accounts.target_program.to_account_info()]
        )?;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeWallet<'info> {
    #[account(init, payer = payer, space = 8 + 32 + 8 + 8 + 8 + 8 + 1)]
    pub wallet: Account<'info, SmartWallet>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ExecuteTransaction<'info> {
    #[account(mut)]
    pub wallet: Account<'info, SmartWallet>,
    pub authority: Signer<'info>,
    /// CHECK: 目标程序将在运行时验证
    pub target_program: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct SmartWallet {
    pub owner: Pubkey,
    pub spending_limit: u64,
    pub daily_spent: u64,
    pub last_day: i64,
    pub points_balance: u64,
    pub is_active: bool,
}

#[error_code]
pub enum CustomError {
    #[msg("Unauthorized access")]
    Unauthorized,
    #[msg("Daily spending limit exceeded")]
    SpendingLimitExceeded,
    #[msg("Insufficient points balance")]
    InsufficientPoints,
    #[msg("Arithmetic overflow")]
    OverflowError,
} 