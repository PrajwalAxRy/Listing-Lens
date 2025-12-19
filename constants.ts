import { IPO } from './types';

export const MOCK_IPOS: IPO[] = [
  // Active IPOs (openDate <= today < listingDate)
  {
    id: '1',
    name: 'TechNova Solutions Ltd',
    symbol: 'TECHNOVA',
    status: 'Active',
    openDate: '2025-11-27',
    closeDate: '2025-11-30',
    listingDate: '2025-12-06',
    priceBand: { min: 450, max: 480 },
    lotSize: 30,
    issueSize: '850 Cr',
    gmp: 120,
    gmpUpdateDate: 'Today, 10:00 AM',
    subscription: {
      qib: 12.5,
      nii: 45.2,
      retail: 8.4,
      total: 18.2,
    },
    description: 'TechNova is a leading provider of AI-driven cloud infrastructure services, focusing on enterprise scalability and security solutions.',
    summary: 'TechNova Solutions Ltd positions its AI-first cloud infrastructure stack as the modernization fabric for compliance heavy enterprises. Layered managed security, automation playbooks, and consumption pricing keep revenue expanding above forty percent without leaning on debt. Reference wins in financial services, manufacturing, and digital native cohorts demonstrate sticky deployments plus multi year expansion paths. IPO proceeds target new hyperscale partnerships, edge nodes, and bolt-on acquisitions that deepen verticalized service catalogs. Execution risks center on concentrated accounts and relentless innovation cycles, yet leadership showcases disciplined delivery governance. Robust GMP interest mirrors improving operating leverage and secular digital infrastructure demand.',
    strengths: [
      'Strong revenue growth of 40% CAGR',
      'Debt-free company',
      'Marquee client base including Fortune 500 companies'
    ],
    risks: [
      'High client concentration',
      'Rapidly changing technology landscape'
    ],
    financials: {
      revenue: '₹1,200 Cr',
      profit: '₹180 Cr',
      margin: '15%',
    },
    issueDetails: {
      freshIssue: '60%',
      offerForSale: '40%',
      faceValue: '₹10 per share',
    },
    applicationDetails: [
      { category: 'Retail (Min)', lots: 1, shares: 30 },
      { category: 'Retail (Max)', lots: 13, shares: 390 },
      { category: 'S-HNI (Min)', lots: 14, shares: 420 },
      { category: 'S-HNI (Max)', lots: 69, shares: 2070 },
      { category: 'B-HNI (Min)', lots: 70, shares: 2100 },
    ],
    valuation: {
      marketCap: '4,080',
      eps: '12.50',
      pe: '38.4',
      evEbitda: '28.5',
      enterpriseValue: '3,920 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Expansion of cloud infrastructure', amount: '280.00' },
      { purpose: 'Research and development', amount: '150.00' },
      { purpose: 'Working capital requirements', amount: '120.00' },
      { purpose: 'General corporate purposes', amount: '50.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '65.20%', postOffer: '52.16%' },
      { category: 'Public', preOffer: '34.80%', postOffer: '47.84%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '1,77,08,333' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '88,54,166',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '53,12,500' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '35,41,666' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '26,56,250',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '17,70,833' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '8,85,417' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '61,97,917' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nDec 3, 2025', qibExAnchor: 2.18, nii: 1.90, niiAbove10L: 1.61, niiBelow10L: 2.47, retail: 4.13, total: 2.46 },
      { date: 'Day 2\nDec 4, 2025', qibExAnchor: 7.15, nii: 9.63, niiAbove10L: 8.82, niiBelow10L: 11.25, retail: 9.65, total: 8.28 },
      { date: 'Day 3\nDec 5, 2025', qibExAnchor: 123.34, nii: 39.85, niiAbove10L: 43.64, niiBelow10L: 32.28, retail: 19.89, total: 81.76 }
    ]
  },
  {
    id: '2',
    name: 'GreenEarth Energy',
    symbol: 'GREENERGY',
    status: 'Active',
    openDate: '2025-11-28',
    closeDate: '2025-12-05',
    listingDate: '2025-12-07',
    priceBand: { min: 110, max: 125 },
    lotSize: 120,
    issueSize: '2,400 Cr',
    gmp: 15,
    gmpUpdateDate: 'Today, 09:30 AM',
    subscription: {
      qib: 2.1,
      nii: 1.5,
      retail: 3.2,
      total: 2.4,
    },
    description: 'GreenEarth Energy specializes in renewable solar and wind power generation assets across Western India.',
    summary: 'GreenEarth Energy positions itself as a diversified renewables platform combining utility scale solar parks, hybrid wind corridors, and storage pilots across western India. Long term PPAs, viability gap funding, and disciplined project execution underpin steady revenue visibility despite a capital intensive footprint. Management plans to deploy IPO proceeds toward land banking, inverter procurement, and downstream analytics that lift plant availability. Subsidy regimes and carbon credit monetization add upside, while regulatory delays in transmission clearances remain the largest execution drag. Subscription traction reflects investors seeking predictable cash flows, measured leverage, and exposure to state backed energy transition programs.',
    strengths: [
      'Government backing and subsidies',
      'Long-term PPA agreements'
    ],
    risks: [
      'Capital intensive projects',
      'Regulatory hurdles in land acquisition'
    ],
    financials: {
      revenue: '₹3,500 Cr',
      profit: '₹220 Cr',
      margin: '6.2%',
    },
    issueDetails: {
      freshIssue: '70%',
      offerForSale: '30%',
      faceValue: '₹5 per share',
    },
    applicationDetails: [
      { category: 'Retail (Min)', lots: 1, shares: 120 },
      { category: 'Retail (Max)', lots: 13, shares: 1560 },
      { category: 'S-HNI (Min)', lots: 14, shares: 1680 },
      { category: 'S-HNI (Max)', lots: 66, shares: 7920 },
      { category: 'B-HNI (Min)', lots: 67, shares: 8040 },
    ],
    valuation: {
      marketCap: '19,200',
      eps: '1.83',
      pe: '68.3',
      evEbitda: '42.1',
      enterpriseValue: '22,500 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Setting up new solar parks', amount: '850.00' },
      { purpose: 'Wind turbine procurement', amount: '620.00' },
      { purpose: 'Debt repayment', amount: '480.00' },
      { purpose: 'General corporate purposes', amount: '150.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '72.50%', postOffer: '58.00%' },
      { category: 'Institutional Investors', preOffer: '18.30%', postOffer: '28.64%' },
      { category: 'Public', preOffer: '9.20%', postOffer: '13.36%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '19,20,00,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '9,60,00,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '5,76,00,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '3,84,00,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '2,88,00,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '1,92,00,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '96,00,000' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '6,72,00,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nNov 28, 2025', qibExAnchor: 1.5, nii: 1.2, niiAbove10L: 1.1, niiBelow10L: 1.4, retail: 2.8, total: 1.8 },
      { date: 'Day 2\nNov 29, 2025', qibExAnchor: 3.2, nii: 2.5, niiAbove10L: 2.3, niiBelow10L: 2.8, retail: 4.1, total: 3.1 },
      { date: 'Day 3\nNov 30, 2025', qibExAnchor: 5.8, nii: 4.7, niiAbove10L: 4.2, niiBelow10L: 5.3, retail: 6.2, total: 5.4 }
    ]
  },
  {
    name: 'Urban Logistics',
    symbol: 'URBANLOG',
    status: 'Active',
    openDate: '2025-11-26',
    closeDate: '2025-11-29',
    listingDate: '2025-12-04',
    priceBand: { min: 200, max: 215 },
    lotSize: 65,
    issueSize: '600 Cr',
    gmp: 45,
    gmpUpdateDate: 'Yesterday',
    subscription: {
      qib: 8.5,
      nii: 12.3,
      retail: 5.7,
      total: 9.2,
    },
    description: 'Urban Logistics provides last-mile delivery solutions for e-commerce giants.',
    summary: 'Urban Logistics is building a nationwide last mile network that blends asset light fleets, dark stores, and proprietary routing tech for ecommerce majors. Revenue expansion above sector averages stems from integrated warehousing, reverse logistics, and value added cold chain pilots for pharma clients. IPO proceeds will accelerate electric vehicle adoption, automated fulfillment hubs, and regional partner buyouts to deepen density. Key risks include aggressive price wars, driver availability, and diesel volatility, although diversified contracts cushion individual client swings. Consistent GMP prints suggest investors value execution discipline, improving unit economics, and the optionality of future cross border fulfillment corridors.',
    strengths: ['Asset-light model', 'Pan-India presence'],
    risks: ['Low entry barrier', 'Fuel price volatility'],
    financials: {
      revenue: '₹800 Cr',
      profit: '₹45 Cr',
      margin: '5.6%',
    },
    issueDetails: {
      freshIssue: '55%',
      offerForSale: '45%',
      faceValue: '₹2 per share',
    },
    applicationDetails: [
      { category: 'Retail (Min)', lots: 1, shares: 65 },
      { category: 'Retail (Max)', lots: 14, shares: 910 },
      { category: 'S-HNI (Min)', lots: 15, shares: 975 },
      { category: 'S-HNI (Max)', lots: 71, shares: 4615 },
      { category: 'B-HNI (Min)', lots: 72, shares: 4680 },
    ],
    valuation: {
      marketCap: '2,790',
      eps: '1.61',
      pe: '133.5',
      evEbitda: '85.2',
      enterpriseValue: '2,650 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Fleet expansion and EV adoption', amount: '180.00' },
      { purpose: 'Warehouse automation', amount: '120.00' },
      { purpose: 'Technology upgrades', amount: '95.00' },
      { purpose: 'Working capital', amount: '75.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '58.40%', postOffer: '45.12%' },
      { category: 'PE/VC Investors', preOffer: '32.60%', postOffer: '38.68%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '16.20%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,79,06,977' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,39,53,488',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '83,72,093' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '55,81,395' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '41,86,047',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '27,90,698' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '13,95,349' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '97,67,442' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nNov 26, 2025', qibExAnchor: 4.2, nii: 6.1, niiAbove10L: 5.8, niiBelow10L: 6.5, retail: 3.9, total: 5.2 },
      { date: 'Day 2\nNov 27, 2025', qibExAnchor: 8.7, nii: 11.4, niiAbove10L: 10.2, niiBelow10L: 12.8, retail: 7.3, total: 9.8 },
      { date: 'Day 3\nNov 28, 2025', qibExAnchor: 15.3, nii: 22.6, niiAbove10L: 20.1, niiBelow10L: 25.4, retail: 12.7, total: 18.9 }
    ]
  },
  // Upcoming IPOs (today < openDate)
  {
    id: '1001',
    name: 'Stellar Pharmaceuticals',
    symbol: 'STARPHARMA',
    status: 'Upcoming',
    openDate: '2025-12-05',
    closeDate: '2025-12-08',
    listingDate: '2025-12-14',
    priceBand: { min: 550, max: 580 },
    lotSize: 25,
    issueSize: '1,100 Cr',
    gmp: 95,
    gmpUpdateDate: 'Today, 11:00 AM',
    subscription: {
      qib: 0,
      nii: 0,
      retail: 0,
      total: 0,
    },
    description: 'Stellar Pharmaceuticals develops and manufactures specialty oncology drugs and APIs for global markets.',
    summary: 'Stellar Pharmaceuticals operates vertically integrated oncology formulations and API facilities with global regulatory approvals, making export demand the primary growth vector. The pipeline includes targeted therapies, long acting injectables, and contract development work for biotech innovators, sustaining premium margins. IPO proceeds are allocated toward scaling high potent manufacturing blocks, inventory harmonization, and licensing new molecules for US and Europe filings. Competitive pressures include patent cliffs, price controls, and inspection surprises, yet management touts strong compliance track record and diversified customer mix. Investors eye the listing for exposure to defensible healthcare demand, recurring forex revenues, and disciplined capital allocation.',
    strengths: [
      'USFDA approved manufacturing facilities',
      'Strong product pipeline',
      'Export-oriented business model'
    ],
    risks: [
      'Regulatory compliance challenges',
      'Patent expiry risks'
    ],
    financials: {
      revenue: '₹950 Cr',
      profit: '₹165 Cr',
      margin: '17.4%',
    },
    issueDetails: {
      freshIssue: '65%',
      offerForSale: '35%',
      faceValue: '₹10 per share',
    },
    applicationDetails: [
      { category: 'Retail (Min)', lots: 1, shares: 25 },
      { category: 'Retail (Max)', lots: 13, shares: 325 },
      { category: 'S-HNI (Min)', lots: 14, shares: 350 },
      { category: 'S-HNI (Max)', lots: 68, shares: 1700 },
      { category: 'B-HNI (Min)', lots: 69, shares: 1725 },
    ],
    valuation: {
      marketCap: '6,380',
      eps: '14.25',
      pe: '40.7',
      evEbitda: '25.8',
      enterpriseValue: '6,100 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Manufacturing capacity expansion', amount: '380.00' },
      { purpose: 'R&D for new drug molecules', amount: '250.00' },
      { purpose: 'Regulatory filings (US/EU)', amount: '180.00' },
      { purpose: 'Working capital', amount: '140.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '68.50%', postOffer: '54.80%' },
      { category: 'Institutional Investors', preOffer: '22.30%', postOffer: '31.04%' },
      { category: 'Public', preOffer: '9.20%', postOffer: '14.16%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,10,52,632' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,05,26,316',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '63,15,790' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '42,10,526' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '31,57,895',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '21,05,263' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '10,52,632' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '73,68,421' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nDec 5, 2025', qibExAnchor: 3.1, nii: 2.8, niiAbove10L: 2.5, niiBelow10L: 3.2, retail: 5.4, total: 3.5 },
      { date: 'Day 2\nDec 6, 2025', qibExAnchor: 6.8, nii: 5.9, niiAbove10L: 5.4, niiBelow10L: 6.5, retail: 8.7, total: 6.9 },
      { date: 'Day 3\nDec 7, 2025', qibExAnchor: 12.4, nii: 10.3, niiAbove10L: 9.8, niiBelow10L: 11.2, retail: 14.6, total: 12.1 }
    ]
  },
  {
    id: '1002',
    name: 'NexGen Digital Solutions',
    symbol: 'NEXDIGITAL',
    status: 'Upcoming',
    openDate: '2025-12-10',
    closeDate: '2025-12-13',
    listingDate: '2025-12-19',
    priceBand: { min: 280, max: 310 },
    lotSize: 45,
    issueSize: '650 Cr',
    gmp: 55,
    gmpUpdateDate: 'Today, 02:15 PM',
    subscription: {
      qib: 0,
      nii: 0,
      retail: 0,
      total: 0,
    },
    description: 'NexGen provides digital transformation services and cloud migration solutions to enterprises across APAC region.',
    summary: 'NexGen Digital Solutions partners with enterprises across APAC to modernize legacy stacks, automate operations, and accelerate cloud migrations on AWS and Azure. Recurring managed services, outcome based contracts, and a 92 percent retention rate provide revenue predictability despite shorter implementation cycles. IPO money will strengthen delivery centers in tier two cities, fund selective acquisitions in cybersecurity, and expand thought leadership around industry specific accelerators. Execution risks include talent attrition, currency swings, and heavy competition from global systems integrators. Nevertheless, rising digital transformation budgets, marquee client references, and improving margins support expectations of steady post listing performance.',
    strengths: [
      'Recurring revenue model',
      'Strong client retention rate of 92%',
      'Strategic partnerships with AWS and Azure'
    ],
    risks: [
      'Intense competition',
      'Talent acquisition and retention challenges'
    ],
    financials: {
      revenue: '₹580 Cr',
      profit: '₹87 Cr',
      margin: '15.0%',
    },
    issueDetails: {
      freshIssue: '80%',
      offerForSale: '20%',
      faceValue: '₹5 per share',
    },
    applicationDetails: [
      { category: 'Retail (Min)', lots: 1, shares: 45 },
      { category: 'Retail (Max)', lots: 14, shares: 630 },
      { category: 'S-HNI (Min)', lots: 15, shares: 675 },
      { category: 'S-HNI (Max)', lots: 71, shares: 3195 },
      { category: 'B-HNI (Min)', lots: 72, shares: 3240 },
    ],
    valuation: {
      marketCap: '2,096',
      eps: '9.35',
      pe: '33.2',
      evEbitda: '22.5',
      enterpriseValue: '1,980 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Setting up new delivery centers', amount: '220.00' },
      { purpose: 'Technology platform upgrades', amount: '150.00' },
      { purpose: 'Strategic acquisitions', amount: '180.00' },
      { purpose: 'General corporate purposes', amount: '50.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '55.80%', postOffer: '44.64%' },
      { category: 'PE/VC Investors', preOffer: '35.20%', postOffer: '42.16%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '13.20%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,09,67,742' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,04,83,871',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '62,90,323' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '41,93,548' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '31,45,161',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '20,96,774' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '10,48,387' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '73,38,710' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nDec 10, 2025', qibExAnchor: 2.9, nii: 3.1, niiAbove10L: 2.8, niiBelow10L: 3.4, retail: 4.8, total: 3.4 },
      { date: 'Day 2\nDec 11, 2025', qibExAnchor: 5.7, nii: 6.2, niiAbove10L: 5.9, niiBelow10L: 6.6, retail: 8.1, total: 6.3 },
      { date: 'Day 3\nDec 12, 2025', qibExAnchor: 9.8, nii: 11.5, niiAbove10L: 10.7, niiBelow10L: 12.4, retail: 13.2, total: 10.9 }
    ]
  },
  {
    id: '1003',
    name: 'Premier Hotels & Resorts',
    symbol: 'PREMHOTELS',
    status: 'Upcoming',
    openDate: '2025-12-12',
    closeDate: '2025-12-15',
    listingDate: '2025-12-21',
    priceBand: { min: 180, max: 200 },
    lotSize: 75,
    issueSize: '890 Cr',
    gmp: 30,
    gmpUpdateDate: '1 day ago',
    subscription: {
      qib: 0,
      nii: 0,
      retail: 0,
      total: 0,
    },
    description: 'Premier operates luxury hotels and resorts across major tourist destinations in India with focus on experiential hospitality.',
    summary: 'Premier Hotels & Resorts curates experiential luxury stays across leisure circuits, business hubs, and pilgrimage micro markets, blending owned properties with management contracts to ring fence margins. Occupancy has recovered beyond pre pandemic peaks, aided by dynamic pricing, weddings, and branded F&B concepts. IPO proceeds will refresh flagship assets, repay high cost leases, and seed resort developments in coastal destinations plus the northeast. Risks include elevated fixed costs, seasonality, and susceptibility to macro shocks, yet loyalty programs and strong brand recall provide demand resilience. Investors view the offer as exposure to premium hospitality growth and operating leverage.',
    strengths: [
      'Prime locations in metro cities',
      'Diversified revenue streams',
      'Strong brand recognition'
    ],
    risks: [
      'High fixed costs',
      'Seasonal demand fluctuations'
    ],
    financials: {
      revenue: '₹1,450 Cr',
      profit: '₹125 Cr',
      margin: '8.6%',
    },
    issueDetails: {
      freshIssue: '50%',
      offerForSale: '50%',
      faceValue: '₹10 per share',
    },
    applicationDetails: [
      { category: 'Retail (Min)', lots: 1, shares: 75 },
      { category: 'Retail (Max)', lots: 13, shares: 975 },
      { category: 'S-HNI (Min)', lots: 14, shares: 1050 },
      { category: 'S-HNI (Max)', lots: 66, shares: 4950 },
      { category: 'B-HNI (Min)', lots: 67, shares: 5025 },
    ],
    valuation: {
      marketCap: '4,450',
      eps: '5.60',
      pe: '35.7',
      evEbitda: '18.4',
      enterpriseValue: '5,200 Cr'
    },
    objectsOfIssue: [
      { purpose: 'New hotel development', amount: '320.00' },
      { purpose: 'Renovation of existing properties', amount: '180.00' },
      { purpose: 'Debt repayment', amount: '250.00' },
      { purpose: 'Technology investments', amount: '90.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '62.40%', postOffer: '49.92%' },
      { category: 'PE Investors', preOffer: '28.60%', postOffer: '35.88%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '14.20%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '4,45,00,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '2,22,50,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '1,33,50,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '89,00,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '66,75,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '44,50,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '22,25,000' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,55,75,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nDec 15, 2025', qibExAnchor: 4.5, nii: 3.8, niiAbove10L: 3.5, niiBelow10L: 4.2, retail: 6.1, total: 4.7 },
      { date: 'Day 2\nDec 16, 2025', qibExAnchor: 8.9, nii: 7.6, niiAbove10L: 7.1, niiBelow10L: 8.3, retail: 10.4, total: 8.8 },
      { date: 'Day 3\nDec 17, 2025', qibExAnchor: 14.2, nii: 13.4, niiAbove10L: 12.8, niiBelow10L: 14.1, retail: 16.7, total: 14.5 }
    ]
  },
  {
    id: '1004',
    name: 'MicroChip Technologies',
    symbol: 'MICROCHIP',
    status: 'Upcoming',
    openDate: '2025-12-18',
    closeDate: '2025-12-21',
    listingDate: '2025-12-27',
    priceBand: { min: 720, max: 750 },
    lotSize: 20,
    issueSize: '1,850 Cr',
    gmp: 140,
    gmpUpdateDate: 'Today, 08:45 AM',
    subscription: {
      qib: 0,
      nii: 0,
      retail: 0,
      total: 0,
    },
    description: 'MicroChip designs and manufactures semiconductor components for automotive and IoT applications.',
    summary: 'MicroChip Technologies designs automotive and IoT semiconductors, combining proprietary analog platforms, power modules, and embedded software support under long dated supply agreements with OEMs. Revenue momentum stems from design wins in electric mobility, ADAS, and industrial automation, while PLI incentives bolster domestic fabrication economics. IPO proceeds will fund clean room upgrades, backend testing automation, and strategic equity stakes in substrate partners to de risk supply. Exposure to cyclical global chip demand and capex intensity remain core risks, yet diversified order book and engineering depth provide buffer. Strong GMP premium underlines confidence in sustained silicon shortages and localization tailwinds.',
    strengths: [
      'Cutting-edge R&D capabilities',
      'Long-term contracts with auto OEMs',
      'Government incentives under PLI scheme'
    ],
    risks: [
      'Capital intensive operations',
      'Global chip market volatility'
    ],
    financials: {
      revenue: '₹2,100 Cr',
      profit: '₹315 Cr',
      margin: '15.0%',
    },
    issueDetails: {
      freshIssue: '75%',
      offerForSale: '25%',
      faceValue: '₹2 per share',
    },
    applicationDetails: [
      { category: 'Retail (Min)', lots: 1, shares: 20 },
      { category: 'Retail (Max)', lots: 13, shares: 260 },
      { category: 'S-HNI (Min)', lots: 14, shares: 280 },
      { category: 'S-HNI (Max)', lots: 66, shares: 1320 },
      { category: 'B-HNI (Min)', lots: 67, shares: 1340 },
    ],
    valuation: {
      marketCap: '18,500',
      eps: '25.80',
      pe: '29.1',
      evEbitda: '18.6',
      enterpriseValue: '17,800 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Clean room and fab upgrades', amount: '680.00' },
      { purpose: 'R&D in automotive chips', amount: '420.00' },
      { purpose: 'Strategic equity investments', amount: '350.00' },
      { purpose: 'Working capital', amount: '250.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '58.20%', postOffer: '46.56%' },
      { category: 'Strategic Investors', preOffer: '32.80%', postOffer: '39.04%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '14.40%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,46,66,667' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,23,33,333',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '74,00,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '49,33,333' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '37,00,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '24,66,667' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '12,33,333' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '86,33,334' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nDec 20, 2025', qibExAnchor: 3.7, nii: 4.2, niiAbove10L: 3.9, niiBelow10L: 4.6, retail: 5.8, total: 4.3 },
      { date: 'Day 2\nDec 21, 2025', qibExAnchor: 7.4, nii: 8.1, niiAbove10L: 7.6, niiBelow10L: 8.7, retail: 9.5, total: 8.0 },
      { date: 'Day 3\nDec 22, 2025', qibExAnchor: 11.9, nii: 13.8, niiAbove10L: 13.2, niiBelow10L: 14.5, retail: 15.3, total: 13.1 }
    ]
  },
  // Closed IPOs (already listed)
  {
    id: '4',
    name: 'BlueSky Finance',
    symbol: 'BLUESKY',
    status: 'Closed',
    openDate: '2023-10-15',
    closeDate: '2023-10-18',
    listingDate: '2023-10-24',
    priceBand: { min: 800, max: 850 },
    lotSize: 15,
    issueSize: '1,500 Cr',
    gmp: 350,
    gmpUpdateDate: 'Closed',
    subscription: {
      qib: 85.5,
      nii: 140.2,
      retail: 45.0,
      total: 95.4,
    },
    listingPrice: 1200,
    currentPrice: 1450,
    description: 'A non-banking financial company focused on housing finance in tier-2 cities.',
    summary: 'BlueSky Finance focuses on affordable housing loans in tier two and tier three corridors, pairing granular underwriting with centralized analytics to keep delinquencies among the lowest in its peer group. The franchise leverages deep builder relationships, co-lending alliances, and technology driven sourcing to maintain rapid disbursal turnaround. IPO funds earlier fueled capital adequacy, digital collections, and branch expansion; now management prioritizes cross sell of insurance and MSME secured lending to widen yields. Key risks include interest rate volatility and localized credit stress, yet diversified pools plus prudential provisioning support resilient spreads beyond the listing pop.',
    strengths: ['High asset quality', 'Robust collection mechanism'],
    risks: ['Interest rate cycles', 'Credit defaults'],
    financials: {
      revenue: '₹4,200 Cr',
      profit: '₹650 Cr',
      margin: '15.5%',
    },
    issueDetails: {
      freshIssue: '40%',
      offerForSale: '60%',
      faceValue: '₹10 per share',
    },
    valuation: {
      marketCap: '12,750',
      eps: '42.50',
      pe: '20.0',
      evEbitda: '12.5',
      enterpriseValue: '11,800 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Capital adequacy requirements', amount: '600.00' },
      { purpose: 'Branch network expansion', amount: '350.00' },
      { purpose: 'Technology and digital initiatives', amount: '200.00' },
      { purpose: 'General corporate purposes', amount: '150.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '75.20%', postOffer: '45.12%' },
      { category: 'Public', preOffer: '24.80%', postOffer: '54.88%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '1,76,47,059' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '88,23,529',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '52,94,118' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '35,29,411' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '26,47,059',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '17,64,706' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '8,82,353' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '61,76,471' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nDec 1, 2025', qibExAnchor: 2.1, nii: 1.8, niiAbove10L: 1.6, niiBelow10L: 2.1, retail: 3.5, total: 2.3 },
      { date: 'Day 2\nDec 2, 2025', qibExAnchor: 4.8, nii: 4.2, niiAbove10L: 3.9, niiBelow10L: 4.6, retail: 6.1, total: 4.9 },
      { date: 'Day 3\nDec 3, 2025', qibExAnchor: 9.3, nii: 8.7, niiAbove10L: 8.1, niiBelow10L: 9.4, retail: 10.8, total: 9.2 }
    ]
  },
  {
    id: '5',
    name: 'Quantum Biotech',
    symbol: 'QBIO',
    status: 'Closed',
    openDate: '2023-11-05',
    closeDate: '2023-11-08',
    listingDate: '2023-11-15',
    priceBand: { min: 320, max: 340 },
    lotSize: 40,
    issueSize: '450 Cr',
    gmp: 0,
    gmpUpdateDate: 'Awaiting',
    subscription: {
      qib: 0,
      nii: 0,
      retail: 0,
      total: 0,
    },
    description: 'Research-led biotechnology firm developing specialized generic injectables.',
    summary: 'Quantum Biotech channels R&D muscle into difficult to manufacture injectables and specialty generics, using USFDA cleared facilities and backward integrated intermediates to protect margins. The company balances regulated market filings with partnerships in Latin America and Southeast Asia, reducing reliance on any single geography. IPO proceeds were earmarked for sterile capacity upgrades, lyophilization lines, and pipeline development for oncology plus critical care therapies. Execution hinges on inspection readiness and pricing power against large incumbents. Despite volatility in US generics, strong scientific talent, IP collaborations, and a growing ANDA backlog underpin expectations for steady scale post listing.',
    strengths: ['Strong R&D capabilities', 'USFDA approved facilities'],
    risks: ['Regulatory audits', 'Pricing pressure in US market'],
    financials: {
      revenue: '₹300 Cr',
      profit: '₹80 Cr',
      margin: '26%',
    },
    issueDetails: {
      freshIssue: '85%',
      offerForSale: '15%',
      faceValue: '₹5 per share',
    },
    valuation: {
      marketCap: '1,500',
      eps: '8.50',
      pe: '40.0',
      evEbitda: '28.2',
      enterpriseValue: '1,420 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Sterile manufacturing expansion', amount: '180.00' },
      { purpose: 'R&D pipeline development', amount: '120.00' },
      { purpose: 'Regulatory filings', amount: '80.00' },
      { purpose: 'Working capital', amount: '70.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '82.50%', postOffer: '70.13%' },
      { category: 'Public', preOffer: '17.50%', postOffer: '29.87%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '1,32,35,294' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '66,17,647',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '39,70,588' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '26,47,059' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '19,85,294',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '13,23,529' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '6,61,765' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '46,32,353' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nDec 8, 2025', qibExAnchor: 3.4, nii: 2.9, niiAbove10L: 2.6, niiBelow10L: 3.3, retail: 4.7, total: 3.5 },
      { date: 'Day 2\nDec 9, 2025', qibExAnchor: 6.9, nii: 5.8, niiAbove10L: 5.4, niiBelow10L: 6.3, retail: 8.2, total: 6.8 },
      { date: 'Day 3\nDec 10, 2025', qibExAnchor: 12.1, nii: 10.6, niiAbove10L: 9.8, niiBelow10L: 11.5, retail: 13.9, total: 11.7 }
    ]
  },
  {
    id: '6',
    name: 'Apex Construction',
    symbol: 'APEXCON',
    status: 'Closed',
    openDate: '2023-09-10',
    closeDate: '2023-09-13',
    listingDate: '2023-09-21',
    priceBand: { min: 200, max: 210 },
    lotSize: 70,
    issueSize: '500 Cr',
    gmp: 50,
    gmpUpdateDate: 'Closed',
    subscription: {
      qib: 15.2,
      nii: 25.4,
      retail: 10.1,
      total: 18.5,
    },
    listingPrice: 260,
    currentPrice: 240,
    description: 'A leading construction firm specializing in highway and bridge infrastructure projects.',
    summary: 'Apex Construction specializes in EPC contracts for highways, bridges, and urban transit, leveraging pre qualified credentials and mechanized project execution to maintain healthy margins. The order book offers multi year visibility backed by NHAI awards and select HAM concessions, while a disciplined bidding framework protects working capital. IPO proceeds supported equipment fleet refresh, debt reduction, and investments in digital site management. Risks stem from raw material swings, land acquisition delays, and dependence on government spending, yet the company offsets volatility through joint ventures and regional diversification. Post listing performance hinges on translating strong backlog into predictable cash collections.',
    strengths: ['Strong order book', 'Experienced management'],
    risks: ['Raw material price volatility', 'Project delays'],
    financials: {
      revenue: '₹1,500 Cr',
      profit: '₹120 Cr',
      margin: '8.0%',
    },
    issueDetails: {
      freshIssue: '60%',
      offerForSale: '40%',
      faceValue: '₹10 per share',
    },
    valuation: {
      marketCap: '2,380',
      eps: '8.00',
      pe: '26.3',
      evEbitda: '14.8',
      enterpriseValue: '2,650 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Equipment procurement', amount: '180.00' },
      { purpose: 'Working capital for projects', amount: '150.00' },
      { purpose: 'Debt repayment', amount: '120.00' },
      { purpose: 'General corporate purposes', amount: '50.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '72.80%', postOffer: '58.24%' },
      { category: 'Public', preOffer: '27.20%', postOffer: '41.76%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,38,09,524' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,19,04,762',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '71,42,857' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '47,61,905' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '35,71,429',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '23,80,952' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '11,90,476' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '83,33,333' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nDec 13, 2025', qibExAnchor: 4.1, nii: 3.7, niiAbove10L: 3.4, niiBelow10L: 4.1, retail: 5.9, total: 4.3 },
      { date: 'Day 2\nDec 14, 2025', qibExAnchor: 8.2, nii: 7.4, niiAbove10L: 6.9, niiBelow10L: 8.0, retail: 9.8, total: 8.1 },
      { date: 'Day 3\nDec 15, 2025', qibExAnchor: 13.7, nii: 12.8, niiAbove10L: 12.1, niiBelow10L: 13.6, retail: 15.4, total: 13.9 }
    ]
  },
  {
    id: '7',
    name: 'Zenith Healthcare',
    symbol: 'ZENHEALTH',
    status: 'Closed',
    openDate: '2023-08-05',
    closeDate: '2023-08-08',
    listingDate: '2023-08-17',
    priceBand: { min: 450, max: 480 },
    lotSize: 30,
    issueSize: '1,200 Cr',
    gmp: 10,
    gmpUpdateDate: 'Closed',
    subscription: {
      qib: 2.5,
      nii: 1.8,
      retail: 0.9,
      total: 1.9,
    },
    listingPrice: 490,
    currentPrice: 520,
    description: 'Zenith Healthcare operates a chain of multi-specialty hospitals in North India.',
    summary: 'Zenith Healthcare operates multi specialty hospitals across North India with a focus on high acuity care, branded quaternary centers, and asset light spoke clinics that drive referrals. ARPOB continues to expand through complex procedures, oncology, and transplant programs while payor mix tilts toward private insurance. IPO capital improved bed additions, digital patient journeys, and supply chain efficiencies for pharmaceuticals and implants. Risks include regulatory caps on procedure pricing, intense regional competition, and ongoing talent costs. Nevertheless, strong clinical governance, expanding medical tourism inflows, and ancillary home health services position Zenith for gradual margin accretion post listing.',
    strengths: ['High average revenue per bed', 'Expansion plans'],
    risks: ['High competition', 'Regulatory caps on pricing'],
    financials: {
      revenue: '₹950 Cr',
      profit: '₹85 Cr',
      margin: '9.0%',
    },
    issueDetails: {
      freshIssue: '55%',
      offerForSale: '45%',
      faceValue: '₹10 per share',
    },
    valuation: {
      marketCap: '5,760',
      eps: '7.08',
      pe: '67.8',
      evEbitda: '32.5',
      enterpriseValue: '6,200 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Hospital expansion', amount: '450.00' },
      { purpose: 'Medical equipment upgrades', amount: '280.00' },
      { purpose: 'Technology infrastructure', amount: '150.00' },
      { purpose: 'Working capital', amount: '120.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '68.50%', postOffer: '54.80%' },
      { category: 'PE Investors', preOffer: '22.50%', postOffer: '31.50%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '13.70%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,50,00,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,25,00,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '75,00,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '50,00,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '37,50,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '25,00,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '12,50,000' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '87,50,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nDec 18, 2025', qibExAnchor: 2.8, nii: 3.2, niiAbove10L: 2.9, niiBelow10L: 3.6, retail: 4.5, total: 3.3 },
      { date: 'Day 2\nDec 19, 2025', qibExAnchor: 5.6, nii: 6.1, niiAbove10L: 5.8, niiBelow10L: 6.5, retail: 7.8, total: 6.2 },
      { date: 'Day 3\nDec 20, 2025', qibExAnchor: 9.4, nii: 10.9, niiAbove10L: 10.3, niiBelow10L: 11.6, retail: 12.7, total: 10.5 }
    ]
  },
  {
    id: '8',
    name: 'Rapid Delivery Systems',
    symbol: 'RAPIDDEL',
    status: 'Closed',
    openDate: '2023-07-20',
    closeDate: '2023-07-23',
    listingDate: '2023-07-31',
    priceBand: { min: 80, max: 85 },
    lotSize: 175,
    issueSize: '300 Cr',
    gmp: 90,
    gmpUpdateDate: 'Closed',
    subscription: {
      qib: 65.4,
      nii: 110.2,
      retail: 55.8,
      total: 82.5,
    },
    listingPrice: 175,
    currentPrice: 160,
    description: 'Tech-enabled logistics company focusing on hyperlocal delivery services.',
    summary: 'Rapid Delivery Systems marries gig fleets, dark stores, and a proprietary dispatch engine to serve hyperlocal commerce, grocery, and pharmacy clients. Explosive subscription in the IPO reflected confidence in its ability to sustain high growth while nudging unit economics toward profitability. Management channels funds into automation, electric vehicle rollouts, and embedded fintech offerings for merchants, creating stickier relationships. Challenges include heavy cash burn, intense competition, and regulatory scrutiny on gig labor practices. Still, the company benefits from nationwide coverage, cross selling warehousing services, and data driven routing advantages that can support future marketplace partnerships.',
    strengths: ['High growth sector', 'Scalable technology platform'],
    risks: ['Cash burn', 'Intense competition'],
    financials: {
      revenue: '₹400 Cr',
      profit: '-₹25 Cr',
      margin: '-6.2%',
    },
    issueDetails: {
      freshIssue: '100%',
      offerForSale: '0%',
      faceValue: '₹1 per share',
    },
    valuation: {
      marketCap: '3,500',
      eps: '-1.47',
      pe: 'N/A',
      evEbitda: 'N/A',
      enterpriseValue: '3,200 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Dark store expansion', amount: '120.00' },
      { purpose: 'Technology platform development', amount: '80.00' },
      { purpose: 'Working capital', amount: '60.00' },
      { purpose: 'General corporate purposes', amount: '40.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '45.20%', postOffer: '36.16%' },
      { category: 'VC/PE Investors', preOffer: '48.80%', postOffer: '55.04%' },
      { category: 'Public', preOffer: '6.00%', postOffer: '8.80%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '3,52,94,118' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,76,47,059',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '1,05,88,235' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '70,58,824' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '52,94,118',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '35,29,412' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '17,64,706' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,23,52,941' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nDec 23, 2025', qibExAnchor: 3.9, nii: 4.1, niiAbove10L: 3.8, niiBelow10L: 4.5, retail: 5.7, total: 4.4 },
      { date: 'Day 2\nDec 24, 2025', qibExAnchor: 7.8, nii: 8.2, niiAbove10L: 7.6, niiBelow10L: 8.9, retail: 9.4, total: 8.3 },
      { date: 'Day 3\nDec 25, 2025', qibExAnchor: 12.6, nii: 14.1, niiAbove10L: 13.4, niiBelow10L: 15.0, retail: 15.8, total: 13.9 }
    ]
  },
  {
    id: '9',
    name: 'SolarWinds Power',
    symbol: 'SOLWIN',
    status: 'Closed',
    openDate: '2023-06-15',
    closeDate: '2023-06-18',
    listingDate: '2023-06-26',
    priceBand: { min: 120, max: 130 },
    lotSize: 115,
    issueSize: '800 Cr',
    gmp: 20,
    gmpUpdateDate: 'Closed',
    subscription: {
      qib: 5.6,
      nii: 8.2,
      retail: 4.5,
      total: 6.1,
    },
    listingPrice: 150,
    currentPrice: 180,
    description: 'SolarWinds Power manufactures solar panels and related components.',
    summary: 'SolarWinds Power manufactures photovoltaic modules and balance of system components, pairing backward integrated cells with EPC services for utility and rooftop clients. Government incentives and corporate sustainability targets underpin steady demand, while exports add diversification. IPO proceeds earlier funded module capacity expansion, working capital, and R&D into high efficiency TOPCon lines. Risks include dependency on imported wafers, policy shifts, and commoditized pricing, yet operational excellence and service bundling help defend margins. Post listing, the company continues to chase captive industrial projects and hybrid storage microgrids, aiming to convert improving subscription interest into sustainable cash flows.',
    strengths: ['Govt incentives for solar', 'Export potential'],
    risks: ['Dependency on imported raw materials', 'Policy changes'],
    financials: {
      revenue: '₹600 Cr',
      profit: '₹40 Cr',
      margin: '6.7%',
    },
    issueDetails: {
      freshIssue: '70%',
      offerForSale: '30%',
      faceValue: '₹5 per share',
    },
    valuation: {
      marketCap: '6,150',
      eps: '3.25',
      pe: '40.0',
      evEbitda: '25.6',
      enterpriseValue: '6,800 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Module manufacturing capacity', amount: '380.00' },
      { purpose: 'R&D for TOPCon technology', amount: '150.00' },
      { purpose: 'Working capital', amount: '180.00' },
      { purpose: 'General corporate purposes', amount: '90.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '78.50%', postOffer: '62.80%' },
      { category: 'Public', preOffer: '21.50%', postOffer: '37.20%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '6,15,38,462' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '3,07,69,231',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '1,84,61,539' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '1,23,07,692' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '92,30,769',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '61,53,846' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '30,76,923' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '2,15,38,462' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nDec 28, 2025', qibExAnchor: 4.7, nii: 4.3, niiAbove10L: 4.0, niiBelow10L: 4.7, retail: 6.2, total: 4.9 },
      { date: 'Day 2\nDec 29, 2025', qibExAnchor: 9.1, nii: 8.6, niiAbove10L: 8.1, niiBelow10L: 9.2, retail: 10.9, total: 9.3 },
      { date: 'Day 3\nDec 30, 2025', qibExAnchor: 15.4, nii: 14.8, niiAbove10L: 14.1, niiBelow10L: 15.6, retail: 17.3, total: 15.7 }
    ]
  },
  {
    id: '10',
    name: 'FinTech Capital',
    symbol: 'FINCAP',
    status: 'Closed',
    openDate: '2023-05-25',
    closeDate: '2023-05-28',
    listingDate: '2023-06-05',
    priceBand: { min: 500, max: 520 },
    lotSize: 28,
    issueSize: '2,000 Cr',
    gmp: 150,
    gmpUpdateDate: 'Closed',
    subscription: {
      qib: 45.0,
      nii: 60.5,
      retail: 25.0,
      total: 48.2,
    },
    listingPrice: 670,
    currentPrice: 800,
    description: 'A digital lending platform connecting borrowers with institutional investors.',
    summary: 'FinTech Capital connects retail borrowers and small businesses to institutional capital through a data rich marketplace, using proprietary credit scoring to maintain low NPAs. The platform blends supply from banks, NBFCs, and alternate funds, diversifying funding costs while enabling embedded finance partnerships. IPO proceeds accelerated technology investments, geographic expansion, and reserve buffers to support new product launches in secured lending. Regulatory tightening around digital lending and cybersecurity threats remain watchpoints, yet strong compliance frameworks and co-lending tie ups temper downside. Investors continue to track profitability progression as operating leverage improves beyond the blockbuster listing debut.',
    strengths: ['Proprietary credit scoring model', 'Low NPA levels'],
    risks: ['Regulatory tightening', 'Cybersecurity threats'],
    financials: {
      revenue: '₹2,500 Cr',
      profit: '₹450 Cr',
      margin: '18.0%',
    },
    issueDetails: {
      freshIssue: '50%',
      offerForSale: '50%',
      faceValue: '₹10 per share',
    },
    valuation: {
      marketCap: '14,560',
      eps: '32.50',
      pe: '16.0',
      evEbitda: '10.8',
      enterpriseValue: '13,200 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Technology platform enhancement', amount: '520.00' },
      { purpose: 'Geographic expansion', amount: '380.00' },
      { purpose: 'Reserve buffer for lending', amount: '650.00' },
      { purpose: 'General corporate purposes', amount: '250.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '52.80%', postOffer: '42.24%' },
      { category: 'PE Investors', preOffer: '38.20%', postOffer: '45.84%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '11.92%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '3,84,61,538' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,92,30,769',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '1,15,38,462' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '76,92,307' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '57,69,231',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '38,46,154' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '19,23,077' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,34,61,538' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nJan 2, 2026', qibExAnchor: 3.2, nii: 2.8, niiAbove10L: 2.5, niiBelow10L: 3.2, retail: 4.6, total: 3.4 },
      { date: 'Day 2\nJan 3, 2026', qibExAnchor: 6.5, nii: 5.7, niiAbove10L: 5.3, niiBelow10L: 6.2, retail: 8.1, total: 6.6 },
      { date: 'Day 3\nJan 4, 2026', qibExAnchor: 10.8, nii: 9.9, niiAbove10L: 9.4, niiBelow10L: 10.5, retail: 13.2, total: 11.1 }
    ]
  },
  {
    id: '11',
    name: 'Ocean Blue Ports',
    symbol: 'OBPORTS',
    status: 'Closed',
    openDate: '2023-04-10',
    closeDate: '2023-04-13',
    listingDate: '2023-04-21',
    priceBand: { min: 300, max: 315 },
    lotSize: 45,
    issueSize: '3,500 Cr',
    gmp: 5,
    gmpUpdateDate: 'Closed',
    subscription: {
      qib: 1.5,
      nii: 1.1,
      retail: 0.8,
      total: 1.2,
    },
    listingPrice: 320,
    currentPrice: 310,
    description: 'Operator of private ports and terminals on the east coast.',
    summary: 'Ocean Blue Ports operates strategic terminals along the east coast, handling bulk, container, and coastal cargo through landlord and operating models. Stable long term contracts with steel makers, fertilizer firms, and coastal shipping lines lend visibility yet throughput still tracks global trade cycles. IPO proceeds funded dredging, mechanized handling, and expansion of rail sidings to attract higher value cargo. Environmental approvals, cyclone disruptions, and dependence on marquee customers remain key risks. Management focuses on automation, coastal shipping incentives, and value added logistics parks to lift returns, positioning the company for gradual deleveraging after listing.',
    strengths: ['Strategic location', 'Long-term cargo contracts'],
    risks: ['Dependency on global trade volume', 'Environmental regulations'],
    financials: {
      revenue: '₹5,000 Cr',
      profit: '₹600 Cr',
      margin: '12.0%',
    },
    issueDetails: {
      freshIssue: '30%',
      offerForSale: '70%',
      faceValue: '₹10 per share',
    },
    valuation: {
      marketCap: '11,100',
      eps: '18.00',
      pe: '17.5',
      evEbitda: '11.2',
      enterpriseValue: '14,500 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Dredging and mechanization', amount: '980.00' },
      { purpose: 'Rail siding expansion', amount: '620.00' },
      { purpose: 'Debt repayment', amount: '1,200.00' },
      { purpose: 'General corporate purposes', amount: '350.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '85.20%', postOffer: '51.12%' },
      { category: 'Public', preOffer: '14.80%', postOffer: '48.88%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '11,11,11,111' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '5,55,55,556',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '3,33,33,333' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '2,22,22,223' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '1,66,66,667',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '1,11,11,111' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '55,55,556' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '3,88,88,888' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nJan 7, 2026', qibExAnchor: 4.4, nii: 3.9, niiAbove10L: 3.6, niiBelow10L: 4.3, retail: 5.8, total: 4.6 },
      { date: 'Day 2\nJan 8, 2026', qibExAnchor: 8.7, nii: 7.8, niiAbove10L: 7.3, niiBelow10L: 8.4, retail: 9.7, total: 8.6 },
      { date: 'Day 3\nJan 9, 2026', qibExAnchor: 14.2, nii: 13.1, niiAbove10L: 12.5, niiBelow10L: 13.8, retail: 15.9, total: 14.4 }
    ]
  },
  {
    id: '12',
    name: 'CyberSafe Security',
    symbol: 'CYBSAFE',
    status: 'Closed',
    openDate: '2023-03-05',
    closeDate: '2023-03-08',
    listingDate: '2023-03-16',
    priceBand: { min: 600, max: 650 },
    lotSize: 20,
    issueSize: '600 Cr',
    gmp: 200,
    gmpUpdateDate: 'Closed',
    subscription: {
      qib: 90.5,
      nii: 150.8,
      retail: 80.2,
      total: 110.5,
    },
    listingPrice: 850,
    currentPrice: 920,
    description: 'Provider of cybersecurity solutions for enterprises and government agencies.',
    summary: 'CyberSafe Security provides managed cyber defense, incident response, and zero trust architecture consulting to enterprises and government agencies. Recurring subscriptions across SOC services create sticky revenue, while proprietary threat intelligence and partnerships with hyperscalers keep offerings current. IPO proceeds accelerated R&D in OT security, global delivery centers, and targeted acquisitions to fill niche capabilities. Talent shortages, rapid technology shifts, and compliance requirements represent ongoing challenges, yet strong training programs and platform investments mitigate attrition. Heavy oversubscription reflected investor appetite for pure play cybersecurity exposure with expanding operating leverage and cash generation.',
    strengths: ['High demand for security', 'Recurring revenue model'],
    risks: ['Talent shortage', 'Rapid technological obsolescence'],
    financials: {
      revenue: '₹450 Cr',
      profit: '₹90 Cr',
      margin: '20.0%',
    },
    issueDetails: {
      freshIssue: '75%',
      offerForSale: '25%',
      faceValue: '₹5 per share',
    },
    valuation: {
      marketCap: '3,900',
      eps: '22.50',
      pe: '28.9',
      evEbitda: '18.2',
      enterpriseValue: '3,650 Cr'
    },
    objectsOfIssue: [
      { purpose: 'R&D in OT security', amount: '180.00' },
      { purpose: 'Global delivery centers', amount: '150.00' },
      { purpose: 'Strategic acquisitions', amount: '120.00' },
      { purpose: 'Working capital', amount: '100.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '62.50%', postOffer: '50.00%' },
      { category: 'PE/VC Investors', preOffer: '28.50%', postOffer: '35.63%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '14.37%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '92,30,769' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '46,15,385',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '27,69,231' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '18,46,154' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '13,84,615',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '9,23,077' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '4,61,538' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '32,30,769' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nJan 12, 2026', qibExAnchor: 2.6, nii: 2.3, niiAbove10L: 2.1, niiBelow10L: 2.6, retail: 3.9, total: 2.8 },
      { date: 'Day 2\nJan 13, 2026', qibExAnchor: 5.2, nii: 4.7, niiAbove10L: 4.4, niiBelow10L: 5.1, retail: 6.8, total: 5.4 },
      { date: 'Day 3\nJan 14, 2026', qibExAnchor: 8.9, nii: 8.1, niiAbove10L: 7.6, niiBelow10L: 8.7, retail: 11.2, total: 9.1 }
    ]
  },
  {
    id: '13',
    name: 'AgroTech Industries',
    symbol: 'AGROTECH',
    status: 'Closed',
    openDate: '2023-02-15',
    closeDate: '2023-02-18',
    listingDate: '2023-02-26',
    priceBand: { min: 150, max: 160 },
    lotSize: 90,
    issueSize: '400 Cr',
    gmp: 30,
    gmpUpdateDate: 'Closed',
    subscription: {
      qib: 8.5,
      nii: 12.4,
      retail: 6.8,
      total: 9.5,
    },
    listingPrice: 190,
    currentPrice: 210,
    description: 'Manufacturer of agricultural machinery and irrigation systems.',
    summary: 'AgroTech Industries manufactures farm equipment and irrigation systems, linking design, fabrication, and distribution across India to capture mechanization demand. Dealer networks and financing tie ups help farmers adopt modern implements, while exports to Africa and Southeast Asia diversify revenue. IPO proceeds were directed toward automation, precision agriculture R&D, and expansion of after sales services. Risks include monsoon variability, commodity price swings, and subsidy policy changes, yet the company counters through product mix flexibility and hedging programs. Listing has enabled stronger brand visibility and partnerships with agri startups, supporting gradual improvements in profitability.',
    strengths: ['Rural economy focus', 'Wide distribution network'],
    risks: ['Monsoon dependency', 'Raw material costs'],
    financials: {
      revenue: '₹700 Cr',
      profit: '₹55 Cr',
      margin: '7.8%',
    },
    issueDetails: {
      freshIssue: '65%',
      offerForSale: '35%',
      faceValue: '₹10 per share',
    },
    valuation: {
      marketCap: '2,500',
      eps: '4.40',
      pe: '36.4',
      evEbitda: '22.8',
      enterpriseValue: '2,750 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Manufacturing automation', amount: '120.00' },
      { purpose: 'Precision agriculture R&D', amount: '80.00' },
      { purpose: 'Dealer network expansion', amount: '100.00' },
      { purpose: 'Working capital', amount: '60.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '75.80%', postOffer: '60.64%' },
      { category: 'Public', preOffer: '24.20%', postOffer: '39.36%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,50,00,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,25,00,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '75,00,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '50,00,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '37,50,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '25,00,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '12,50,000' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '87,50,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nJan 17, 2026', qibExAnchor: 3.8, nii: 3.4, niiAbove10L: 3.1, niiBelow10L: 3.8, retail: 5.2, total: 4.0 },
      { date: 'Day 2\nJan 18, 2026', qibExAnchor: 7.5, nii: 6.8, niiAbove10L: 6.4, niiBelow10L: 7.3, retail: 8.9, total: 7.6 },
      { date: 'Day 3\nJan 19, 2026', qibExAnchor: 12.3, nii: 11.7, niiAbove10L: 11.1, niiBelow10L: 12.4, retail: 14.6, total: 12.8 }
    ]
  },
  {
    id: '14',
    name: 'Metro Retail Chains',
    symbol: 'METRORET',
    status: 'Closed',
    openDate: '2023-01-20',
    closeDate: '2023-01-23',
    listingDate: '2023-02-01',
    priceBand: { min: 90, max: 95 },
    lotSize: 150,
    issueSize: '1,000 Cr',
    gmp: -5,
    gmpUpdateDate: 'Closed',
    subscription: {
      qib: 0.9,
      nii: 0.5,
      retail: 0.6,
      total: 0.7,
    },
    listingPrice: 90,
    currentPrice: 85,
    description: 'Value retail chain operating in tier-2 and tier-3 cities.',
    summary: 'Metro Retail Chains targets aspirational shoppers in tier two and tier three cities with a low cost, wide assortment format emphasizing private labels. Supply chain efficiencies, direct sourcing, and analytics driven merchandising aim to protect wafer thin margins. IPO funds were intended for warehouse automation, new store rollout, and debt reduction, but sluggish subscription highlighted concerns about ecommerce competition and muted profitability. Management now focuses on omni channel pilots, loyalty programs, and shrink reduction to revive growth. Investors monitor inventory turns and working capital discipline to gauge potential rerating after the tepid listing.',
    strengths: ['Cost efficiency', 'Growing middle class'],
    risks: ['E-commerce competition', 'Inventory management'],
    financials: {
      revenue: '₹1,800 Cr',
      profit: '₹20 Cr',
      margin: '1.1%',
    },
    issueDetails: {
      freshIssue: '45%',
      offerForSale: '55%',
      faceValue: '₹2 per share',
    },
    valuation: {
      marketCap: '10,500',
      eps: '0.19',
      pe: '500.0',
      evEbitda: '85.5',
      enterpriseValue: '11,200 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Warehouse automation', amount: '280.00' },
      { purpose: 'New store rollout', amount: '350.00' },
      { purpose: 'Debt reduction', amount: '250.00' },
      { purpose: 'Working capital', amount: '120.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '68.50%', postOffer: '54.80%' },
      { category: 'PE Investors', preOffer: '22.50%', postOffer: '32.78%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '12.42%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '10,52,63,158' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '5,26,31,579',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '3,15,78,947' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '2,10,52,632' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '1,57,89,474',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '1,05,26,316' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '52,63,158' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '3,68,42,105' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nJan 22, 2026', qibExAnchor: 4.2, nii: 3.8, niiAbove10L: 3.5, niiBelow10L: 4.2, retail: 5.7, total: 4.4 },
      { date: 'Day 2\nJan 23, 2026', qibExAnchor: 8.4, nii: 7.6, niiAbove10L: 7.1, niiBelow10L: 8.2, retail: 9.8, total: 8.5 },
      { date: 'Day 3\nJan 24, 2026', qibExAnchor: 13.9, nii: 12.9, niiAbove10L: 12.3, niiBelow10L: 13.6, retail: 16.1, total: 14.2 }
    ]
  },
  {
    id: '15',
    name: 'Elite Hospitality',
    symbol: 'ELITEHOS',
    status: 'Closed',
    openDate: '2022-12-10',
    closeDate: '2022-12-13',
    listingDate: '2022-12-21',
    priceBand: { min: 250, max: 270 },
    lotSize: 55,
    issueSize: '900 Cr',
    gmp: 40,
    gmpUpdateDate: 'Closed',
    subscription: {
      qib: 10.2,
      nii: 15.6,
      retail: 8.9,
      total: 11.5,
    },
    listingPrice: 310,
    currentPrice: 350,
    description: 'Luxury hotel chain with properties in major tourist destinations.',
    summary: 'Elite Hospitality operates upscale hotels in major tourist circuits, drawing demand from leisure travelers, corporate events, and destination weddings. The brand invests in experiential offerings, curated F&B, and loyalty programs to lift RevPAR. IPO proceeds supported refurbishments, debt reduction, and expansion into managed properties to lighten capex. Sensitivities include economic slowdowns, seasonality, and high maintenance costs, but diversified geographic mix and premium positioning aid resilience. Post listing, management pursues asset light growth, digital booking channels, and partnerships with global travel aggregators to sustain occupancy momentum and margin expansion. Shareholders expect gradual deleveraging and stronger free cash generation as average daily rates remain firm.',
    strengths: ['Post-pandemic travel boom', 'Premium brand value'],
    risks: ['Economic downturn', 'High maintenance costs'],
    financials: {
      revenue: '₹1,100 Cr',
      profit: '₹150 Cr',
      margin: '13.6%',
    },
    issueDetails: {
      freshIssue: '55%',
      offerForSale: '45%',
      faceValue: '₹10 per share',
    },
    valuation: {
      marketCap: '3,330',
      eps: '15.00',
      pe: '18.0',
      evEbitda: '12.5',
      enterpriseValue: '3,850 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Property refurbishment', amount: '280.00' },
      { purpose: 'Debt repayment', amount: '320.00' },
      { purpose: 'New managed properties', amount: '180.00' },
      { purpose: 'Technology upgrades', amount: '120.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '72.50%', postOffer: '58.00%' },
      { category: 'PE Investors', preOffer: '18.50%', postOffer: '28.30%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '13.70%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '3,33,33,333' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,66,66,667',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '1,00,00,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '66,66,667' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '50,00,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '33,33,333' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '16,66,667' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,16,66,667' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nJan 27, 2026', qibExAnchor: 3.1, nii: 2.7, niiAbove10L: 2.4, niiBelow10L: 3.1, retail: 4.3, total: 3.3 },
      { date: 'Day 2\nJan 28, 2026', qibExAnchor: 6.2, nii: 5.4, niiAbove10L: 5.0, niiBelow10L: 5.9, retail: 7.6, total: 6.4 },
      { date: 'Day 3\nJan 29, 2026', qibExAnchor: 10.1, nii: 9.2, niiAbove10L: 8.7, niiBelow10L: 9.8, retail: 12.4, total: 10.3 }
    ]
  },
  // 10 NEW DUMMY CLOSED IPOS
  {
    id: '16',
    name: 'OmniComm Systems',
    symbol: 'OMNICOMM',
    status: 'Closed',
    openDate: '2022-11-05',
    closeDate: '2022-11-08',
    listingDate: '2022-11-16',
    priceBand: { min: 180, max: 200 },
    lotSize: 75,
    issueSize: '550 Cr',
    gmp: 80,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 35.5, nii: 55.2, retail: 22.1, total: 38.4 },
    listingPrice: 285,
    currentPrice: 310,
    description: 'Unified communications platform provider for small businesses.',
    summary: 'OmniComm Systems delivers unified communications for small businesses, combining cloud PBX, video collaboration, and AI assisted contact center modules under a SaaS model. Global reseller networks and freemium onboarding keep acquisition costs efficient while churn reduction remains an ongoing focus. IPO proceeds financed data center expansion, security hardening, and product localization for North America and Europe. Risks include intense competition, data privacy regulation, and currency swings across its worldwide footprint. Still, scale economies, cross sell of analytics, and sticky integrations with CRM stacks support steady cash generation and investor confidence after the strong listing premium.',
    strengths: ['Scalable SaaS model', 'Global client base'],
    risks: ['Data privacy regulations', 'High churn rate'],
    financials: { revenue: '₹600 Cr', profit: '₹90 Cr', margin: '15.0%' },
    issueDetails: { freshIssue: '70%', offerForSale: '30%', faceValue: '₹5 per share' },
    valuation: {
      marketCap: '2,750',
      eps: '9.00',
      pe: '22.2',
      evEbitda: '15.5',
      enterpriseValue: '2,580 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Data center expansion', amount: '180.00' },
      { purpose: 'Security hardening', amount: '120.00' },
      { purpose: 'Product localization', amount: '150.00' },
      { purpose: 'Working capital', amount: '100.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '58.50%', postOffer: '46.80%' },
      { category: 'VC Investors', preOffer: '32.50%', postOffer: '39.00%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '14.20%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,75,00,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,37,50,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '82,50,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '55,00,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '41,25,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '27,50,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '13,75,000' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '96,25,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nFeb 1, 2026', qibExAnchor: 4.0, nii: 3.6, niiAbove10L: 3.3, niiBelow10L: 4.0, retail: 5.5, total: 4.2 },
      { date: 'Day 2\nFeb 2, 2026', qibExAnchor: 8.0, nii: 7.2, niiAbove10L: 6.7, niiBelow10L: 7.8, retail: 9.3, total: 8.1 },
      { date: 'Day 3\nFeb 3, 2026', qibExAnchor: 13.2, nii: 12.1, niiAbove10L: 11.5, niiBelow10L: 12.8, retail: 15.1, total: 13.5 }
    ]
  },
  {
    id: '17',
    name: 'BioLife Sciences',
    symbol: 'BIOLIFE',
    status: 'Closed',
    openDate: '2022-10-12',
    closeDate: '2022-10-15',
    listingDate: '2022-10-24',
    priceBand: { min: 550, max: 580 },
    lotSize: 25,
    issueSize: '1,100 Cr',
    gmp: 120,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 62.1, nii: 88.5, retail: 34.2, total: 60.5 },
    listingPrice: 710,
    currentPrice: 650,
    description: 'Biotechnology firm focused on sustainable agricultural solutions.',
    summary: 'BioLife Sciences develops biological crop protection and nutrition solutions, leveraging patented microbes and sustainable formulations to help growers reduce chemical dependence. The company exports to multiple continents and collaborates with agri universities, supporting pipeline depth. IPO capital strengthened manufacturing automation, regulatory registrations, and farmer advisory platforms. Risks involve seasonal demand, regulatory approvals, and competition from global majors, yet BioLife counters through localized trials and premium branding. Investors monitor how the company navigates input cost inflation while scaling high margin products to justify earlier oversubscription levels. Recent GMP moderation signals balanced expectations for medium term earnings visibility.',
    strengths: ['Patented technology', 'Growing organic market'],
    risks: ['Regulatory hurdles', 'Seasonality'],
    financials: { revenue: '₹850 Cr', profit: '₹120 Cr', margin: '14.1%' },
    issueDetails: { freshIssue: '80%', offerForSale: '20%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '5,800',
      eps: '12.00',
      pe: '48.3',
      evEbitda: '32.5',
      enterpriseValue: '5,450 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Manufacturing automation', amount: '350.00' },
      { purpose: 'Regulatory registrations', amount: '280.00' },
      { purpose: 'Farmer advisory platforms', amount: '180.00' },
      { purpose: 'Working capital', amount: '190.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '68.50%', postOffer: '54.80%' },
      { category: 'PE Investors', preOffer: '22.50%', postOffer: '32.60%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '12.60%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '1,89,65,517' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '94,82,759',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '56,89,655' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '37,93,104' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '28,44,828',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '18,96,552' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '9,48,276' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '66,37,931' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nFeb 6, 2026', qibExAnchor: 2.9, nii: 2.5, niiAbove10L: 2.2, niiBelow10L: 2.9, retail: 4.1, total: 3.1 },
      { date: 'Day 2\nFeb 7, 2026', qibExAnchor: 5.8, nii: 5.0, niiAbove10L: 4.6, niiBelow10L: 5.5, retail: 7.2, total: 6.0 },
      { date: 'Day 3\nFeb 8, 2026', qibExAnchor: 9.7, nii: 8.6, niiAbove10L: 8.0, niiBelow10L: 9.3, retail: 11.8, total: 9.9 }
    ]
  },
  {
    id: '18',
    name: 'AutoMotive Gears Ltd',
    symbol: 'AUTOGEAR',
    status: 'Closed',
    openDate: '2022-09-20',
    closeDate: '2022-09-23',
    listingDate: '2022-10-01',
    priceBand: { min: 320, max: 340 },
    lotSize: 40,
    issueSize: '750 Cr',
    gmp: 25,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 5.5, nii: 7.2, retail: 3.1, total: 5.4 },
    listingPrice: 365,
    currentPrice: 420,
    description: 'Manufacturer of precision gears for the automotive industry.',
    summary: 'AutoMotive Gears Ltd manufactures precision gears and transmission components for passenger and commercial vehicle OEMs, leveraging decades long relationships and automated machining lines. Exposure to export markets plus rising EV drivetrain programs provide growth avenues beyond cyclical domestic demand. IPO proceeds upgraded forging capacity, robotics, and working capital to support platform launches. Risks include raw material swings, labor availability, and OEM pricing pressure, yet technological know how and quality certifications offer differentiation. Investors evaluate how the company balances capex with dividends while pursuing higher margin aftermarket and industrial gear opportunities.',
    strengths: ['Established OEM relationships', 'Capacity expansion'],
    risks: ['Cyclical auto industry', 'Raw material costs'],
    financials: { revenue: '₹1,200 Cr', profit: '₹150 Cr', margin: '12.5%' },
    issueDetails: { freshIssue: '60%', offerForSale: '40%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '3,400',
      eps: '15.00',
      pe: '22.7',
      evEbitda: '14.2',
      enterpriseValue: '3,680 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Forging capacity upgrade', amount: '280.00' },
      { purpose: 'Robotics and automation', amount: '180.00' },
      { purpose: 'Working capital', amount: '190.00' },
      { purpose: 'General corporate purposes', amount: '100.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '78.50%', postOffer: '62.80%' },
      { category: 'Public', preOffer: '21.50%', postOffer: '37.20%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,20,58,824' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,10,29,412',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '66,17,647' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '44,11,765' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '33,08,824',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '22,05,882' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '11,02,942' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '77,20,588' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nFeb 11, 2026', qibExAnchor: 3.5, nii: 3.1, niiAbove10L: 2.8, niiBelow10L: 3.5, retail: 4.9, total: 3.7 },
      { date: 'Day 2\nFeb 12, 2026', qibExAnchor: 7.0, nii: 6.2, niiAbove10L: 5.7, niiBelow10L: 6.8, retail: 8.4, total: 7.1 },
      { date: 'Day 3\nFeb 13, 2026', qibExAnchor: 11.6, nii: 10.5, niiAbove10L: 9.9, niiBelow10L: 11.2, retail: 13.7, total: 11.8 }
    ]
  },
  {
    id: '19',
    name: 'FreshFoods Retail',
    symbol: 'FRESHFOOD',
    status: 'Closed',
    openDate: '2022-08-15',
    closeDate: '2022-08-18',
    listingDate: '2022-08-27',
    priceBand: { min: 120, max: 130 },
    lotSize: 110,
    issueSize: '400 Cr',
    gmp: 10,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 1.8, nii: 2.5, retail: 1.9, total: 2.1 },
    listingPrice: 135,
    currentPrice: 125,
    description: 'Chain of gourmet grocery stores in metropolitan areas.',
    summary: 'FreshFoods Retail curates gourmet grocery, bakery, and ready to cook assortments in metropolitan stores, targeting affluent consumers seeking discovery led experiences. Central kitchens, cold chain investments, and private labels help sustain margins despite perishable inventory. IPO funds expanded omnichannel delivery, store refurbishments, and supplier financing programs. Risks stem from supply disruptions, competition from big box and online grocers, and high rental commitments. Management leans on membership models, culinary workshops, and localized sourcing to build loyalty. Post listing share drift reflects execution challenges, but operational tweaks aim to restore growth and profitability.',
    strengths: ['Premium brand positioning', 'High margins'],
    risks: ['Supply chain disruptions', 'Perishable inventory'],
    financials: { revenue: '₹550 Cr', profit: '₹30 Cr', margin: '5.5%' },
    issueDetails: { freshIssue: '50%', offerForSale: '50%', faceValue: '₹5 per share' },
    valuation: {
      marketCap: '3,080',
      eps: '2.31',
      pe: '56.3',
      evEbitda: '38.5',
      enterpriseValue: '3,250 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Omnichannel delivery expansion', amount: '120.00' },
      { purpose: 'Store refurbishments', amount: '100.00' },
      { purpose: 'Supplier financing programs', amount: '80.00' },
      { purpose: 'Working capital', amount: '100.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '65.50%', postOffer: '52.40%' },
      { category: 'PE Investors', preOffer: '25.50%', postOffer: '35.35%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '12.25%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '3,07,69,231' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,53,84,615',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '92,30,769' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '61,53,846' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '46,15,385',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '30,76,923' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '15,38,462' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,07,69,231' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nFeb 16, 2026', qibExAnchor: 4.1, nii: 3.7, niiAbove10L: 3.4, niiBelow10L: 4.1, retail: 5.6, total: 4.3 },
      { date: 'Day 2\nFeb 17, 2026', qibExAnchor: 8.2, nii: 7.4, niiAbove10L: 6.9, niiBelow10L: 7.9, retail: 9.5, total: 8.3 },
      { date: 'Day 3\nFeb 18, 2026', qibExAnchor: 13.5, nii: 12.3, niiAbove10L: 11.7, niiBelow10L: 13.0, retail: 15.4, total: 13.7 }
    ]
  },
  {
    id: '20',
    name: 'BuildInfra Ltd',
    symbol: 'BUILDINF',
    status: 'Closed',
    openDate: '2022-07-05',
    closeDate: '2022-07-08',
    listingDate: '2022-07-16',
    priceBand: { min: 240, max: 250 },
    lotSize: 60,
    issueSize: '950 Cr',
    gmp: 40,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 12.4, nii: 18.2, retail: 9.5, total: 13.8 },
    listingPrice: 295,
    currentPrice: 380,
    description: 'Construction and infrastructure development company.',
    summary: 'BuildInfra Ltd executes large civil projects across transportation, water, and industrial segments, pairing engineering depth with cluster based execution teams. A robust order book anchored by government contracts offers revenue visibility, while focus on mechanization and procurement control supports margins. IPO proceeds reduced debt, funded equipment purchases, and provided working capital for hybrid annuity projects. Risks include execution delays, arbitration cycles, and labor shortages, yet the company mitigates through disciplined bid selection and joint ventures. Investors monitor cash conversion and the ramp up of asset monetization plans to gauge future shareholder returns.',
    strengths: ['Strong order book', 'Government contracts'],
    risks: ['Execution delays', 'Labor shortages'],
    financials: { revenue: '₹2,100 Cr', profit: '₹180 Cr', margin: '8.6%' },
    issueDetails: { freshIssue: '55%', offerForSale: '45%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '3,800',
      eps: '12.00',
      pe: '20.8',
      evEbitda: '12.5',
      enterpriseValue: '4,500 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Equipment purchases', amount: '320.00' },
      { purpose: 'Debt reduction', amount: '280.00' },
      { purpose: 'Working capital for HAM projects', amount: '250.00' },
      { purpose: 'General corporate purposes', amount: '100.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '72.80%', postOffer: '58.24%' },
      { category: 'Public', preOffer: '27.20%', postOffer: '41.76%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '3,80,00,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,90,00,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '1,14,00,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '76,00,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '57,00,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '38,00,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '19,00,000' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,33,00,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nFeb 21, 2026', qibExAnchor: 3.3, nii: 2.9, niiAbove10L: 2.6, niiBelow10L: 3.3, retail: 4.7, total: 3.5 },
      { date: 'Day 2\nFeb 22, 2026', qibExAnchor: 6.6, nii: 5.8, niiAbove10L: 5.4, niiBelow10L: 6.3, retail: 8.1, total: 6.7 },
      { date: 'Day 3\nFeb 23, 2026', qibExAnchor: 10.9, nii: 9.8, niiAbove10L: 9.2, niiBelow10L: 10.5, retail: 13.2, total: 11.1 }
    ]
  },
  {
    id: '21',
    name: 'DigitalPayments Corp',
    symbol: 'DIGIPAY',
    status: 'Closed',
    openDate: '2022-06-10',
    closeDate: '2022-06-13',
    listingDate: '2022-06-22',
    priceBand: { min: 750, max: 800 },
    lotSize: 18,
    issueSize: '2,500 Cr',
    gmp: 180,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 42.5, nii: 58.2, retail: 25.4, total: 40.8 },
    listingPrice: 990,
    currentPrice: 1150,
    description: 'Leading digital payments gateway and fintech solutions.',
    summary: 'DigitalPayments Corp runs a scaled payment gateway and fintech stack, enabling merchants to accept omnichannel transactions while offering value added services like risk analytics, BNPL orchestration, and working capital loans. Network effects, deep bank partnerships, and developer friendly APIs entrench the platform despite intense competition. IPO capital extended market reach into offline categories, funded acquisitions in compliance tooling, and strengthened the balance sheet. Risks span regulatory interventions, interchange revisions, and cybersecurity threats, yet the company benefits from tokenization capabilities and diversified monetization. Investors expect continued margin expansion as newer lending and subscription products mature.',
    strengths: ['Market leadership', 'Network effects'],
    risks: ['Regulatory changes', 'Competition'],
    financials: { revenue: '₹3,500 Cr', profit: '₹420 Cr', margin: '12.0%' },
    issueDetails: { freshIssue: '45%', offerForSale: '55%', faceValue: '₹1 per share' },
    valuation: {
      marketCap: '31,250',
      eps: '13.50',
      pe: '59.3',
      evEbitda: '42.5',
      enterpriseValue: '29,800 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Offline merchant acquisition', amount: '650.00' },
      { purpose: 'Compliance tooling acquisitions', amount: '480.00' },
      { purpose: 'Technology infrastructure', amount: '520.00' },
      { purpose: 'Balance sheet strengthening', amount: '600.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '42.50%', postOffer: '34.00%' },
      { category: 'VC/PE Investors', preOffer: '48.50%', postOffer: '54.28%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '11.72%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,81,25,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,40,62,500',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '84,37,500' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '56,25,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '42,18,750',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '28,12,500' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '14,06,250' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '98,43,750' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nFeb 26, 2026', qibExAnchor: 4.3, nii: 3.9, niiAbove10L: 3.6, niiBelow10L: 4.3, retail: 5.8, total: 4.5 },
      { date: 'Day 2\nFeb 27, 2026', qibExAnchor: 8.6, nii: 7.8, niiAbove10L: 7.3, niiBelow10L: 8.4, retail: 9.7, total: 8.7 },
      { date: 'Day 3\nFeb 28, 2026', qibExAnchor: 14.1, nii: 13.0, niiAbove10L: 12.4, niiBelow10L: 13.7, retail: 15.9, total: 14.3 }
    ]
  },
  {
    id: '22',
    name: 'GreenPower Gen',
    symbol: 'GREENPOW',
    status: 'Closed',
    openDate: '2022-05-20',
    closeDate: '2022-05-23',
    listingDate: '2022-06-01',
    priceBand: { min: 90, max: 100 },
    lotSize: 150,
    issueSize: '1,800 Cr',
    gmp: 5,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 3.2, nii: 2.1, retail: 4.5, total: 3.5 },
    listingPrice: 102,
    currentPrice: 145,
    description: 'Renewable energy producer focusing on wind farms.',
    summary: 'GreenPower Gen develops and operates wind farms under long term PPAs, focusing on stable annuity style cash flows. The portfolio spans multiple states, reducing wind variability, and the company is piloting hybrid storage to improve capacity utilization. IPO proceeds repaid debt, funded repowering, and supported new site acquisition. Challenges include weather dependency, grid curtailment, and regulatory changes. Nonetheless, predictable tariffs, experienced O&M teams, and government incentives help sustain returns. Investors view the business as a steady yield play tied to India energy transition.',
    strengths: ['Green energy incentives', 'Long-term PPAs'],
    risks: ['Weather dependency', 'Grid connectivity issues'],
    financials: { revenue: '₹1,500 Cr', profit: '₹110 Cr', margin: '7.3%' },
    issueDetails: { freshIssue: '65%', offerForSale: '35%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '18,000',
      eps: '0.73',
      pe: '136.5',
      evEbitda: '85.2',
      enterpriseValue: '22,500 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Debt repayment', amount: '650.00' },
      { purpose: 'Wind farm repowering', amount: '480.00' },
      { purpose: 'New site acquisition', amount: '420.00' },
      { purpose: 'Working capital', amount: '250.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '65.80%', postOffer: '52.64%' },
      { category: 'Infrastructure Funds', preOffer: '25.20%', postOffer: '33.51%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '13.85%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '18,00,00,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '9,00,00,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '5,40,00,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '3,60,00,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '2,70,00,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '1,80,00,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '90,00,000' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '6,30,00,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nMar 3, 2026', qibExAnchor: 2.7, nii: 2.4, niiAbove10L: 2.1, niiBelow10L: 2.7, retail: 3.8, total: 2.9 },
      { date: 'Day 2\nMar 4, 2026', qibExAnchor: 5.4, nii: 4.8, niiAbove10L: 4.4, niiBelow10L: 5.2, retail: 6.7, total: 5.6 },
      { date: 'Day 3\nMar 5, 2026', qibExAnchor: 9.1, nii: 8.2, niiAbove10L: 7.6, niiBelow10L: 8.9, retail: 11.1, total: 9.3 }
    ]
  },
  {
    id: '23',
    name: 'HealthCare Plus',
    symbol: 'HEALTHPLS',
    status: 'Closed',
    openDate: '2022-04-15',
    closeDate: '2022-04-18',
    listingDate: '2022-04-27',
    priceBand: { min: 400, max: 420 },
    lotSize: 35,
    issueSize: '800 Cr',
    gmp: 60,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 25.6, nii: 38.4, retail: 15.2, total: 26.5 },
    listingPrice: 485,
    currentPrice: 510,
    description: 'Diagnostic chain and pathology labs network.',
    summary: 'HealthCare Plus operates an asset light network of diagnostic labs and collection centers, leveraging franchise partners and digital booking journeys to scale quickly. Rising preventive health awareness and insurance coverage support demand, while automation improves turnaround times. IPO proceeds expanded reference labs, technology platforms, and potential tuck in acquisitions in radiology. Risks include pricing pressure from hospitals, quality control, and competitive intensity. Even so, strong brand trust, home sample logistics, and focus on tier two expansion underpin expectations of steady EBITDA growth post listing.',
    strengths: ['Growing health awareness', 'Asset-light expansion'],
    risks: ['Pricing pressure', 'Quality control risks'],
    financials: { revenue: '₹900 Cr', profit: '₹160 Cr', margin: '17.8%' },
    issueDetails: { freshIssue: '75%', offerForSale: '25%', faceValue: '₹5 per share' },
    valuation: {
      marketCap: '4,700',
      eps: '16.00',
      pe: '26.3',
      evEbitda: '18.5',
      enterpriseValue: '4,450 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Reference lab expansion', amount: '280.00' },
      { purpose: 'Technology platform development', amount: '180.00' },
      { purpose: 'Radiology acquisitions', amount: '220.00' },
      { purpose: 'Working capital', amount: '120.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '62.50%', postOffer: '50.00%' },
      { category: 'PE Investors', preOffer: '28.50%', postOffer: '35.63%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '14.37%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '1,90,47,619' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '95,23,810',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '57,14,286' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '38,09,524' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '28,57,143',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '19,04,762' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '9,52,381' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '66,66,667' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nMar 8, 2026', qibExAnchor: 3.9, nii: 3.5, niiAbove10L: 3.2, niiBelow10L: 3.9, retail: 5.3, total: 4.1 },
      { date: 'Day 2\nMar 9, 2026', qibExAnchor: 7.8, nii: 7.0, niiAbove10L: 6.5, niiBelow10L: 7.6, retail: 9.1, total: 8.0 },
      { date: 'Day 3\nMar 10, 2026', qibExAnchor: 12.9, nii: 11.8, niiAbove10L: 11.2, niiBelow10L: 12.5, retail: 14.8, total: 13.1 }
    ]
  },
  {
    id: '24',
    name: 'EduTech Learning',
    symbol: 'EDUTECH',
    status: 'Closed',
    openDate: '2022-03-10',
    closeDate: '2022-03-13',
    listingDate: '2022-03-22',
    priceBand: { min: 150, max: 160 },
    lotSize: 90,
    issueSize: '300 Cr',
    gmp: -10,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 0.8, nii: 0.6, retail: 0.9, total: 0.85 },
    listingPrice: 145,
    currentPrice: 130,
    description: 'Online test preparation and skill development platform.',
    summary: 'EduTech Learning built an online test prep and skills marketplace that scaled quickly during pandemic years but now contends with normalization of offline coaching. The company combines live classes, recorded modules, and outcome tracking dashboards, supplemented by corporate upskilling programs. IPO proceeds were earmarked for content localization, marketing, and acquisitions, yet muted subscription underscored profitability concerns. Management is recalibrating toward blended centers, cohort based courses, and disciplined customer acquisition spend. Investors await evidence of sustainable cash flows and clearer differentiation before re-rating the lagging stock.',
    strengths: ['Scalable content', 'Large addressable market'],
    risks: ['Customer acquisition costs', 'Return to offline education'],
    financials: { revenue: '₹250 Cr', profit: '-₹40 Cr', margin: '-16.0%' },
    issueDetails: { freshIssue: '100%', offerForSale: '0%', faceValue: '₹1 per share' },
    valuation: {
      marketCap: '2,880',
      eps: '-2.67',
      pe: 'N/A',
      evEbitda: 'N/A',
      enterpriseValue: '2,650 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Content localization', amount: '90.00' },
      { purpose: 'Marketing and brand building', amount: '100.00' },
      { purpose: 'Technology upgrades', amount: '60.00' },
      { purpose: 'General corporate purposes', amount: '50.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '35.50%', postOffer: '28.40%' },
      { category: 'VC Investors', preOffer: '55.50%', postOffer: '61.20%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '10.40%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '1,87,50,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '93,75,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '56,25,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '37,50,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '28,12,500',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '18,75,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '9,37,500' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '65,62,500' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nMar 13, 2026', qibExAnchor: 4.5, nii: 4.0, niiAbove10L: 3.7, niiBelow10L: 4.4, retail: 6.0, total: 4.7 },
      { date: 'Day 2\nMar 14, 2026', qibExAnchor: 9.0, nii: 8.0, niiAbove10L: 7.4, niiBelow10L: 8.7, retail: 10.3, total: 9.2 },
      { date: 'Day 3\nMar 15, 2026', qibExAnchor: 14.8, nii: 13.5, niiAbove10L: 12.8, niiBelow10L: 14.3, retail: 16.9, total: 15.0 }
    ]
  },
  {
    id: '25',
    name: 'ChemSynth Organics',
    symbol: 'CHEMSYN',
    status: 'Closed',
    openDate: '2022-02-05',
    closeDate: '2022-02-08',
    listingDate: '2022-02-17',
    priceBand: { min: 600, max: 630 },
    lotSize: 22,
    issueSize: '650 Cr',
    gmp: 150,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 55.4, nii: 82.1, retail: 40.5, total: 58.6 },
    listingPrice: 790,
    currentPrice: 950,
    description: 'Specialty chemicals manufacturer for pharma and agro industries.',
    summary: 'ChemSynth Organics produces specialty intermediates for pharma and agro customers, benefiting from multi year supply agreements and stringent compliance records. Backward integration in key solvents plus process innovation drive superior margins and cash conversion. IPO proceeds funded debottlenecking, environmental upgrades, and expansion into high margin CDMO engagements. Risks include environmental regulations, raw material volatility, and client concentration, yet diversified export mix and strong R&D mitigate. Investors continue to watch execution of the CDMO pipeline and capital allocation toward global expansion.',
    strengths: ['Niche product portfolio', 'Export driven'],
    risks: ['Environmental compliance', 'Raw material volatility'],
    financials: { revenue: '₹800 Cr', profit: '₹140 Cr', margin: '17.5%' },
    issueDetails: { freshIssue: '70%', offerForSale: '30%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '3,150',
      eps: '28.00',
      pe: '22.5',
      evEbitda: '14.8',
      enterpriseValue: '3,020 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Capacity debottlenecking', amount: '220.00' },
      { purpose: 'Environmental upgrades', amount: '150.00' },
      { purpose: 'CDMO facility expansion', amount: '180.00' },
      { purpose: 'Working capital', amount: '100.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '72.50%', postOffer: '58.00%' },
      { category: 'Public', preOffer: '27.50%', postOffer: '42.00%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '1,03,17,460' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '51,58,730',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '30,95,238' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '20,63,492' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '15,47,619',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '10,31,746' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '5,15,873' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '36,11,111' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nMar 18, 2026', qibExAnchor: 3.1, nii: 2.7, niiAbove10L: 2.4, niiBelow10L: 3.1, retail: 4.4, total: 3.3 },
      { date: 'Day 2\nMar 19, 2026', qibExAnchor: 6.2, nii: 5.4, niiAbove10L: 5.0, niiBelow10L: 5.9, retail: 7.5, total: 6.4 },
      { date: 'Day 3\nMar 20, 2026', qibExAnchor: 10.3, nii: 9.1, niiAbove10L: 8.5, niiBelow10L: 9.8, retail: 12.2, total: 10.5 }
    ]
  },
  {
    id: '26',
    name: 'Skyline Logistics',
    symbol: 'SKYLOG',
    status: 'Closed',
    openDate: '2022-01-05',
    closeDate: '2022-01-07',
    listingDate: '2022-01-17',
    priceBand: { min: 180, max: 190 },
    lotSize: 80,
    issueSize: '420 Cr',
    gmp: 35,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 12.1, nii: 18.3, retail: 9.1, total: 13.5 },
    listingPrice: 215,
    currentPrice: 230,
    description: 'Pan-India logistics company focused on multimodal freight.',
    summary: 'Skyline Logistics manages multimodal freight across road, rail, and coastal routes, combining asset light partnerships with owned hubs to offer nationwide coverage. Technology enabled tracking and route optimization tools differentiate service levels for enterprise customers. IPO proceeds funded warehouse automation, fleet upgrades, and working capital to support rapid growth in e-commerce and industrial freight. Risks include fuel volatility, intense competition, and working capital needs, yet diversified industry exposure and long term contracts soften shocks. Investors watch operating leverage progression as the company scales ancillary services like customs brokerage and cold chain.',
    strengths: ['Nationwide network', 'Tech-enabled tracking'],
    risks: ['Fuel cost volatility', 'Working capital needs'],
    financials: { revenue: '₹1,050 Cr', profit: '₹95 Cr', margin: '9.0%' },
    issueDetails: { freshIssue: '55%', offerForSale: '45%', faceValue: '₹5 per share' },
    valuation: {
      marketCap: '2,210',
      eps: '7.60',
      pe: '25.0',
      evEbitda: '16.8',
      enterpriseValue: '2,450 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Warehouse automation', amount: '140.00' },
      { purpose: 'Fleet upgrades', amount: '110.00' },
      { purpose: 'Working capital', amount: '120.00' },
      { purpose: 'General corporate purposes', amount: '50.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '68.50%', postOffer: '54.80%' },
      { category: 'PE Investors', preOffer: '22.50%', postOffer: '31.50%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '13.70%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,21,05,263' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,10,52,632',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '66,31,579' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '44,21,053' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '33,15,789',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '22,10,526' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '11,05,263' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '77,36,842' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nMar 23, 2026', qibExAnchor: 4.2, nii: 3.8, niiAbove10L: 3.5, niiBelow10L: 4.2, retail: 5.7, total: 4.4 },
      { date: 'Day 2\nMar 24, 2026', qibExAnchor: 8.4, nii: 7.6, niiAbove10L: 7.1, niiBelow10L: 8.2, retail: 9.6, total: 8.5 },
      { date: 'Day 3\nMar 25, 2026', qibExAnchor: 13.9, nii: 12.7, niiAbove10L: 12.1, niiBelow10L: 13.4, retail: 15.8, total: 14.1 }
    ]
  },
  {
    id: '27',
    name: 'Polaris Renewables',
    symbol: 'POLREN',
    status: 'Closed',
    openDate: '2021-12-12',
    closeDate: '2021-12-15',
    listingDate: '2021-12-24',
    priceBand: { min: 260, max: 275 },
    lotSize: 55,
    issueSize: '1,100 Cr',
    gmp: 65,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 28.6, nii: 34.2, retail: 14.5, total: 26.7 },
    listingPrice: 330,
    currentPrice: 360,
    description: 'Renewable energy platform with hybrid solar-wind parks.',
    summary: 'Polaris Renewables owns hybrid solar wind parks with long term PPAs, providing predictable cash flows while optimizing dispatch between assets. The company focuses on grid stability, predictive maintenance, and disciplined capital allocation to sustain double digit returns. IPO funds supported new projects, refinancing, and storage pilots. Risks include weather variability, grid curtailment, and evolving regulations, but geographical diversification and a strong O&M toolkit mitigate. Investors expect continued deleveraging and potential yield vehicles as the portfolio matures. GMP performance reflects appetite for renewable platforms delivering inflation linked escalation.',
    strengths: ['Long-term PPAs', 'Diverse asset mix'],
    risks: ['Grid curtailment', 'Weather dependency'],
    financials: { revenue: '₹1,900 Cr', profit: '₹210 Cr', margin: '11.1%' },
    issueDetails: { freshIssue: '60%', offerForSale: '40%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '4,000',
      eps: '10.50',
      pe: '26.2',
      evEbitda: '15.8',
      enterpriseValue: '4,850 Cr'
    },
    objectsOfIssue: [
      { purpose: 'New hybrid projects', amount: '380.00' },
      { purpose: 'Debt refinancing', amount: '320.00' },
      { purpose: 'Storage pilots', amount: '250.00' },
      { purpose: 'Working capital', amount: '150.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '58.80%', postOffer: '47.04%' },
      { category: 'Infrastructure Funds', preOffer: '32.20%', postOffer: '39.28%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '13.68%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '4,00,00,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '2,00,00,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '1,20,00,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '80,00,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '60,00,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '40,00,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '20,00,000' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,40,00,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nMar 28, 2026', qibExAnchor: 2.8, nii: 2.5, niiAbove10L: 2.2, niiBelow10L: 2.8, retail: 3.9, total: 3.0 },
      { date: 'Day 2\nMar 29, 2026', qibExAnchor: 5.6, nii: 5.0, niiAbove10L: 4.6, niiBelow10L: 5.4, retail: 6.8, total: 5.8 },
      { date: 'Day 3\nMar 30, 2026', qibExAnchor: 9.4, nii: 8.5, niiAbove10L: 7.9, niiBelow10L: 9.2, retail: 11.3, total: 9.6 }
    ]
  },
  {
    id: '28',
    name: 'Vertex Analytics',
    symbol: 'VERTEXA',
    status: 'Closed',
    openDate: '2021-11-20',
    closeDate: '2021-11-23',
    listingDate: '2021-12-02',
    priceBand: { min: 540, max: 560 },
    lotSize: 24,
    issueSize: '850 Cr',
    gmp: 110,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 45.2, nii: 70.5, retail: 31.4, total: 48.3 },
    listingPrice: 720,
    currentPrice: 690,
    description: 'Advanced analytics SaaS for BFSI risk modeling.',
    summary: 'Vertex Analytics provides cloud native risk modeling and decisioning SaaS for BFSI clients, embedding its models directly within lending, underwriting, and fraud workflows. High gross margins stem from multi year subscriptions and premium support. IPO proceeds scaled go to market teams, expanded US presence, and fueled R&D for regulatory explainability modules. Risks involve dollar exposure, competition from global software majors, and talent retention, yet sticky enterprise relationships and mission critical integrations drive low churn. Investors continue to track ARR growth and margin sustainability following the strong but volatile listing trajectory.',
    strengths: ['Sticky enterprise clients', 'High gross margins'],
    risks: ['US dollar exposure', 'Talent retention'],
    financials: { revenue: '₹980 Cr', profit: '₹220 Cr', margin: '22.5%' },
    issueDetails: { freshIssue: '85%', offerForSale: '15%', faceValue: '₹5 per share' },
    valuation: {
      marketCap: '5,600',
      eps: '22.00',
      pe: '25.5',
      evEbitda: '16.2',
      enterpriseValue: '5,280 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Go-to-market expansion', amount: '280.00' },
      { purpose: 'US market presence', amount: '220.00' },
      { purpose: 'R&D for regulatory modules', amount: '200.00' },
      { purpose: 'Working capital', amount: '150.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '55.50%', postOffer: '44.40%' },
      { category: 'VC/PE Investors', preOffer: '35.50%', postOffer: '42.35%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '13.25%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '1,51,42,857' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '75,71,429',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '45,42,857' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '30,28,572' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '22,71,429',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '15,14,286' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '7,57,143' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '53,00,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nApr 2, 2026', qibExAnchor: 3.7, nii: 3.3, niiAbove10L: 3.0, niiBelow10L: 3.7, retail: 5.1, total: 3.9 },
      { date: 'Day 2\nApr 3, 2026', qibExAnchor: 7.4, nii: 6.6, niiAbove10L: 6.1, niiBelow10L: 7.2, retail: 8.7, total: 7.6 },
      { date: 'Day 3\nApr 4, 2026', qibExAnchor: 12.2, nii: 11.1, niiAbove10L: 10.5, niiBelow10L: 11.8, retail: 14.3, total: 12.4 }
    ]
  },
  {
    id: '29',
    name: 'Harbor Marine Services',
    symbol: 'HARBOR',
    status: 'Closed',
    openDate: '2021-10-10',
    closeDate: '2021-10-13',
    listingDate: '2021-10-21',
    priceBand: { min: 310, max: 325 },
    lotSize: 60,
    issueSize: '600 Cr',
    gmp: 20,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 6.5, nii: 8.4, retail: 4.1, total: 6.9 },
    listingPrice: 345,
    currentPrice: 320,
    description: 'Port maintenance and marine engineering specialist.',
    summary: 'Harbor Marine Services provides port maintenance, dredging, and marine engineering, supporting government and private terminals with specialized crews and equipment. Multi year contracts offer revenue predictability, though activity still correlates with global trade trends. IPO proceeds funded new vessels, remote monitoring tech, and debt reduction. Risks include currency swings, project delays, and exposure to commodity cycles, but diversification across ports and defense work helps smooth utilization. Investors watch margin discipline and fleet modernization progress to assess long term competitiveness.',
    strengths: ['Long-term contracts', 'Specialized crew'],
    risks: ['Global trade downturn', 'Currency swings'],
    financials: { revenue: '₹1,250 Cr', profit: '₹105 Cr', margin: '8.4%' },
    issueDetails: { freshIssue: '50%', offerForSale: '50%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '1,950',
      eps: '8.40',
      pe: '38.7',
      evEbitda: '22.5',
      enterpriseValue: '2,280 Cr'
    },
    objectsOfIssue: [
      { purpose: 'New vessel acquisition', amount: '180.00' },
      { purpose: 'Remote monitoring tech', amount: '120.00' },
      { purpose: 'Debt reduction', amount: '200.00' },
      { purpose: 'Working capital', amount: '100.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '78.50%', postOffer: '62.80%' },
      { category: 'Public', preOffer: '21.50%', postOffer: '37.20%' }
    ]
  },
  {
    id: '30',
    name: 'TerraBuild Infra',
    symbol: 'TERRAINF',
    status: 'Closed',
    openDate: '2021-09-18',
    closeDate: '2021-09-21',
    listingDate: '2021-09-30',
    priceBand: { min: 140, max: 150 },
    lotSize: 95,
    issueSize: '500 Cr',
    gmp: 18,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 4.2, nii: 5.1, retail: 3.6, total: 4.5 },
    listingPrice: 158,
    currentPrice: 172,
    description: 'EPC contractor with focus on industrial parks.',
    summary: 'TerraBuild Infra focuses on industrial park EPC and urban infrastructure, combining design capabilities with on site execution teams to deliver turnkey projects. The company emphasizes cash flow discipline, modular construction, and supplier partnerships to navigate commodity inflation. IPO proceeds bolstered working capital, equipment leasing, and digital project controls. Risks include client concentration, permitting timelines, and price competition, but experience in multi phase developments aids repeat business. Investors evaluate order inflow momentum and the shift toward higher margin design build contracts after listing.',
    strengths: ['Order book visibility', 'Experienced execution'],
    risks: ['Commodity prices', 'Client concentration'],
    financials: { revenue: '₹1,400 Cr', profit: '₹115 Cr', margin: '8.2%' },
    issueDetails: { freshIssue: '65%', offerForSale: '35%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '1,425',
      eps: '7.67',
      pe: '19.6',
      evEbitda: '12.5',
      enterpriseValue: '1,680 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Working capital expansion', amount: '180.00' },
      { purpose: 'Equipment leasing', amount: '120.00' },
      { purpose: 'Digital project controls', amount: '100.00' },
      { purpose: 'General corporate purposes', amount: '100.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '72.80%', postOffer: '58.24%' },
      { category: 'Public', preOffer: '27.20%', postOffer: '41.76%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '3,33,33,333' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,66,66,667',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '1,00,00,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '66,66,667' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '50,00,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '33,33,333' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '16,66,667' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,16,66,667' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nApr 7, 2026', qibExAnchor: 4.0, nii: 3.6, niiAbove10L: 3.3, niiBelow10L: 4.0, retail: 5.5, total: 4.2 },
      { date: 'Day 2\nApr 8, 2026', qibExAnchor: 8.0, nii: 7.2, niiAbove10L: 6.7, niiBelow10L: 7.8, retail: 9.3, total: 8.1 },
      { date: 'Day 3\nApr 9, 2026', qibExAnchor: 13.2, nii: 12.1, niiAbove10L: 11.5, niiBelow10L: 12.8, retail: 15.1, total: 13.5 }
    ]
  },
  {
    id: '31',
    name: 'Nimbus Software',
    symbol: 'NIMSOFT',
    status: 'Closed',
    openDate: '2021-08-22',
    closeDate: '2021-08-25',
    listingDate: '2021-09-03',
    priceBand: { min: 600, max: 640 },
    lotSize: 20,
    issueSize: '1,200 Cr',
    gmp: 140,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 70.2, nii: 90.1, retail: 38.6, total: 66.0 },
    listingPrice: 860,
    currentPrice: 905,
    description: 'Cloud-native ERP provider for manufacturing SMEs.',
    summary: 'Nimbus Software delivers cloud native ERP tailored to manufacturing SMEs, bundling supply chain, finance, and shop floor modules within a subscription model. Global channel partners and ISV marketplace integrations accelerate adoption, while recurring SaaS revenue drives high gross margins. IPO proceeds expanded R&D, funded acquisitions in vertical specific solutions, and strengthened global support centers. Risks include pricing pressure, cybersecurity threats, and reliance on dollar denominated contracts, yet low churn, strong NPS, and deep industry templates reinforce leadership. Investors monitor ARR growth and disciplined capital allocation as the stock trades near post listing highs.',
    strengths: ['Recurring SaaS revenue', 'Global partners'],
    risks: ['Pricing pressure', 'Cyber threats'],
    financials: { revenue: '₹1,350 Cr', profit: '₹260 Cr', margin: '19.3%' },
    issueDetails: { freshIssue: '80%', offerForSale: '20%', faceValue: '₹2 per share' },
    valuation: {
      marketCap: '7,680',
      eps: '13.00',
      pe: '49.2',
      evEbitda: '32.5',
      enterpriseValue: '7,250 Cr'
    },
    objectsOfIssue: [
      { purpose: 'R&D expansion', amount: '380.00' },
      { purpose: 'Vertical acquisitions', amount: '320.00' },
      { purpose: 'Global support centers', amount: '280.00' },
      { purpose: 'Working capital', amount: '220.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '52.50%', postOffer: '42.00%' },
      { category: 'VC/PE Investors', preOffer: '38.50%', postOffer: '45.20%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '12.80%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '1,87,69,231' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '93,84,615',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '56,30,769' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '37,53,846' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '28,15,385',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '18,76,923' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '9,38,462' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '65,69,231' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nApr 12, 2026', qibExAnchor: 3.4, nii: 3.0, niiAbove10L: 2.7, niiBelow10L: 3.4, retail: 4.6, total: 3.6 },
      { date: 'Day 2\nApr 13, 2026', qibExAnchor: 6.8, nii: 6.0, niiAbove10L: 5.5, niiBelow10L: 6.6, retail: 7.9, total: 7.0 },
      { date: 'Day 3\nApr 14, 2026', qibExAnchor: 11.3, nii: 10.1, niiAbove10L: 9.5, niiBelow10L: 10.8, retail: 13.1, total: 11.5 }
    ]
  },
  {
    id: '32',
    name: 'Summit Foods',
    symbol: 'SUMFOOD',
    status: 'Closed',
    openDate: '2021-07-12',
    closeDate: '2021-07-15',
    listingDate: '2021-07-23',
    priceBand: { min: 220, max: 235 },
    lotSize: 70,
    issueSize: '650 Cr',
    gmp: 12,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 3.8, nii: 4.2, retail: 2.9, total: 3.6 },
    listingPrice: 248,
    currentPrice: 238,
    description: 'Packaged foods company with frozen ready-to-eat line.',
    summary: 'Summit Foods manufactures frozen and ready to eat meals, exporting to diaspora markets while expanding domestic retail presence. Product innovation in plant based proteins and premium snacks differentiates the portfolio. IPO proceeds enhanced cold storage, marketing, and automation to improve margins. Risks include commodity inflation, brand competition, and currency swings, but diversified channels and private label partnerships help. Investors evaluate demand resilience and international expansion progress after a modest listing premium. Management is piloting direct to consumer delivery and chef collaborations to unlock incremental growth.',
    strengths: ['Export channels', 'Product innovation'],
    risks: ['Commodity inflation', 'Brand competition'],
    financials: { revenue: '₹1,150 Cr', profit: '₹88 Cr', margin: '7.6%' },
    issueDetails: { freshIssue: '55%', offerForSale: '45%', faceValue: '₹5 per share' },
    valuation: {
      marketCap: '2,760',
      eps: '5.28',
      pe: '44.5',
      evEbitda: '28.2',
      enterpriseValue: '2,950 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Cold storage enhancement', amount: '200.00' },
      { purpose: 'Marketing campaigns', amount: '150.00' },
      { purpose: 'Automation upgrades', amount: '180.00' },
      { purpose: 'Working capital', amount: '120.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '68.50%', postOffer: '54.80%' },
      { category: 'PE Investors', preOffer: '22.50%', postOffer: '31.50%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '13.70%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,76,59,574' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,38,29,787',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '82,97,872' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '55,31,915' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '41,48,936',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '27,65,957' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '13,82,979' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '96,80,851' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nApr 17, 2026', qibExAnchor: 4.1, nii: 3.7, niiAbove10L: 3.4, niiBelow10L: 4.1, retail: 5.6, total: 4.3 },
      { date: 'Day 2\nApr 18, 2026', qibExAnchor: 8.2, nii: 7.4, niiAbove10L: 6.9, niiBelow10L: 7.9, retail: 9.5, total: 8.3 },
      { date: 'Day 3\nApr 19, 2026', qibExAnchor: 13.5, nii: 12.3, niiAbove10L: 11.7, niiBelow10L: 13.0, retail: 15.4, total: 13.7 }
    ]
  },
  {
    id: '33',
    name: 'Radiant MedTech',
    symbol: 'RADMED',
    status: 'Closed',
    openDate: '2021-06-05',
    closeDate: '2021-06-08',
    listingDate: '2021-06-17',
    priceBand: { min: 420, max: 440 },
    lotSize: 32,
    issueSize: '720 Cr',
    gmp: 95,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 38.5, nii: 60.4, retail: 20.5, total: 40.2 },
    listingPrice: 585,
    currentPrice: 610,
    description: 'Medical technology OEM manufacturing imaging devices.',
    summary: 'Radiant MedTech designs and manufactures imaging devices and critical care equipment for hospitals worldwide, backed by USFDA approvals and high entry barriers. The company invests heavily in R&D and precision manufacturing, enabling premium pricing and export opportunities. IPO proceeds funded new product development, automation, and working capital to meet global demand. Risks include supply chain disruptions, foreign exchange volatility, and long certification cycles, yet diversified markets and service contracts provide resilience. Investors watch execution on the innovation roadmap and potential partnerships with global medtech majors.',
    strengths: ['USFDA approvals', 'High entry barriers'],
    risks: ['Supply chain disruptions', 'Fx exposure'],
    financials: { revenue: '₹900 Cr', profit: '₹170 Cr', margin: '18.9%' },
    issueDetails: { freshIssue: '70%', offerForSale: '30%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '4,400',
      eps: '17.00',
      pe: '25.9',
      evEbitda: '16.8',
      enterpriseValue: '4,150 Cr'
    },
    objectsOfIssue: [
      { purpose: 'New product development', amount: '280.00' },
      { purpose: 'Manufacturing automation', amount: '180.00' },
      { purpose: 'Working capital', amount: '160.00' },
      { purpose: 'General corporate purposes', amount: '100.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '72.50%', postOffer: '58.00%' },
      { category: 'Public', preOffer: '27.50%', postOffer: '42.00%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '1,63,63,636' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '81,81,818',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '49,09,091' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '32,72,727' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '24,54,545',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '16,36,364' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '8,18,182' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '57,27,273' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nApr 22, 2026', qibExAnchor: 3.8, nii: 3.4, niiAbove10L: 3.1, niiBelow10L: 3.8, retail: 5.2, total: 4.0 },
      { date: 'Day 2\nApr 23, 2026', qibExAnchor: 7.6, nii: 6.8, niiAbove10L: 6.3, niiBelow10L: 7.4, retail: 8.9, total: 7.7 },
      { date: 'Day 3\nApr 24, 2026', qibExAnchor: 12.5, nii: 11.5, niiAbove10L: 10.9, niiBelow10L: 12.2, retail: 14.6, total: 12.7 }
    ]
  },
  {
    id: '34',
    name: 'Falcon Retail',
    symbol: 'FALRET',
    status: 'Closed',
    openDate: '2021-05-10',
    closeDate: '2021-05-13',
    listingDate: '2021-05-21',
    priceBand: { min: 90, max: 95 },
    lotSize: 150,
    issueSize: '750 Cr',
    gmp: -8,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 0.7, nii: 0.5, retail: 0.6, total: 0.65 },
    listingPrice: 88,
    currentPrice: 92,
    description: 'Value retail format with focus on apparel basics.',
    summary: 'Falcon Retail operates value apparel stores targeting budget conscious shoppers in smaller cities, balancing rapid assortment refresh with disciplined inventory control. Thin margins and sluggish demand weighed on the IPO, yet management continues to optimize sourcing and private labels. Proceeds were used to open new stores, invest in technology, and reduce debt. Risks encompass consumer slowdown, working capital strain, and e-commerce competition. Investors await proof that operational tweaks, supply chain digitization, and loyalty initiatives can restore growth and lift profitability above pre listing levels.',
    strengths: ['Lean supply chain', 'Tier-3 expansion'],
    risks: ['Working capital strain', 'Consumer slowdown'],
    financials: { revenue: '₹1,600 Cr', profit: '₹60 Cr', margin: '3.8%' },
    issueDetails: { freshIssue: '40%', offerForSale: '60%', faceValue: '₹2 per share' },
    valuation: {
      marketCap: '7,125',
      eps: '0.80',
      pe: '118.8',
      evEbitda: '72.5',
      enterpriseValue: '7,800 Cr'
    },
    objectsOfIssue: [
      { purpose: 'New store openings', amount: '280.00' },
      { purpose: 'Technology investments', amount: '180.00' },
      { purpose: 'Debt reduction', amount: '200.00' },
      { purpose: 'Working capital', amount: '90.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '72.50%', postOffer: '43.50%' },
      { category: 'Public', preOffer: '27.50%', postOffer: '56.50%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '7,89,47,368' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '3,94,73,684',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '2,36,84,211' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '1,57,89,474' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '1,18,42,105',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '78,94,737' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '39,47,368' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '2,76,31,579' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nApr 27, 2026', qibExAnchor: 4.3, nii: 3.9, niiAbove10L: 3.6, niiBelow10L: 4.3, retail: 5.8, total: 4.5 },
      { date: 'Day 2\nApr 28, 2026', qibExAnchor: 8.6, nii: 7.8, niiAbove10L: 7.3, niiBelow10L: 8.4, retail: 9.7, total: 8.7 },
      { date: 'Day 3\nApr 29, 2026', qibExAnchor: 14.1, nii: 13.0, niiAbove10L: 12.4, niiBelow10L: 13.7, retail: 15.9, total: 14.3 }
    ]
  },
  {
    id: '35',
    name: 'Horizon Textiles',
    symbol: 'HORZTEX',
    status: 'Closed',
    openDate: '2021-04-12',
    closeDate: '2021-04-15',
    listingDate: '2021-04-23',
    priceBand: { min: 150, max: 160 },
    lotSize: 95,
    issueSize: '480 Cr',
    gmp: 28,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 5.5, nii: 7.8, retail: 3.5, total: 5.9 },
    listingPrice: 185,
    currentPrice: 178,
    description: 'Integrated textile mill exporting home furnishings.',
    summary: 'Horizon Textiles runs integrated spinning, weaving, and finishing operations supplying home furnishings to global retailers. Export incentives and design capabilities support steady orders, while investments in sustainable processes cater to ESG conscious clients. IPO proceeds funded capacity upgrades, working capital, and energy efficiency projects. Risks include cotton price volatility, forex swings, and demand softness in key markets, but diversification and hedging strategies offer buffers. Investors monitor margin stability and progress on premium collections introduced post listing. Management is also exploring technical textile adjacencies to unlock higher value contracts.',
    strengths: ['Integrated operations', 'Export incentives'],
    risks: ['Cotton price swings', 'FX fluctuation'],
    financials: { revenue: '₹900 Cr', profit: '₹70 Cr', margin: '7.8%' },
    issueDetails: { freshIssue: '60%', offerForSale: '40%', faceValue: '₹5 per share' },
    valuation: {
      marketCap: '1,520',
      eps: '7.00',
      pe: '22.9',
      evEbitda: '14.8',
      enterpriseValue: '1,750 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Capacity upgrades', amount: '150.00' },
      { purpose: 'Working capital', amount: '140.00' },
      { purpose: 'Energy efficiency projects', amount: '110.00' },
      { purpose: 'General corporate purposes', amount: '80.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '78.50%', postOffer: '62.80%' },
      { category: 'Public', preOffer: '21.50%', postOffer: '37.20%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '3,00,00,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,50,00,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '90,00,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '60,00,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '45,00,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '30,00,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '15,00,000' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,05,00,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nMay 2, 2026', qibExAnchor: 3.1, nii: 2.7, niiAbove10L: 2.4, niiBelow10L: 3.1, retail: 4.3, total: 3.3 },
      { date: 'Day 2\nMay 3, 2026', qibExAnchor: 6.2, nii: 5.4, niiAbove10L: 5.0, niiBelow10L: 5.9, retail: 7.5, total: 6.4 },
      { date: 'Day 3\nMay 4, 2026', qibExAnchor: 10.3, nii: 9.1, niiAbove10L: 8.5, niiBelow10L: 9.8, retail: 12.2, total: 10.5 }
    ]
  },
  {
    id: '36',
    name: 'Vector Mobility',
    symbol: 'VECTORM',
    status: 'Closed',
    openDate: '2021-03-08',
    closeDate: '2021-03-11',
    listingDate: '2021-03-19',
    priceBand: { min: 260, max: 270 },
    lotSize: 65,
    issueSize: '900 Cr',
    gmp: 55,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 18.5, nii: 24.1, retail: 12.4, total: 17.9 },
    listingPrice: 340,
    currentPrice: 322,
    description: 'Electric-mobility component maker for OEMs.',
    summary: 'Vector Mobility supplies components for electric mobility platforms, including battery enclosures, drivetrain assemblies, and power electronics. Partnerships with leading OEMs and participation in government incentive schemes position the company to ride EV adoption. IPO proceeds funded capacity expansion, automation, and R&D for next generation platforms. Risks include technology obsolescence, capital intensity, and dependence on regulatory subsidies, yet diversified customer programs and export opportunities offer upside. Investors focus on execution speed and ability to maintain margins as volumes scale. Long term contracts and localized supply chains aim to mitigate raw material swings.',
    strengths: ['EV tailwinds', 'OEM partnerships'],
    risks: ['Technology obsolescence', 'Capex heavy'],
    financials: { revenue: '₹1,200 Cr', profit: '₹150 Cr', margin: '12.5%' },
    issueDetails: { freshIssue: '75%', offerForSale: '25%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '3,330',
      eps: '15.00',
      pe: '18.0',
      evEbitda: '12.5',
      enterpriseValue: '3,580 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Capacity expansion', amount: '320.00' },
      { purpose: 'Automation investments', amount: '220.00' },
      { purpose: 'R&D for next-gen platforms', amount: '200.00' },
      { purpose: 'Working capital', amount: '160.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '62.50%', postOffer: '50.00%' },
      { category: 'PE Investors', preOffer: '28.50%', postOffer: '35.63%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '14.37%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '3,33,33,333' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,66,66,667',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '1,00,00,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '66,66,667' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '50,00,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '33,33,333' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '16,66,667' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,16,66,667' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nMay 7, 2026', qibExAnchor: 4.0, nii: 3.6, niiAbove10L: 3.3, niiBelow10L: 4.0, retail: 5.5, total: 4.2 },
      { date: 'Day 2\nMay 8, 2026', qibExAnchor: 8.0, nii: 7.2, niiAbove10L: 6.7, niiBelow10L: 7.8, retail: 9.3, total: 8.1 },
      { date: 'Day 3\nMay 9, 2026', qibExAnchor: 13.2, nii: 12.1, niiAbove10L: 11.5, niiBelow10L: 12.8, retail: 15.1, total: 13.5 }
    ]
  },
  {
    id: '37',
    name: 'Aurora Education',
    symbol: 'AURORAED',
    status: 'Closed',
    openDate: '2021-02-10',
    closeDate: '2021-02-13',
    listingDate: '2021-02-22',
    priceBand: { min: 310, max: 320 },
    lotSize: 70,
    issueSize: '400 Cr',
    gmp: 15,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 2.2, nii: 3.1, retail: 1.8, total: 2.4 },
    listingPrice: 335,
    currentPrice: 318,
    description: 'Hybrid learning platform with test-prep focus.',
    summary: 'Aurora Education blends digital content with physical coaching centers for test preparation, leveraging proprietary curriculum and mentor networks. Revenue growth remains moderate as the sector normalizes, but hybrid cohorts and subscription plans support retention. IPO proceeds expanded regional centers, technology platforms, and marketing partnerships. Risks include high customer acquisition costs, offline competition, and regulatory scrutiny of education marketing. Management is sharpening student outcome analytics and enterprise collaborations to differentiate offerings, while investors wait for margin recovery. Scholarship programs and outcome guarantees aim to rebuild demand confidence.',
    strengths: ['Content IP', 'PAN-India centers'],
    risks: ['High CAC', 'Offline competition'],
    financials: { revenue: '₹520 Cr', profit: '₹48 Cr', margin: '9.2%' },
    issueDetails: { freshIssue: '85%', offerForSale: '15%', faceValue: '₹5 per share' },
    valuation: {
      marketCap: '1,280',
      eps: '4.80',
      pe: '66.7',
      evEbitda: '42.5',
      enterpriseValue: '1,180 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Regional center expansion', amount: '140.00' },
      { purpose: 'Technology platform development', amount: '100.00' },
      { purpose: 'Marketing partnerships', amount: '80.00' },
      { purpose: 'Working capital', amount: '80.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '55.50%', postOffer: '44.40%' },
      { category: 'VC Investors', preOffer: '35.50%', postOffer: '43.25%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '12.35%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '1,25,00,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '62,50,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '37,50,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '25,00,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '18,75,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '12,50,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '6,25,000' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '43,75,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nMay 12, 2026', qibExAnchor: 3.7, nii: 3.3, niiAbove10L: 3.0, niiBelow10L: 3.7, retail: 5.1, total: 3.9 },
      { date: 'Day 2\nMay 13, 2026', qibExAnchor: 7.4, nii: 6.6, niiAbove10L: 6.1, niiBelow10L: 7.2, retail: 8.7, total: 7.6 },
      { date: 'Day 3\nMay 14, 2026', qibExAnchor: 12.2, nii: 11.1, niiAbove10L: 10.5, niiBelow10L: 11.8, retail: 14.3, total: 12.4 }
    ]
  },
  {
    id: '38',
    name: 'Prime Warehousing',
    symbol: 'PRIMEWH',
    status: 'Closed',
    openDate: '2021-01-05',
    closeDate: '2021-01-08',
    listingDate: '2021-01-18',
    priceBand: { min: 130, max: 140 },
    lotSize: 110,
    issueSize: '550 Cr',
    gmp: 22,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 6.8, nii: 9.5, retail: 4.2, total: 7.1 },
    listingPrice: 165,
    currentPrice: 180,
    description: 'Industrial warehousing and park operator.',
    summary: 'Prime Warehousing develops and manages industrial parks for e-commerce, automotive, and FMCG tenants, offering built to suit facilities with long leases. Sticky tenants and inflation linked rentals create predictable income, while the company explores REIT readiness. IPO proceeds funded land acquisition, park expansion, and debt reduction. Risks include leasing cycles, interest rate movements, and client consolidation, yet diversified tenant mix and focus on Grade A assets mitigate. Investors watch occupancy levels and progress on sustainability certifications to gauge future valuation uplift.',
    strengths: ['Tenant stickiness', 'REIT-ready assets'],
    risks: ['Leasing cycles', 'Interest rate risk'],
    financials: { revenue: '₹780 Cr', profit: '₹90 Cr', margin: '11.5%' },
    issueDetails: { freshIssue: '50%', offerForSale: '50%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '1,540',
      eps: '9.00',
      pe: '15.6',
      evEbitda: '10.8',
      enterpriseValue: '1,780 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Land acquisition', amount: '180.00' },
      { purpose: 'Park expansion', amount: '150.00' },
      { purpose: 'Debt reduction', amount: '140.00' },
      { purpose: 'Working capital', amount: '80.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '72.50%', postOffer: '58.00%' },
      { category: 'Public', preOffer: '27.50%', postOffer: '42.00%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '3,92,85,714' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,96,42,857',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '1,17,85,714' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '78,57,143' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '58,92,857',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '39,28,571' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '19,64,286' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,37,50,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nMay 17, 2026', qibExAnchor: 4.2, nii: 3.8, niiAbove10L: 3.5, niiBelow10L: 4.2, retail: 5.7, total: 4.4 },
      { date: 'Day 2\nMay 18, 2026', qibExAnchor: 8.4, nii: 7.6, niiAbove10L: 7.1, niiBelow10L: 8.2, retail: 9.6, total: 8.5 },
      { date: 'Day 3\nMay 19, 2026', qibExAnchor: 13.9, nii: 12.7, niiAbove10L: 12.1, niiBelow10L: 13.4, retail: 15.8, total: 14.1 }
    ]
  },
  {
    id: '39',
    name: 'Stellar Entertainment',
    symbol: 'STELLAR',
    status: 'Closed',
    openDate: '2020-12-07',
    closeDate: '2020-12-10',
    listingDate: '2020-12-18',
    priceBand: { min: 200, max: 210 },
    lotSize: 80,
    issueSize: '650 Cr',
    gmp: 45,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 10.5, nii: 15.6, retail: 8.9, total: 11.2 },
    listingPrice: 275,
    currentPrice: 260,
    description: 'Live events and OTT content studio.',
    summary: 'Stellar Entertainment produces live events, films, and OTT series, monetizing IP across theatrical, streaming, and licensing channels. The company benefits from a deep content library and relationships with artists plus platforms. IPO proceeds funded content slate expansion, studio upgrades, and working capital. Risks include cyclical advertising spends, production delays, and competition, but diversified revenue streams and digital distribution mitigate volatility. Investors monitor project execution cadence and monetization of new franchises to sustain growth. International licensing and live IP tours provide additional buffers during domestic slowdowns.',
    strengths: ['IP library', 'Multiple distribution channels'],
    risks: ['Cyclic ad spends', 'Production delays'],
    financials: { revenue: '₹1,050 Cr', profit: '₹130 Cr', margin: '12.4%' },
    issueDetails: { freshIssue: '65%', offerForSale: '35%', faceValue: '₹5 per share' },
    valuation: {
      marketCap: '3,095',
      eps: '8.67',
      pe: '24.2',
      evEbitda: '16.5',
      enterpriseValue: '2,880 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Content slate expansion', amount: '220.00' },
      { purpose: 'Studio upgrades', amount: '150.00' },
      { purpose: 'Working capital', amount: '180.00' },
      { purpose: 'General corporate purposes', amount: '100.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '58.50%', postOffer: '46.80%' },
      { category: 'PE Investors', preOffer: '32.50%', postOffer: '40.55%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '12.65%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '3,09,52,381' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,54,76,190',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '92,85,714' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '61,90,476' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '46,42,857',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '30,95,238' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '15,47,619' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,08,33,333' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nDec 7, 2020', qibExAnchor: 2.1, nii: 3.2, niiAbove10L: 2.8, niiBelow10L: 3.6, retail: 4.5, total: 3.1 },
      { date: 'Day 2\nDec 8, 2020', qibExAnchor: 4.2, nii: 6.4, niiAbove10L: 5.6, niiBelow10L: 7.2, retail: 7.1, total: 5.8 },
      { date: 'Day 3\nDec 9, 2020', qibExAnchor: 7.1, nii: 10.8, niiAbove10L: 9.5, niiBelow10L: 12.1, retail: 11.9, total: 9.7 }
    ]
  },
  {
    id: '40',
    name: 'Crest Pharma',
    symbol: 'CRESTPH',
    status: 'Closed',
    openDate: '2020-11-05',
    closeDate: '2020-11-09',
    listingDate: '2020-11-18',
    priceBand: { min: 480, max: 500 },
    lotSize: 30,
    issueSize: '1,300 Cr',
    gmp: 160,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 62.5, nii: 80.1, retail: 45.5, total: 64.2 },
    listingPrice: 750,
    currentPrice: 810,
    description: 'Specialty pharma company focused on oncology generics.',
    summary: 'Crest Pharma focuses on oncology generics, leveraging US filings, backward integration, and strong compliance history to win share in regulated markets. High margins stem from complex injectables and contract manufacturing. IPO proceeds expanded sterile plants, funded R&D, and reduced debt. Risks include regulatory inspections, price erosion, and currency movements, yet diversified geography and pipeline depth offer resilience. Investors assess how quickly new launches and partnerships translate into sustained earnings growth. Strong GMP premiums underscore confidence in management governance and capital allocation.',
    strengths: ['US filings pipeline', 'High margins'],
    risks: ['Regulatory inspections', 'Pricing pressure'],
    financials: { revenue: '₹2,400 Cr', profit: '₹420 Cr', margin: '17.5%' },
    issueDetails: { freshIssue: '55%', offerForSale: '45%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '13,000',
      eps: '42.00',
      pe: '17.9',
      evEbitda: '12.2',
      enterpriseValue: '12,200 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Sterile plant expansion', amount: '480.00' },
      { purpose: 'R&D investments', amount: '320.00' },
      { purpose: 'Debt reduction', amount: '350.00' },
      { purpose: 'Working capital', amount: '150.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '68.50%', postOffer: '54.80%' },
      { category: 'PE Investors', preOffer: '22.50%', postOffer: '31.95%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '13.25%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,60,00,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,30,00,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '78,00,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '52,00,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '39,00,000',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '26,00,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '13,00,000' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '91,00,000' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nNov 5, 2020', qibExAnchor: 12.5, nii: 16.0, niiAbove10L: 14.2, niiBelow10L: 18.1, retail: 9.1, total: 12.8 },
      { date: 'Day 2\nNov 6, 2020', qibExAnchor: 25.0, nii: 32.1, niiAbove10L: 28.4, niiBelow10L: 36.2, retail: 18.2, total: 25.7 },
      { date: 'Day 3\nNov 7, 2020', qibExAnchor: 41.7, nii: 53.5, niiAbove10L: 47.3, niiBelow10L: 60.3, retail: 30.3, total: 42.8 }
    ]
  },
  {
    id: '41',
    name: 'Titan AgroChem',
    symbol: 'TITANAG',
    status: 'Closed',
    openDate: '2020-10-12',
    closeDate: '2020-10-15',
    listingDate: '2020-10-23',
    priceBand: { min: 210, max: 225 },
    lotSize: 85,
    issueSize: '550 Cr',
    gmp: 30,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 9.5, nii: 12.6, retail: 5.9, total: 9.8 },
    listingPrice: 265,
    currentPrice: 250,
    description: 'Agro chemical company with export focus.',
    summary: 'Titan AgroChem formulates crop protection chemicals and exports to multiple continents, leveraging a diversified product mix spanning herbicides, fungicides, and insecticides. Distribution reach across India plus partnerships abroad drive steady growth. IPO proceeds scaled manufacturing automation, working capital, and regulatory filings. Risks include monsoon dependency, compliance requirements, and price swings, but strong R&D and farmer education programs provide differentiation. Investors track capacity utilization and margin trajectories as new export contracts ramp up. The company also hedges key intermediates to stabilize cash flows post listing.',
    strengths: ['Diversified product mix', 'Distribution reach'],
    risks: ['Monsoon dependency', 'Regulatory approvals'],
    financials: { revenue: '₹1,000 Cr', profit: '₹120 Cr', margin: '12.0%' },
    issueDetails: { freshIssue: '70%', offerForSale: '30%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '2,475',
      eps: '10.67',
      pe: '21.1',
      evEbitda: '14.5',
      enterpriseValue: '2,680 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Manufacturing automation', amount: '180.00' },
      { purpose: 'Working capital', amount: '150.00' },
      { purpose: 'Regulatory filings', amount: '120.00' },
      { purpose: 'General corporate purposes', amount: '100.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '78.50%', postOffer: '62.80%' },
      { category: 'Public', preOffer: '21.50%', postOffer: '37.20%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,44,44,444' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,22,22,222',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '73,33,333' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '48,88,889' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '36,66,667',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '24,44,444' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '12,22,222' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '85,55,556' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nOct 12, 2020', qibExAnchor: 1.9, nii: 2.5, niiAbove10L: 2.2, niiBelow10L: 2.9, retail: 1.2, total: 2.0 },
      { date: 'Day 2\nOct 13, 2020', qibExAnchor: 3.8, nii: 5.1, niiAbove10L: 4.4, niiBelow10L: 5.8, retail: 2.4, total: 3.9 },
      { date: 'Day 3\nOct 14, 2020', qibExAnchor: 6.3, nii: 8.5, niiAbove10L: 7.3, niiBelow10L: 9.7, retail: 4.0, total: 6.5 }
    ]
  },
  {
    id: '42',
    name: 'Beacon Insurance',
    symbol: 'BEACON',
    status: 'Closed',
    openDate: '2020-09-05',
    closeDate: '2020-09-08',
    listingDate: '2020-09-17',
    priceBand: { min: 360, max: 380 },
    lotSize: 40,
    issueSize: '1,000 Cr',
    gmp: 42,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 25.2, nii: 30.1, retail: 12.8, total: 23.4 },
    listingPrice: 430,
    currentPrice: 445,
    description: 'Tech-led insurance company with omnichannel distribution.',
    summary: 'Beacon Insurance combines digital acquisition with agency distribution to offer health, motor, and micro insurance across India. Strong solvency ratios and disciplined underwriting underpin credibility, while proprietary analytics refine pricing. IPO proceeds enhanced capital base, technology platforms, and product innovation including embedded insurance partnerships. Risks include underwriting cycles, regulatory changes, and competitive pricing pressure, yet diversified lines and reinsurance programs limit volatility. Investors expect continued growth from cross selling, bancassurance deals, and customer experience investments.',
    strengths: ['Strong solvency ratios', 'Digital acquisition'],
    risks: ['Underwriting cycles', 'Competitive pricing'],
    financials: { revenue: '₹3,200 Cr', profit: '₹260 Cr', margin: '8.1%' },
    issueDetails: { freshIssue: '45%', offerForSale: '55%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '4,180',
      eps: '9.75',
      pe: '39.0',
      evEbitda: '22.8',
      enterpriseValue: '3,950 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Capital base enhancement', amount: '320.00' },
      { purpose: 'Technology platform development', amount: '250.00' },
      { purpose: 'Product innovation', amount: '280.00' },
      { purpose: 'General corporate purposes', amount: '150.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '62.50%', postOffer: '50.00%' },
      { category: 'Strategic Investors', preOffer: '28.50%', postOffer: '37.25%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '12.75%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,63,15,789' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,31,57,895',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '78,94,737' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '52,63,158' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '39,47,368',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '26,31,579' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '13,15,789' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '92,10,526' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nSep 5, 2020', qibExAnchor: 5.0, nii: 6.0, niiAbove10L: 5.4, niiBelow10L: 6.8, retail: 2.6, total: 4.7 },
      { date: 'Day 2\nSep 6, 2020', qibExAnchor: 10.1, nii: 12.1, niiAbove10L: 10.8, niiBelow10L: 13.6, retail: 5.1, total: 9.4 },
      { date: 'Day 3\nSep 7, 2020', qibExAnchor: 16.8, nii: 20.2, niiAbove10L: 18.0, niiBelow10L: 22.7, retail: 8.5, total: 15.6 }
    ]
  },
  {
    id: '43',
    name: 'Nova Utilities',
    symbol: 'NOVAUTL',
    status: 'Closed',
    openDate: '2020-08-10',
    closeDate: '2020-08-13',
    listingDate: '2020-08-21',
    priceBand: { min: 120, max: 130 },
    lotSize: 115,
    issueSize: '700 Cr',
    gmp: 8,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 1.8, nii: 2.6, retail: 1.7, total: 1.95 },
    listingPrice: 135,
    currentPrice: 140,
    description: 'Mini-hydel and captive power operator.',
    summary: 'Nova Utilities operates mini hydel plants and captive power assets for industrial clients, providing stable output through long term contracts. The company leverages government incentives but must manage seasonal river flows and tariff revisions. IPO proceeds funded refurbishment, grid upgrades, and feasibility studies for hybrid solar additions. Risks involve hydrology variability, regulatory approvals, and limited scale, yet disciplined cost control and niche focus keep cash flows predictable. Investors monitor diversification into ancillary services to unlock further growth.',
    strengths: ['Stable cash flows', 'Government incentives'],
    risks: ['Seasonal output', 'Tariff revisions'],
    financials: { revenue: '₹620 Cr', profit: '₹55 Cr', margin: '8.9%' },
    issueDetails: { freshIssue: '60%', offerForSale: '40%', faceValue: '₹10 per share' },
    valuation: {
      marketCap: '910',
      eps: '5.50',
      pe: '23.6',
      evEbitda: '15.2',
      enterpriseValue: '1,080 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Plant refurbishment', amount: '180.00' },
      { purpose: 'Grid upgrades', amount: '150.00' },
      { purpose: 'Hybrid solar feasibility', amount: '200.00' },
      { purpose: 'Working capital', amount: '170.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '72.50%', postOffer: '58.00%' },
      { category: 'Public', preOffer: '27.50%', postOffer: '42.00%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '5,38,46,154' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '2,69,23,077',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '1,61,53,846' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '1,07,69,231' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '80,76,923',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '53,84,615' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '26,92,308' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '1,88,46,154' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nAug 10, 2020', qibExAnchor: 0.4, nii: 0.5, niiAbove10L: 0.4, niiBelow10L: 0.6, retail: 0.3, total: 0.4 },
      { date: 'Day 2\nAug 11, 2020', qibExAnchor: 0.7, nii: 1.0, niiAbove10L: 0.9, niiBelow10L: 1.2, retail: 0.7, total: 0.8 },
      { date: 'Day 3\nAug 12, 2020', qibExAnchor: 1.2, nii: 1.7, niiAbove10L: 1.5, niiBelow10L: 2.0, retail: 1.2, total: 1.3 }
    ]
  },
  {
    id: '44',
    name: 'Vanguard Devices',
    symbol: 'VANGD',
    status: 'Closed',
    openDate: '2020-07-05',
    closeDate: '2020-07-08',
    listingDate: '2020-07-17',
    priceBand: { min: 410, max: 430 },
    lotSize: 28,
    issueSize: '920 Cr',
    gmp: 70,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 32.2, nii: 48.1, retail: 18.7, total: 30.4 },
    listingPrice: 580,
    currentPrice: 600,
    description: 'Consumer electronics and wearables manufacturer.',
    summary: 'Vanguard Devices designs consumer electronics and wearables, partnering with ODMs while maintaining in house industrial design and software teams. Growth is driven by fitness trackers, audio accessories, and smart home devices sold through omnichannel retail. IPO proceeds funded R&D, brand marketing, and working capital to support product launches. Risks include import dependency, rapid tech cycles, and pricing pressure, but expanding domestic manufacturing and ecosystem services provide differentiation. Investors evaluate how quickly new categories contribute to margins after the strong IPO debut.',
    strengths: ['ODM partnerships', 'Strong brand recall'],
    risks: ['Import dependency', 'Rapid tech cycles'],
    financials: { revenue: '₹1,650 Cr', profit: '₹200 Cr', margin: '12.1%' },
    issueDetails: { freshIssue: '75%', offerForSale: '25%', faceValue: '₹5 per share' },
    valuation: {
      marketCap: '5,160',
      eps: '16.67',
      pe: '25.8',
      evEbitda: '17.2',
      enterpriseValue: '4,920 Cr'
    },
    objectsOfIssue: [
      { purpose: 'R&D investments', amount: '320.00' },
      { purpose: 'Brand marketing', amount: '250.00' },
      { purpose: 'Working capital', amount: '220.00' },
      { purpose: 'General corporate purposes', amount: '130.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '55.50%', postOffer: '44.40%' },
      { category: 'PE/VC Investors', preOffer: '35.50%', postOffer: '42.35%' },
      { category: 'Public', preOffer: '9.00%', postOffer: '13.25%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,13,95,349' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,06,97,674',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '64,18,605' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '42,79,070' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '32,09,302',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '21,39,535' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '10,69,767' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '74,88,372' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nJul 5, 2020', qibExAnchor: 6.4, nii: 9.6, niiAbove10L: 8.5, niiBelow10L: 11.0, retail: 3.7, total: 6.1 },
      { date: 'Day 2\nJul 6, 2020', qibExAnchor: 12.9, nii: 19.3, niiAbove10L: 17.1, niiBelow10L: 22.0, retail: 7.5, total: 12.2 },
      { date: 'Day 3\nJul 7, 2020', qibExAnchor: 21.5, nii: 32.2, niiAbove10L: 28.5, niiBelow10L: 36.7, retail: 12.5, total: 20.3 }
    ]
  },
  {
    id: '45',
    name: 'Eclipse Fashion',
    symbol: 'ECLFASH',
    status: 'Closed',
    openDate: '2020-06-12',
    closeDate: '2020-06-15',
    listingDate: '2020-06-24',
    priceBand: { min: 150, max: 160 },
    lotSize: 100,
    issueSize: '420 Cr',
    gmp: 5,
    gmpUpdateDate: 'Closed',
    subscription: { qib: 1.1, nii: 1.6, retail: 1.2, total: 1.3 },
    listingPrice: 162,
    currentPrice: 150,
    description: 'Fast fashion apparel exporter for global brands.',
    summary: 'Eclipse Fashion supplies fast fashion apparel to global brands, executing quick design cycles and flexible manufacturing in India. The company benefits from diversified buyers yet remains exposed to demand volatility and compliance costs. IPO proceeds were used for working capital, automation, and ESG initiatives. Risks include currency swings, supply chain disruptions, and shifting retailer strategies, but investment in digital sampling and vendor managed inventory aims to improve responsiveness. Investors watch order book health and margin recovery following the muted listing.',
    strengths: ['Quick design cycles', 'Diversified buyers'],
    risks: ['Demand volatility', 'Compliance costs'],
    financials: { revenue: '₹780 Cr', profit: '₹52 Cr', margin: '6.7%' },
    issueDetails: { freshIssue: '50%', offerForSale: '50%', faceValue: '₹2 per share' },
    valuation: {
      marketCap: '2,625',
      eps: '3.25',
      pe: '49.2',
      evEbitda: '32.5',
      enterpriseValue: '2,780 Cr'
    },
    objectsOfIssue: [
      { purpose: 'Working capital', amount: '140.00' },
      { purpose: 'Manufacturing automation', amount: '120.00' },
      { purpose: 'ESG initiatives', amount: '80.00' },
      { purpose: 'General corporate purposes', amount: '80.00' }
    ],
    promoterHoldings: [
      { category: 'Promoter Group', preOffer: '78.50%', postOffer: '62.80%' },
      { category: 'Public', preOffer: '21.50%', postOffer: '37.20%' }
    ],
    ipoReservation: [
      { category: 'Total Offered Shares', sharesOfferedPercent: '100%', sharesOfferedRaw: '2,62,50,000' },
      { 
        category: 'QIB', 
        sharesOfferedPercent: '50%', 
        sharesOfferedRaw: '1,31,25,000',
        children: [
          { category: 'Anchor Investor', sharesOfferedPercent: '30%', sharesOfferedRaw: '78,75,000' },
          { category: 'QIB (Ex-Anchor)', sharesOfferedPercent: '20%', sharesOfferedRaw: '52,50,000' }
        ]
      },
      { 
        category: 'NII (HNI)', 
        sharesOfferedPercent: '15%', 
        sharesOfferedRaw: '39,37,500',
        children: [
          { category: 'bNII (> ₹10L)', sharesOfferedPercent: '10%', sharesOfferedRaw: '26,25,000' },
          { category: 'sNII (< ₹10L)', sharesOfferedPercent: '5%', sharesOfferedRaw: '13,12,500' }
        ]
      },
      { category: 'Retail', sharesOfferedPercent: '35%', sharesOfferedRaw: '91,87,500' }
    ],
    subscriptionTrend: [
      { date: 'Day 1\nJun 12, 2020', qibExAnchor: 0.2, nii: 0.3, niiAbove10L: 0.3, niiBelow10L: 0.4, retail: 0.2, total: 0.3 },
      { date: 'Day 2\nJun 13, 2020', qibExAnchor: 0.5, nii: 0.7, niiAbove10L: 0.6, niiBelow10L: 0.8, retail: 0.5, total: 0.6 },
      { date: 'Day 3\nJun 14, 2020', qibExAnchor: 0.8, nii: 1.1, niiAbove10L: 1.0, niiBelow10L: 1.3, retail: 0.8, total: 0.9 }
    ]
  }
];