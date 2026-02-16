export default function ForgotPasswordPage() {
  return (
    <section className="mx-auto max-w-md rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h1 className="text-2xl font-semibold">Forgot password</h1>
      <p className="mt-2 text-sm text-slate-300">We&apos;ll send reset instructions to your email.</p>
      <form className="mt-5 space-y-4">
        <input className="w-full rounded border border-slate-700 bg-slate-950 p-2" placeholder="Email" />
        <button className="w-full rounded bg-cyan-600 py-2 font-medium">Send reset link</button>
      </form>
    </section>
  );
}
