import { StoreAgent, PricingModelType, StoreAgentStatus, SubscriptionInterval } from '@/types/storeAgent';

export const mockStoreAgents: StoreAgent[] = [
  {
    storeAgentId: 'sa_001',
    name: 'SOL Smart DCA Agent',
    provider: 'Official',
    version: '1.2.0',
    description: 'Automated Dollar Cost Averaging for SOL and other Solana-based tokens. Set your strategy and let the agent handle the rest. Supports various intervals and amounts.',
    categories: ['DeFi', 'Investment', 'Solana', 'Automation'],
    solanaFocus: true,
    pricingModel: {
      type: PricingModelType.SUBSCRIPTION_CREDITS_MONTHLY,
      priceCredits: 1000,
      subscriptionInterval: SubscriptionInterval.MONTHLY,
      notes: 'USDT purchase available for credits.',
    },
    requiredMCPs: [
      { mcpId: 'mcp_sol_oracle', mcpName: 'Solana Price Oracle', isBundled: true },
      { mcpId: 'mcp_dex_aggregator', mcpName: 'Jupiter DEX Aggregator', isBundled: true },
    ],
    estimatedResourceConsumption: 'Low - approx. 10-20 credits/day depending on frequency.',
    documentationUrl: '/docs/agents/sol-smart-dca',
    iconUrl: '/icons/dca-agent.svg',
    bannerImageUrl: '/banners/dca-agent-banner.png',
    popularityScore: 95,
    averageRating: 4.8,
    numberOfDownloadsOrAcquisitions: 1250,
    publishedAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-05-01T12:30:00Z',
    status: StoreAgentStatus.PUBLISHED,
  },
  {
    storeAgentId: 'sa_002',
    name: 'Solana NFT Sniper Agent',
    provider: 'Community Hotshot X',
    version: '0.9.5',
    description: 'Monitors upcoming and newly minted NFT projects on Solana. Automatically attempts to mint or purchase based on pre-set criteria like price, rarity traits, and collection size. High risk, high reward.',
    categories: ['NFT', 'Solana', 'Trading', 'Automation'],
    solanaFocus: true,
    pricingModel: {
      type: PricingModelType.ONE_TIME_PURCHASE_SOL,
      priceSol: 50,
      notes: 'Also available for 5000 Credits/month.',
    },
    requiredMCPs: [
      { mcpId: 'mcp_magic_eden_api', mcpName: 'Magic Eden API', isBundled: false },
      { mcpId: 'mcp_sol_rpc_node', mcpName: 'Solana RPC Node (High TPS)', isBundled: false },
    ],
    estimatedResourceConsumption: 'Medium - depends on monitoring intensity. Transaction fees apply.',
    documentationUrl: '/docs/agents/nft-sniper',
    iconUrl: '/icons/nft-sniper-agent.svg',
    popularityScore: 88,
    averageRating: 4.2,
    numberOfDownloadsOrAcquisitions: 320,
    publishedAt: '2024-04-01T14:00:00Z',
    updatedAt: '2024-04-25T18:00:00Z',
    status: StoreAgentStatus.PUBLISHED,
  },
  {
    storeAgentId: 'sa_003',
    name: 'Raydium Liquidity Mining Agent',
    provider: 'Community',
    version: '1.0.1',
    description: 'Automatically manages your liquidity positions on Raydium. Optimizes for yield by auto-compounding rewards and rebalancing pools based on market conditions.',
    categories: ['DeFi', 'Yield Farming', 'Solana', 'Automation'],
    solanaFocus: true,
    pricingModel: {
      type: PricingModelType.FREE,
      notes: 'Requires subscription to Raydium Advanced MCP.',
      requiredMcpSubscriptionIds: ['mcp_raydium_advanced'],
    },
    requiredMCPs: [
      { mcpId: 'mcp_raydium_advanced', mcpName: 'Raydium Advanced API', isBundled: false },
      { mcpId: 'mcp_sol_wallet_manager', mcpName: 'Solana Wallet Manager', isBundled: true },
    ],
    estimatedResourceConsumption: 'Low - primarily transaction fees for rebalancing.',
    iconUrl: '/icons/raydium-lm-agent.svg',
    popularityScore: 70,
    averageRating: 4.0,
    numberOfDownloadsOrAcquisitions: 600,
    publishedAt: '2024-02-20T09:00:00Z',
    updatedAt: '2024-04-10T11:00:00Z',
    status: StoreAgentStatus.PUBLISHED,
  },
  {
    storeAgentId: 'sa_004',
    name: 'Helium Network Optimizer Agent',
    provider: 'Official',
    version: '2.0.0',
    description: 'Analyzes Helium network data to provide optimal placement and configuration recommendations for your Helium hotspots. Maximizes HNT earnings.',
    categories: ['DePIN', 'Solana', 'Tools', 'Optimization'],
    solanaFocus: true, // Helium is migrating to Solana
    pricingModel: {
      type: PricingModelType.SUBSCRIPTION_CREDITS_QUARTERLY,
      priceCredits: 2000,
      subscriptionInterval: SubscriptionInterval.QUARTERLY,
    },
    requiredMCPs: [
      { mcpId: 'mcp_helium_api', mcpName: 'Helium Network API', isBundled: true },
      { mcpId: 'mcp_data_analytics', mcpName: 'Data Analytics Engine', isBundled: true },
    ],
    estimatedResourceConsumption: 'Medium - for data processing and analysis.',
    iconUrl: '/icons/helium-optimizer.svg',
    popularityScore: 80,
    averageRating: 4.5,
    numberOfDownloadsOrAcquisitions: 450,
    publishedAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-05-05T00:00:00Z',
    status: StoreAgentStatus.PUBLISHED,
  },
  {
    storeAgentId: 'sa_005',
    name: 'Solana DeFi Arbitrage Agent',
    provider: 'DeFi Wizards Inc.',
    version: '1.1.0',
    description: 'Scans multiple Solana DEXs for arbitrage opportunities and executes trades automatically. Requires careful configuration and risk management.',
    categories: ['DeFi', 'Trading', 'Solana', 'Arbitrage'],
    solanaFocus: true,
    pricingModel: {
      type: PricingModelType.ONE_TIME_PURCHASE_CREDITS,
      priceCredits: 15000,
      notes: 'High potential returns, but also high risk. Use responsibly.',
    },
    requiredMCPs: [
      { mcpId: 'mcp_dex_aggregator_pro', mcpName: 'Pro DEX Aggregator (Multi-DEX)', isBundled: true },
      { mcpId: 'mcp_sol_high_speed_tx', mcpName: 'Solana High-Speed Transaction MCP', isBundled: false },
    ],
    estimatedResourceConsumption: 'High - frequent transactions and API calls.',
    documentationUrl: '/docs/agents/defi-arbitrage',
    iconUrl: '/icons/arbitrage-agent.svg',
    popularityScore: 75,
    averageRating: 3.9,
    numberOfDownloadsOrAcquisitions: 150,
    publishedAt: '2024-04-15T10:00:00Z',
    updatedAt: '2024-05-02T12:30:00Z',
    status: StoreAgentStatus.PUBLISHED,
  },
  {
    storeAgentId: 'sa_006',
    name: 'Portfolio Tracker & Rebalancer (Solana)',
    provider: 'Official',
    version: '1.0.0',
    description: 'Tracks your Solana asset portfolio across multiple wallets and protocols. Provides rebalancing suggestions based on your target allocations.',
    categories: ['DeFi', 'Portfolio Management', 'Solana', 'Tools'],
    solanaFocus: true,
    pricingModel: {
      type: PricingModelType.FREE,
      notes: 'Basic version free. Pro features via MCP subscription.',
      requiredMcpSubscriptionIds: ['mcp_portfolio_pro_features'],
    },
    requiredMCPs: [
      { mcpId: 'mcp_sol_wallet_reader', mcpName: 'Solana Wallet Reader', isBundled: true },
      { mcpId: 'mcp_portfolio_pro_features', mcpName: 'Portfolio Pro Features', isBundled: false },
    ],
    estimatedResourceConsumption: 'Low to Medium, depending on number of tracked assets.',
    iconUrl: '/icons/portfolio-tracker.svg',
    popularityScore: 92,
    averageRating: 4.7,
    numberOfDownloadsOrAcquisitions: 2500,
    publishedAt: '2024-03-01T00:00:00Z',
    updatedAt: '2024-04-20T00:00:00Z',
    status: StoreAgentStatus.PUBLISHED,
  },
];