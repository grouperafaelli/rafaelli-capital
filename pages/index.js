import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-gray-100 shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wide">RAFAELLI <span className="text-sm text-gray-600">CAPITAL</span></div>
          <nav className="space-x-4 text-sm">
            <Link href="/">Accueil</Link>
            <Link href="/simulateur">Simulateur</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-3xl mx-auto text-center mt-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Investir intelligemment avec RAFAELLI CAPITAL</h1>
        <p className="text-lg mb-8">Défiscalisation. Rentabilité. Accompagnement complet.</p>
        <Link href="/simulateur" className="bg-black text-white px-6 py-3 rounded-full shadow hover:bg-gray-800">Simuler mon gain</Link>
      </main>
    </div>
  );
}