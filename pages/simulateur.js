import { useState } from 'react';

export default function Simulateur() {
  const [revenu, setRevenu] = useState('');
  const [tmi, setTmi] = useState('');
  const [resultat, setResultat] = useState(null);

  const calculer = () => {
    const base = parseFloat(revenu || 0);
    const taux = parseFloat(tmi || 0) / 100;
    const reduc = base * taux * 0.63;
    setResultat(reduc.toFixed(0));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <h1 className="text-2xl font-bold mb-6">Simulateur Denormandie</h1>
      <div className="space-y-4 max-w-md">
        <input placeholder="Revenu imposable (€)" className="border px-4 py-2 w-full" value={revenu} onChange={e => setRevenu(e.target.value)} />
        <input placeholder="TMI (%)" className="border px-4 py-2 w-full" value={tmi} onChange={e => setTmi(e.target.value)} />
        <button onClick={calculer} className="bg-blue-600 text-white px-4 py-2 rounded">Calculer</button>
        {resultat && <div className="mt-4 text-xl font-semibold text-green-700">💰 Réduction estimée : {resultat} €</div>}
      </div>
    </div>
  );
}