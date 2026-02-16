interface RfqPageProps {
  params: { id: string };
}

export default function RfqDetailPage({ params }: RfqPageProps) {
  return (
    <section>
      <h1 className="text-2xl font-semibold">RFQ Detail: {params.id}</h1>
      <p className="mt-2 text-slate-300">RFQ specifications and submitted quote comparison table go here.</p>
    </section>
  );
}
