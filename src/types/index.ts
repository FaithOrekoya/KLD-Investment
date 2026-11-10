export type InvestorType = 
  | 'Individual Investor' 
  | 'Real Estate Company' 
  | 'Property Wholesaler' 
  | 'Other';

export type InvestmentCategory = 
  | 'Fix & Flip' 
  | 'Rental' 
  | 'Commercial' 
  | 'Other';

export interface PropertyOpportunity {
  id: string;
  title: string;
  location: string;
  propertyType: 'Fix & Flip' | 'Rental Properties' | 'Commercial Real Estate' | 'Value-Add Opportunities';
  investmentPrice?: string;
  estimatedArv?: string;
  estimatedRehab?: string;
  projectedReturn?: string;
  description: string;
  fullOverview: string;
  imageUrl: string;
  highlights: string[];
  specs: {
    sqft?: string;
    lotSize?: string;
    units?: string;
    yearBuilt?: string;
    zoning?: string;
  };
}

export interface VipRegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  investorType: InvestorType | '';
  budgetRange: string;
  preferredLocations: string;
  investmentType: InvestmentCategory | '';
  consent: boolean;
}

export interface JvInquiryForm {
  name: string;
  email: string;
  phone: string;
  role: 'Capital Partner' | 'Operational Partner' | 'Developer' | 'Other';
  capitalAvailable: string;
  targetMarkets: string;
  message: string;
}

export interface ReferralInquiryForm {
  referrerName: string;
  referrerEmail: string;
  referrerPhone: string;
  propertyAddress: string;
  propertyType: string;
  notes: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
