// InserirEvento.jsx
import React, { useState } from 'react';
import '../styles/Backoffice.css';

// Exemplo de paróquias para seleção
const paroquiasExemplo = [
  { id: 1, nome: 'Paróquia de São João' },
  { id: 2, nome: 'Paróquia de Nossa Senhora da Luz' },
];

export default function InserirEvento() {
  const [form, setForm] = useState({
    paroquiaId: '',
    titulo: '',
    data: '',
    hora: '',
    descricao: '',
    imagem: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Evento enviado:', form);
    // Enviar para o backend aqui
  };

  return (
    <div className="backoffice-page">
      <h2>Inserir Evento</h2>
      <form className="backoffice-form" onSubmit={handleSubmit}>
        <label>
          Paróquia
          <select name="paroquiaId" value={form.paroquiaId} onChange={handleChange} required>
            <option value="">Selecione uma paróquia</option>
            {paroquiasExemplo.map(p => (
              <option key={p.id} value={p.id}>{p.nome}</option>
            ))}
          </select>
        </label>

        <label>
          Título do Evento
          <input type="text" name="titulo" value={form.titulo} onChange={handleChange} required />
        </label>

        <label>
          Data
          <input type="date" name="data" value={form.data} onChange={handleChange} required />
        </label>

        <label>
          Hora
          <input type="time" name="hora" value={form.hora} onChange={handleChange} required />
        </label>

        <label>
          Descrição
          <textarea name="descricao" value={form.descricao} onChange={handleChange} rows={4} placeholder="Detalhes sobre o evento..." />
        </label>

        <label>
          Link da Imagem (opcional)
          <input type="url" name="imagem" value={form.imagem} onChange={handleChange} />
        </label>

        <button type="submit">Salvar Evento</button>
      </form>
    </div>
  );
}
