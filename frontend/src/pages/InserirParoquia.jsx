// InserirParoquia.jsx
import React, { useState } from 'react';
import '../styles/Backoffice.css';

export default function InserirParoquia() {
  const [form, setForm] = useState({
    nome: '',
    nomeIgreja: '',
    endereco: '',
    lat: '',
    lng: '',
    telefone: '',
    horarioSecretaria: '',
    email: '',
    site: '',
    imagem: '',
    facebook: '',
    instagram: '',
    whatsapp: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend com fetch ou axios
    console.log('Paróquia enviada:', form);
  };

  return (
    <div className="backoffice-page">
      <h2>Inserir Paróquia</h2>
      <form className="backoffice-form" onSubmit={handleSubmit}>
        <label>
          Nome da Paróquia
          <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
        </label>

        <label>
          Nome da Igreja
          <input type="text" name="nomeIgreja" value={form.nomeIgreja} onChange={handleChange} required />
        </label>

        <label>
          Endereço
          <input type="text" name="endereco" value={form.endereco} onChange={handleChange} required />
        </label>

        <label>
          Latitude
          <input type="number" step="any" name="lat" value={form.lat} onChange={handleChange} required />
        </label>

        <label>
          Longitude
          <input type="number" step="any" name="lng" value={form.lng} onChange={handleChange} required />
        </label>

        <label>
          Telefone de Contato
          <input type="text" name="telefone" value={form.telefone} onChange={handleChange} required />
        </label>

        <label>
          Horário da Secretaria
          <input type="text" name="horarioSecretaria" value={form.horarioSecretaria} onChange={handleChange} required />
        </label>

        <label>
          E-mail
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </label>

        <label>
          Site
          <input type="url" name="site" value={form.site} onChange={handleChange} />
        </label>

        <label>
          Link da Imagem
          <input type="url" name="imagem" value={form.imagem} onChange={handleChange} />
        </label>

        <label>
          Facebook
          <input type="url" name="facebook" value={form.facebook} onChange={handleChange} />
        </label>

        <label>
          Instagram
          <input type="url" name="instagram" value={form.instagram} onChange={handleChange} />
        </label>

        <label>
          WhatsApp
          <input type="text" name="whatsapp" value={form.whatsapp} onChange={handleChange} />
        </label>

        <button type="submit">Salvar Paróquia</button>
      </form>
    </div>
  );
}
