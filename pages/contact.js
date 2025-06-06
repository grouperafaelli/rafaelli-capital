import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("https://formspree.io/f/xpzvryna", form);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <h1 className="text-2xl font-bold mb-6">Contact & Devis</h1>
      {sent ? <p className="text-green-700">✅ Message envoyé.</p> : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input name="nom" placeholder="Nom" className="border px-4 py-2 w-full" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" className="border px-4 py-2 w-full" onChange={handleChange} required />
          <textarea name="message" placeholder="Votre message" className="border px-4 py-2 w-full" onChange={handleChange} required />
          <button type="submit" className="bg-black text-white px-6 py-2 rounded">Envoyer</button>
        </form>
      )}
    </div>
  );
}