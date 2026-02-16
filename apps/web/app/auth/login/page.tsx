export default function LoginPage() {
  return (
    <section className="mx-auto max-w-md rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h1 className="text-2xl font-semibold">Login</h1>
      <form className="mt-5 space-y-4">
        <input className="w-full rounded border border-slate-700 bg-slate-950 p-2" placeholder="Email" />
        <input className="w-full rounded border border-slate-700 bg-slate-950 p-2" type="password" placeholder="Password" />
        <button className="w-full rounded bg-cyan-600 py-2 font-medium">Sign in</button>
      </form>
    </section>
  );
}
