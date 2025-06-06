import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <img src="/logo.svg" alt="Rafaelli Capital" width="200" />
      <h1>Bienvenue chez RAFAELLI CAPITAL</h1>
      <p>Votre partenaire stratégique en financement et investissement.</p>
      <nav style={{ marginTop: '2rem' }}>
        <Link href="/simulateur">🧮 Simulateur fiscal</Link><br/>
        <Link href="/contact">📩 Contact & Devis</Link>
      </nav>
    </div>
  );
}