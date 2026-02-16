export type UserRole = 'BUYER' | 'SUPPLIER' | 'ADMIN';
export type UserStatus = 'ACTIVE' | 'SUSPENDED';

export interface AuthUser {
  id: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  status: UserStatus;
  verificationStatus: 'UNVERIFIED' | 'VERIFIED';
  failedLoginAttempts: number;
  lockoutUntil?: Date;
  createdAt: Date;
  updatedAt: Date;
}
