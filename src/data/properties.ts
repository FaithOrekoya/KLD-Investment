import prop1Image from '../assets/images/about_architectural_property_1794288070785.jpg';
import prop2Image from '../assets/images/investment_fix_flip_1794288071879.jpg';
import prop3Image from '../assets/images/investment_commercial_1794288071830.jpg';

export interface PropertyPreview {
  id: string;
  title: string;
  location: string;
  propertyType: string;
  description: string;
  imageUrl: string;
  highlights: string[];
}

export const FEATURED_PROPERTIES: PropertyPreview[] = [
  {
    id: 'kld-opp-01',
    title: 'Metropolitan Single-Family Value-Add',
    location: 'Primary Metro Growth Corridor',
    propertyType: 'Value-Add / Equity Spread',
    description: 'Off-market single-family asset positioned for substantial equity realization through interior modernization and layout expansion.',
    imageUrl: prop1Image,
    highlights: [
      'Direct-to-seller contract assignment opportunity',
      'Preliminary comps analysis and scope documentation prepared',
      'High historical appreciation submarket with low inventory'
    ]
  },
  {
    id: 'kld-opp-02',
    title: 'Prime Craftsman Restoration Opportunity',
    location: 'Established Infill Neighborhood',
    propertyType: 'Fix & Flip / Full Rehab',
    description: 'Distinctive residential property featuring intact architectural structure, generous lot footprint, and high margin potential for seasoned renovators.',
    imageUrl: prop2Image,
    highlights: [
      'Substantial spread between acquisition basis and projected ARV',
      'Strong end-buyer demand for modern architectural restorations',
      'Fast-track contract assignment terms'
    ]
  },
  {
    id: 'kld-opp-03',
    title: 'Boutique Multi-Family / Mixed-Use Asset',
    location: 'High-Demand Commercial Corridor',
    propertyType: 'Rental Portfolio / Cash Flow',
    description: 'Strategic multi-door property offering in-place rental revenue with long-term tenant stability and strategic lease repositioning upside.',
    imageUrl: prop3Image,
    highlights: [
      'Multiple exit paths including long-term hold or condominium conversion',
      'Immediate cash-flow continuity in high-occupancy sector',
      'Direct principal assignment via off-market covenant'
    ]
  }
];
