# Plan Overview for Task: ROO#NAV_PLAN_005

**Parent Goal:** Integrate Prisma for database, Solana contracts for points &amp; subscriptions, and an abstract wallet solution. This involves merging `prisma` and `wallet-integration` branches, then implementing the contract interactions and wallet abstraction, followed by testing and documentation.

This plan outlines the sub-tasks required to achieve the parent goal, coordinating multiple Rooroo experts.

## Sub-tasks:

1.  **Task ID:** `ROO#SUB_005_S001`
    *   **Assigned Expert:** `rooroo-developer`
    *   **Goal Summary:** Merge the `prisma` branch into the `main` branch, resolving any conflicts. This brings in Prisma setup, schema, and initial data layer changes.
    *   **Context:** [.rooroo/tasks/ROO#SUB_005_S001/context.md](.rooroo/tasks/ROO#SUB_005_S001/context.md)

2.  **Task ID:** `ROO#SUB_005_S002`
    *   **Assigned Expert:** `rooroo-developer`
    *   **Goal Summary:** Merge the `wallet-integration` branch into the `main` branch (which now includes `prisma` changes from S001), resolving conflicts. This brings in Solana wallet connection, points top-up, and subscription UI/basic logic.
    *   **Context:** [.rooroo/tasks/ROO#SUB_005_S002/context.md](.rooroo/tasks/ROO#SUB_005_S002/context.md)

3.  **Task ID:** `ROO#SUB_005_S003`
    *   **Assigned Expert:** `rooroo-developer`
    *   **Goal Summary:** Refactor the merged codebase (after S001 &amp; S002) to use Prisma for all data operations related to users, agents, points, and subscriptions. Remove all mock data and ensure data persistence through Prisma.
    *   **Context:** [.rooroo/tasks/ROO#SUB_005_S003/context.md](.rooroo/tasks/ROO#SUB_005_S003/context.md)

4.  **Task ID:** `ROO#SUB_005_S004`
    *   **Assigned Expert:** `rooroo-developer`
    *   **Goal Summary:** Implement the Solana contract interaction for topping up user points. This includes frontend calls to the contract and updating the user's point balance in the database (via Prisma) upon successful transaction.
    *   **Context:** [.rooroo/tasks/ROO#SUB_005_S004/context.md](.rooroo/tasks/ROO#SUB_005_S004/context.md)

5.  **Task ID:** `ROO#SUB_005_S005`
    *   **Assigned Expert:** `rooroo-developer`
    *   **Goal Summary:** Implement the Solana contract interaction for user subscriptions. This includes frontend calls for subscribing, updating subscription status in the database (via Prisma), and logic to check subscription validity.
    *   **Context:** [.rooroo/tasks/ROO#SUB_005_S005/context.md](.rooroo/tasks/ROO#SUB_005_S005/context.md)

6.  **Task ID:** `ROO#SUB_005_S006`
    *   **Assigned Expert:** `rooroo-developer`
    *   **Goal Summary:** Design and implement an abstract wallet solution/layer to provide a consistent API for interacting with different Solana wallets. Refactor the points top-up and subscription features to use this abstraction.
    *   **Context:** [.rooroo/tasks/ROO#SUB_005_S006/context.md](.rooroo/tasks/ROO#SUB_005_S006/context.md)

7.  **Task ID:** `ROO#SUB_005_S007`
    *   **Assigned Expert:** `rooroo-analyzer`
    *   **Goal Summary:** Perform comprehensive testing of all new and modified functionalities (Prisma integration, points top-up, subscriptions, abstract wallet). Conduct regression testing and document all findings in a QA report.
    *   **Context:** [.rooroo/tasks/ROO#SUB_005_S007/context.md](.rooroo/tasks/ROO#SUB_005_S007/context.md)

8.  **Task ID:** `ROO#SUB_005_S008`
    *   **Assigned Expert:** `rooroo-documenter`
    *   **Goal Summary:** Update all project documentation (README, technical design documents, user guides) to reflect the new features (Prisma, Solana contracts for points/subscriptions, abstract wallet) and architectural changes.
    *   **Context:** [.rooroo/tasks/ROO#SUB_005_S008/context.md](.rooroo/tasks/ROO#SUB_005_S008/context.md)