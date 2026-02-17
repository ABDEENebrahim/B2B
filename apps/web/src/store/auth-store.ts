import { create } from 'zustand';

interface AuthState {
  accessToken?: string;
  refreshToken?: string;
  user?: { id: string; email: string; role: 'BUYER' | 'SUPPLIER' | 'ADMIN' };
  setAuth: (payload: {
    accessToken: string;
    refreshToken: string;
    user: { id: string; email: string; role: 'BUYER' | 'SUPPLIER' | 'ADMIN' };
  }) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: undefined,
  refreshToken: undefined,
  user: undefined,
  setAuth: ({ accessToken, refreshToken, user }) => set({ accessToken, refreshToken, user }),
  clearAuth: () => set({ accessToken: undefined, refreshToken: undefined, user: undefined }),
}));
