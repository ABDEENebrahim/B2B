import { RfqCard } from '../../src/components/ui/rfq-card';
import { recentRfqs } from '../../src/lib/mock-data';

export default function RfqsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Open RFQs</h1>
      <p className="mt-2 text-slate-300">Find high-intent demand from global buyers and submit competitive quotes.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {recentRfqs.map((rfq) => (
          <RfqCard key={rfq.id} rfq={rfq} />
        ))}
      </div>
    </section>
  );
}
