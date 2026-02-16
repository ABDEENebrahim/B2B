export default function RegisterPage() {
  return (
    <section className="mx-auto max-w-xl rounded-lg border border-slate-800 bg-slate-900 p-6">
      <h1 className="text-2xl font-semibold">Create account</h1>
      <p className="mt-2 text-sm text-slate-300">Join as buyer or supplier.</p>
      <form className="mt-5 grid gap-4 md:grid-cols-2">
        <input className="rounded border border-slate-700 bg-slate-950 p-2" placeholder="First name" />
        <input className="rounded border border-slate-700 bg-slate-950 p-2" placeholder="Last name" />
        <input className="rounded border border-slate-700 bg-slate-950 p-2 md:col-span-2" placeholder="Email" />
        <select className="rounded border border-slate-700 bg-slate-950 p-2 md:col-span-2">
          <option>BUYER</option>
          <option>SUPPLIER</option>
        </select>
        <input className="rounded border border-slate-700 bg-slate-950 p-2 md:col-span-2" type="password" placeholder="Password" />
        <button className="rounded bg-cyan-600 px-4 py-2 font-medium md:col-span-2">Create account</button>
      </form>
    </section>
  );
}
