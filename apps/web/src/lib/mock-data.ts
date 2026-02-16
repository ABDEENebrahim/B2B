export interface ProductCardData {
  id: string;
  title: string;
  moq: number;
  priceFrom: number;
  country: string;
}

export interface RfqCardData {
  id: string;
  title: string;
  quantity: string;
  deadline: string;
}

export const featuredProducts: ProductCardData[] = [
  { id: 'p-1', title: 'Stainless Steel Hex Bolt M8', moq: 1000, priceFrom: 0.12, country: 'CN' },
  { id: 'p-2', title: 'Industrial Nylon Cable Ties', moq: 5000, priceFrom: 0.03, country: 'VN' },
  { id: 'p-3', title: 'High Pressure Ball Valve 1/2"', moq: 200, priceFrom: 8.7, country: 'IN' },
];

export const recentRfqs: RfqCardData[] = [
  { id: 'r-1', title: 'RFQ for 50,000 M8 bolts', quantity: '50,000 pcs', deadline: '2026-03-05' },
  { id: 'r-2', title: 'RFQ for PET packaging rolls', quantity: '120 tons', deadline: '2026-03-12' },
  { id: 'r-3', title: 'RFQ for injection molded housings', quantity: '30,000 units', deadline: '2026-03-20' },
];
