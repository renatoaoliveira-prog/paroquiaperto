// InserirHorario.jsx
import React, { useState } from 'react';
import '../styles/Backoffice.css';

// Exemplo de paróquias para selecionar (substituir por dados reais do backend)
const paroquiasExemplo = [
  { id: 1, nome: 'Paróquia de São João' },
  { id: 2, nome: 'Paróquia de Nossa Senhora da Luz' },
];

export default function InserirHorario() {
  const [form, setForm] = useState({
    paroquiaId: '',
    diaSemana: '',
    hora: '',
    tipo: 'Missa',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Horário enviado:', form);
    // Enviar para backend
  };

  return (
    <div className="backoffice-page">
      <h2>Inserir Horário de Missa</h2>
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
          Dia da Semana
          <select name="diaSemana" value={form.diaSemana} onChange={handleChange} required>
            <option value="">Selecione um dia</option>
            <option value="Domingo">Domingo</option>
            <option value="Segunda">Segunda</option>
            <option value="Terça">Terça</option>
            <option value="Quarta">Quarta</option>
            <option value="Quinta">Quinta</option>
            <option value="Sexta">Sexta</option>
            <option value="Sábado">Sábado</option>
          </select>
        </label>

        <label>
          Hora
          <input type="time" name="hora" value={form.hora} onChange={handleChange} required />
        </label>

        <label>
          Tipo
          <select name="tipo" value={form.tipo} onChange={handleChange} required>
            <option value="Missa">Missa</option>
            <option value="Confissão">Confissão</option>
            <option value="Adoração">Adoração</option>
            <option value="Outros">Outros</option>
          </select>
        </label>

        <button type="submit">Salvar Horário</button>
      </form>
    </div>
  );
}
