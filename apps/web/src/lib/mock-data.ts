export interface ProductCardData {
  id: string;
  title: string;
  moq: number;
  priceFrom: number;
  country: string;
  supplier: string;
  badges?: string[];
}

export interface RfqCardData {
  id: string;
  title: string;
  quantity: string;
  deadline: string;
  region: string;
}

export interface SupplierData {
  id: string;
  name: string;
  country: string;
  years: number;
  verified: boolean;
  responseRate: string;
}

export const marketplaceCategories = [
  'Industrial Machinery',
  'Electrical Equipment',
  'Construction Materials',
  'Packaging & Printing',
  'Auto Parts',
  'Tools & Hardware',
  'Consumer Electronics',
  'Chemicals',
];

export const featuredProducts: ProductCardData[] = [
  {
    id: 'p-1',
    title: 'Stainless Steel Hex Bolt M8',
    moq: 1000,
    priceFrom: 0.12,
    country: 'CN',
    supplier: 'Ningbo Fasteners Co., Ltd.',
    badges: ['Verified Supplier', 'Trade Assurance'],
  },
  {
    id: 'p-2',
    title: 'Industrial Nylon Cable Ties',
    moq: 5000,
    priceFrom: 0.03,
    country: 'VN',
    supplier: 'Viet CableTech Manufacturing',
    badges: ['Top Rated'],
  },
  {
    id: 'p-3',
    title: 'High Pressure Ball Valve 1/2"',
    moq: 200,
    priceFrom: 8.7,
    country: 'IN',
    supplier: 'HydraFlow Components Pvt Ltd',
    badges: ['Fast Response'],
  },
  {
    id: 'p-4',
    title: 'Aluminum Injection Molded Housing',
    moq: 300,
    priceFrom: 3.45,
    country: 'CN',
    supplier: 'Shenzhen Precise Molding',
    badges: ['OEM'],
  },
];

export const recentRfqs: RfqCardData[] = [
  { id: 'r-1', title: 'RFQ for 50,000 M8 bolts', quantity: '50,000 pcs', deadline: '2026-03-05', region: 'Germany' },
  { id: 'r-2', title: 'RFQ for PET packaging rolls', quantity: '120 tons', deadline: '2026-03-12', region: 'UAE' },
  { id: 'r-3', title: 'RFQ for injection molded housings', quantity: '30,000 units', deadline: '2026-03-20', region: 'USA' },
];

export const featuredSuppliers: SupplierData[] = [
  { id: 's-100', name: 'Qingdao Metals Global', country: 'China', years: 12, verified: true, responseRate: '98%' },
  { id: 's-200', name: 'EuroPak Materials GmbH', country: 'Germany', years: 8, verified: true, responseRate: '95%' },
  { id: 's-300', name: 'Indo Industrial Group', country: 'India', years: 10, verified: false, responseRate: '91%' },
];
