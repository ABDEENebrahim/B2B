export interface ProductCardData {
  id: string;
  title: string;
  moq: number;
  priceFrom: number;
  country: string;
  supplier: string;
  badges?: string[];
}

export interface ProductDetailData extends ProductCardData {
  leadTime: string;
  capacity: string;
  paymentTerms: string;
  certifications: string[];
  specs: Array<{ label: string; value: string }>;
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
  {
    id: 'p-5',
    title: 'Solar Inverter 10kW Three-Phase',
    moq: 50,
    priceFrom: 612,
    country: 'CN',
    supplier: 'Guangzhou Green Energy Tech',
    badges: ['Verified Supplier', 'Ready to Ship'],
  },
  {
    id: 'p-6',
    title: 'Food Grade PET Preforms 28mm',
    moq: 200000,
    priceFrom: 0.019,
    country: 'TR',
    supplier: 'Istanbul Polymer Solutions',
    badges: ['Trade Assurance'],
  },
  {
    id: 'p-7',
    title: 'CNC Machined Brass Connector Set',
    moq: 10000,
    priceFrom: 0.55,
    country: 'IN',
    supplier: 'Pune Precision Metals',
    badges: ['OEM', 'Fast Response'],
  },
  {
    id: 'p-8',
    title: 'Industrial Conveyor Roller Assembly',
    moq: 500,
    priceFrom: 11.4,
    country: 'MY',
    supplier: 'KL Motion Components',
    badges: ['Top Rated'],
  },
];

export const productDetails: ProductDetailData[] = [
  {
    ...featuredProducts[0],
    leadTime: '18-25 days',
    capacity: '4.5M pcs/month',
    paymentTerms: 'T/T 30% deposit, 70% before shipment',
    certifications: ['ISO 9001', 'RoHS'],
    specs: [
      { label: 'Material', value: '304 Stainless Steel' },
      { label: 'Standard', value: 'DIN933' },
      { label: 'Thread Type', value: 'Metric Coarse' },
      { label: 'Surface', value: 'Passivated' },
    ],
  },
  {
    ...featuredProducts[4],
    leadTime: '12-18 days',
    capacity: '12,000 units/month',
    paymentTerms: 'L/C at sight, T/T',
    certifications: ['CE', 'IEC 62109'],
    specs: [
      { label: 'Power', value: '10kW' },
      { label: 'Efficiency', value: '98.2%' },
      { label: 'Input Voltage', value: '200-1000V DC' },
      { label: 'Protection', value: 'IP65' },
    ],
  },
  {
    ...featuredProducts[7],
    leadTime: '20-28 days',
    capacity: '35,000 roller sets/month',
    paymentTerms: 'T/T, D/P',
    certifications: ['ISO 14001', 'ISO 45001'],
    specs: [
      { label: 'Tube Diameter', value: '50mm / 60mm / custom' },
      { label: 'Shaft', value: 'Spring-loaded steel shaft' },
      { label: 'Bearing', value: '6202 ZZ' },
      { label: 'Surface', value: 'Zinc plated / PVC coated' },
    ],
  },
];

export const recentRfqs: RfqCardData[] = [
  { id: 'r-1', title: 'RFQ for 50,000 M8 bolts', quantity: '50,000 pcs', deadline: '2026-03-05', region: 'Germany' },
  { id: 'r-2', title: 'RFQ for PET packaging rolls', quantity: '120 tons', deadline: '2026-03-12', region: 'UAE' },
  { id: 'r-3', title: 'RFQ for injection molded housings', quantity: '30,000 units', deadline: '2026-03-20', region: 'USA' },
  { id: 'r-4', title: 'RFQ for 2MW rooftop solar kit components', quantity: '12 containers', deadline: '2026-03-22', region: 'South Africa' },
  { id: 'r-5', title: 'RFQ for biodegradable takeaway packaging', quantity: '8 million pcs', deadline: '2026-03-28', region: 'Australia' },
  { id: 'r-6', title: 'RFQ for OEM cordless drill assemblies', quantity: '40,000 units', deadline: '2026-04-01', region: 'Brazil' },
  { id: 'r-7', title: 'RFQ for medical-grade nitrile gloves', quantity: '20 million pcs', deadline: '2026-04-04', region: 'Canada' },
  { id: 'r-8', title: 'RFQ for smart warehouse barcode scanners', quantity: '7,500 units', deadline: '2026-04-09', region: 'Poland' },
];

export const featuredSuppliers: SupplierData[] = [
  { id: 's-100', name: 'Qingdao Metals Global', country: 'China', years: 12, verified: true, responseRate: '98%' },
  { id: 's-200', name: 'EuroPak Materials GmbH', country: 'Germany', years: 8, verified: true, responseRate: '95%' },
  { id: 's-300', name: 'Indo Industrial Group', country: 'India', years: 10, verified: false, responseRate: '91%' },
  { id: 's-400', name: 'Shenzhen Smart Controls Co.', country: 'China', years: 15, verified: true, responseRate: '97%' },
  { id: 's-500', name: 'Ankara Industrial Plastics', country: 'Türkiye', years: 9, verified: true, responseRate: '94%' },
  { id: 's-600', name: 'Monterrey Auto Components SA', country: 'Mexico', years: 11, verified: false, responseRate: '89%' },
  { id: 's-700', name: 'Ho Chi Minh FastBuild Materials', country: 'Vietnam', years: 6, verified: true, responseRate: '96%' },
  { id: 's-800', name: 'Johannesburg Energy Storage Ltd', country: 'South Africa', years: 7, verified: true, responseRate: '93%' },
];

export const dashboardStats = [
  { label: 'Active RFQs', value: '14', trend: '+3 this week' },
  { label: 'Pending Quotes', value: '27', trend: '+8 in 24h' },
  { label: 'Orders in Production', value: '9', trend: '2 due this week' },
  { label: 'Unread Messages', value: '18', trend: '6 high priority' },
];

export const recentMessages = [
  { from: 'Qingdao Metals Global', subject: 'Quote update for M8 bolts', time: '12m ago' },
  { from: 'EuroPak Materials GmbH', subject: 'Lead time confirmation', time: '1h ago' },
  { from: 'Guangzhou Green Energy Tech', subject: 'Sample shipment dispatched', time: '3h ago' },
];

export const sourcingPlaybook = [
  'Shortlist suppliers using verification and response rate',
  'Request samples for top 3 suppliers before mass order',
  'Use milestone payment with inspection before final release',
  'Lock annual framework agreement for stable pricing',
];
