export interface ApplicationDetailRow {
  category: string;
  lots: number;
  shares: number;
}

export interface IPOReservation {
  category: string;
  sharesOfferedPercent: string;
  sharesOfferedRaw: string;
  children?: IPOReservation[];
}

export interface SubscriptionTrendRow {
  date: string;
  qibExAnchor: number;
  nii: number;
  niiAbove10L: number;
  niiBelow10L: number;
  retail: number;
  total: number;
}

export interface IPO {
  id: string;
  name: string;
  symbol: string;
  logoUrl?: string;
  status: IPOStatus;
  openDate: string;
  closeDate: string;
  listingDate: string;
  priceBand: {
    min: number;
    max: number;
  };
  lotSize: number;
  applicationDetails?: ApplicationDetailRow[];
  issueSize: string; // e.g., "1200 Cr"
  gmp: number; // Grey Market Premium
  gmpUpdateDate: string;
  subscription: {
    qib: number; // times
    nii: number;
    retail: number;
    total: number;
  };
  description: string;
  summary: string; // ~100-word narrative for summary card
  strengths: string[];
  risks: string[];
  financials: {
    revenue: string;
    profit: string;
    margin: string;
  };
  issueDetails: {
    freshIssue: string;
    offerForSale: string;
    faceValue: string;
  };
  valuation?: {
    marketCap: string;
    eps: string;
    pe: string;
    evEbitda: string;
    enterpriseValue: string;
  };
  objectsOfIssue?: {
    purpose: string;
    amount: string;
  }[];
  promoterHoldings?: {
    category: string;
    preOffer: string;
    postOffer: string;
  }[];
  ipoReservation?: IPOReservation[];
  subscriptionTrend?: SubscriptionTrendRow[];
  listingPrice?: number;
  listingClosePrice?: number;
  currentPrice?: number;
}

export type ViewState = 'dashboard' | 'detail';