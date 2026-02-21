'use client';

import { useMemo } from 'react';
import { useAuthStore } from '../store/auth-store';

export function useAuth() {
  const user = useAuthStore((state) => state.user);
  const setAuth = useAuthStore((state) => state.setAuth);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const isAuthenticated = useMemo(() => Boolean(user), [user]);

  return {
    user,
    isAuthenticated,
    setAuth,
    clearAuth,
  };
}
