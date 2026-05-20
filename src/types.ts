export interface SocialStat {
  platform: 'Blog' | 'Instagram' | 'Twitter/X' | 'YouTube' | 'Pinterest';
  followersString: string;
  monthlyReach: number;
  engagementUnit: string;
  engagementVal: string;
  demographics: { label: string; percentage: number }[];
  color: string;
}

export interface BookHighlight {
  title: string;
  subtitle: string;
  publishingYear: string;
  publisher: string;
  description: string;
  coverImage: string;
  amazonUrl?: string;
  achievements: string[];
}

export interface CampaignHighlight {
  brand: string;
  type: string;
  outcome: string;
  logo: string;
  rating: number;
  snippet: string;
}

export interface ReviewOutline {
  headings: string[];
  outline: string;
  keywords: string[];
  socialCopies: {
    instagram: string;
    twitter: string;
    pinterest: string;
  };
  summary: string;
}

export interface PitchEvaluation {
  brandName: string;
  productName: string;
  estimatedTier: 'Micro' | 'Mid' | 'High-End' | 'Spam / Low Quality';
  fitScore: number; // 0 to 100
  pros: string[];
  cons: string[];
  suggestedRates: {
    blogPost: string;
    instagramPost: string;
    bundledPackage: string;
  };
  suggestedDrafts: {
    accept: string;
    negotiate: string;
    decline: string;
  };
  redFlags: string[];
}
