import { RegisterForm } from '../../../src/components/forms/register-form';

export default function RegisterPage() {
  return (
    <section className="mx-auto max-w-xl rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h1 className="text-2xl font-semibold">Create account</h1>
      <p className="mt-2 text-sm text-slate-300">Join as buyer or supplier.</p>
      <RegisterForm />
    </section>
  );
}
