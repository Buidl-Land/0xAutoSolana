# Sub-task: Implement Solana Contract for Points Top-up (ROO#SUB_005_S004)

**Parent Task:** [ROO#NAV_PLAN_005](.rooroo/tasks/ROO#NAV_PLAN_005/context.md)
**Depends on:** [ROO#SUB_005_S003](.rooroo/tasks/ROO#SUB_005_S003/context.md) (Integrate Prisma and Remove Mock Data)

**Goal for Expert (rooroo-developer):**
1.  Analyze the existing Solana contract code (likely from the `prisma` branch or a specified contract repository/directory if separate).
2.  Identify or implement the contract function responsible for topping up user points.
3.  Integrate the frontend to call this Solana contract function. This includes:
    *   Connecting to the user's Solana wallet.
    *   Constructing and sending the transaction to the top-up function.
    *   Handling transaction status (success, failure, pending).
4.  Update the user's point balance in the database (via Prisma) upon successful transaction.
5.  Ensure the UI reflects the points top-up functionality and updates balances correctly.

**Key Information:**
*   The Solana contract details (address, ABI, relevant functions) need to be identified from the merged codebase or provided.
*   The application should already have Prisma integrated for database interactions (from ROO#SUB_005_S003).
*   Wallet connection logic might need to be implemented or enhanced.

**Deliverables:**
*   Functional points top-up feature using a Solana contract.
*   Frontend components for initiating top-up and displaying status.
*   Backend logic to verify transaction and update user points in the database.
*   Relevant contract interaction code (client-side).