import { useState } from 'react';

export default function Simulateur() {
  const [revenu, setRevenu] = useState('');
  const [tmi, setTmi] = useState('');
  const [resultat, setResultat] = useState(null);

  const calculer = () => {
    const base = parseFloat(revenu || 0);
    const taux = parseFloat(tmi || 0) / 100;
    const reduc = base * taux * 0.63; // 63% sur 9 ans
    setResultat(reduc.toFixed(0));
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Simulateur Denormandie</h1>
      <input placeholder="Revenu imposable (€)" value={revenu} onChange={e => setRevenu(e.target.value)} /><br/>
      <input placeholder="TMI (%)" value={tmi} onChange={e => setTmi(e.target.value)} /><br/>
      <button onClick={calculer}>Calculer</button>
      {resultat && <p>💰 Réduction d’impôt estimée sur 9 ans : {resultat} €</p>}
    </div>
  );
}