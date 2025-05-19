# Sub-task: Analyze and Identify Mock Data (ROO#SUB_005_S002)

**Parent Task:** [ROO#NAV_PLAN_005](.rooroo/tasks/ROO#NAV_PLAN_005/context.md)
**Depends on:** [ROO#SUB_005_S001](.rooroo/tasks/ROO#SUB_005_S001/context.md) (Setup and Merge Branches)

**Goal for Expert (rooroo-analyzer):**
1.  Thoroughly analyze the codebase in the feature branch created in ROO#SUB_005_S001.
2.  Identify all instances of mock data usage (e.g., hardcoded arrays/objects, mock API responses, files in `src/data/mocks/`, `src/data/mockAgents/`, `src/data/mockChatHistories.ts`, `src/data/mockMcps.ts`, `src/data/mockAgentTemplates.ts` etc.).
3.  Document the locations (file paths, line numbers, function names) where mock data is used.
4.  Analyze how this mock data is structured and what real data entities it represents (e.g., users, agents, wallets, subscriptions, points).
5.  Provide a report detailing these findings. This report will serve as a guide for the developer in the subsequent Prisma integration task.

**Key Information:**
*   The codebase to analyze is on the feature branch created in ROO#SUB_005_S001.
*   Focus on identifying data that would typically be stored in a database or fetched from external services.
*   Pay attention to files within `src/data/` and any direct in-code data structures used for simulation.

**Deliverables:**
*   A Markdown report (`.rooroo/artifacts/ROO#SUB_005_S002_mock_data_analysis.md`) detailing:
    *   List of files containing mock data.
    *   Specific locations (lines, functions) of mock data usage.
    *   Description of the structure and purpose of each mock data set.
    *   Mapping of mock data to potential real-world database entities.