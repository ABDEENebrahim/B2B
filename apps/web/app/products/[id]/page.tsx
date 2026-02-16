interface ProductDetailPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Product Detail: {params.id}</h1>
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-5">
        <p className="text-slate-300">Detailed product specs, media gallery, MOQ tiers, and supplier profile appear here.</p>
      </div>
    </section>
  );
}
