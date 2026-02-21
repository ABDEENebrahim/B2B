'use client';

import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../store/auth-store';

interface LoginFormValues {
  email: string;
  password: string;
}

export function LoginForm() {
  const { register, handleSubmit, formState } = useForm<LoginFormValues>();
  const setAuth = useAuthStore((state) => state.setAuth);

  const onSubmit = (values: LoginFormValues) => {
    setAuth({
      accessToken: 'demo-access-token',
      refreshToken: 'demo-refresh-token',
      user: { id: 'demo-user', email: values.email, role: 'BUYER' },
    });
  };

  return (
    <form className="mt-5 space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="w-full rounded border border-slate-700 bg-slate-950 p-2"
        placeholder="Email"
        {...register('email', { required: true })}
      />
      <input
        className="w-full rounded border border-slate-700 bg-slate-950 p-2"
        type="password"
        placeholder="Password"
        {...register('password', { required: true, minLength: 8 })}
      />
      <button className="w-full rounded bg-cyan-600 py-2 font-medium" type="submit">
        {formState.isSubmitting ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
}
