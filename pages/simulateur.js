import { useState } from 'react';

export default function Simulateur() {
  const [revenu, setRevenu] = useState('');
  const [resultat, setResultat] = useState(null);

  const calculer = () => {
    const effEpargne = (parseFloat(revenu || 0) * 0.25).toFixed(2);
    setResultat(effEpargne);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Simulateur de capacité d'investissement</h1>
      <input
        type="number"
        placeholder="Revenu mensuel (€)"
        value={revenu}
        onChange={(e) => setRevenu(e.target.value)}
      />
      <button onClick={calculer}>Calculer</button>
      {resultat && <p>Effort d’épargne estimé : {resultat} €/mois</p>}
    </div>
  );
}