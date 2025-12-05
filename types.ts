export type IPOStatus = 'Active' | 'Upcoming' | 'Closed';

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
  listingPrice?: number;
  listingClosePrice?: number;
  currentPrice?: number;
}

export type ViewState = 'dashboard' | 'detail';