interface SupplierPageProps {
  params: { id: string };
}

export default function SupplierDetailPage({ params }: SupplierPageProps) {
  return (
    <section>
      <h1 className="text-2xl font-semibold">Supplier Profile: {params.id}</h1>
      <p className="mt-2 text-slate-300">Company verification, catalog, and contact actions appear here.</p>
    </section>
  );
}
