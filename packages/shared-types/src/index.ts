export type UserRole = 'BUYER' | 'SUPPLIER' | 'ADMIN';

export interface HealthCheckResponse {
  service: string;
  status: 'ok';
  timestamp: string;
}
