'use client';

import { useForm } from 'react-hook-form';

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  role: 'BUYER' | 'SUPPLIER';
  password: string;
}

export function RegisterForm() {
  const { register, handleSubmit } = useForm<RegisterFormValues>({
    defaultValues: { role: 'BUYER' },
  });

  const onSubmit = (_values: RegisterFormValues) => {
    // placeholder: API integration in next phase
  };

  return (
    <form className="mt-5 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
      <input className="rounded border border-slate-700 bg-slate-950 p-2" placeholder="First name" {...register('firstName', { required: true })} />
      <input className="rounded border border-slate-700 bg-slate-950 p-2" placeholder="Last name" {...register('lastName', { required: true })} />
      <input className="rounded border border-slate-700 bg-slate-950 p-2 md:col-span-2" placeholder="Email" {...register('email', { required: true })} />
      <select className="rounded border border-slate-700 bg-slate-950 p-2 md:col-span-2" {...register('role', { required: true })}>
        <option value="BUYER">BUYER</option>
        <option value="SUPPLIER">SUPPLIER</option>
      </select>
      <input className="rounded border border-slate-700 bg-slate-950 p-2 md:col-span-2" type="password" placeholder="Password" {...register('password', { required: true, minLength: 8 })} />
      <button className="rounded bg-cyan-600 px-4 py-2 font-medium md:col-span-2" type="submit">Create account</button>
    </form>
  );
}
