import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', projet: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("https://formspree.io/f/xpzvryna", form);
    setSent(true);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Demander un accompagnement</h1>
      {sent ? <p>✅ Message envoyé. Nous reviendrons vers vous rapidement.</p> : (
        <form onSubmit={handleSubmit}>
          <input name="nom" placeholder="Nom complet" onChange={handleChange} required /><br/>
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br/>
          <textarea name="projet" placeholder="Votre projet" onChange={handleChange} required /><br/>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
}