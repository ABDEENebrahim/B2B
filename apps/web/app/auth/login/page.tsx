import { LoginForm } from '../../../src/components/forms/login-form';

export default function LoginPage() {
  return (
    <section className="mx-auto max-w-md rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h1 className="text-2xl font-semibold">Login</h1>
      <LoginForm />
    </section>
  );
}
