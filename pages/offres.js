import Link from 'next/link';

export default function Offres() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Nos Offres RAFAELLI</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { title: "Pack Déficit Foncier", desc: "Optimisez vos revenus fonciers et réduisez vos impôts." },
          { title: "Pack Denormandie", desc: "Investissez dans l'ancien rénové avec réduction fiscale." },
          { title: "Montage Holding", desc: "Structurez votre patrimoine via une SCI à l'IS ou une holding." }
        ].map((offre, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-lg border hover:border-black transition">
            <h2 className="text-xl font-bold mb-2">{offre.title}</h2>
            <p className="mb-4">{offre.desc}</p>
            <Link href="/contact" className="text-blue-600 hover:underline">Demander une simulation</Link>
          </div>
        ))}
      </div>
    </div>
  );
}