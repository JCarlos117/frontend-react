import React, { useState } from 'react';

const opciones = [
  'resolver_problemas', 'ayudar_personas', 'creatividad',
  'matematicas', 'biologia', 'logica', 'empatia',
  'arte', 'comunicacion', 'programacion',
  'liderazgo', 'trabajo_en_equipo', 'diseno', 'tecnologia'
];

export default function Formulario({ onDiagnostico, onLimpiar }) {
  const [seleccionados, setSeleccionados] = useState([]);

  const toggle = (valor) => {
    setSeleccionados(prev =>
      prev.includes(valor) ? prev.filter(v => v !== valor) : [...prev, valor]
    );
  };

  const enviar = async (e) => {
    e.preventDefault();
    const res = await fetch('http://127.0.0.1:5000/recomendar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ respuestas: seleccionados })
    });
    const data = await res.json();
    onDiagnostico(data);
  };

  const limpiar = () => {
    setSeleccionados([]);
    onLimpiar();
  };

  return (
    <form onSubmit={enviar} className="bg-white p-4 rounded shadow">
      <div className="row">
        {opciones.map((opt, i) => (
          <div className="col-md-6" key={i}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id={opt}
                checked={seleccionados.includes(opt)}
                onChange={() => toggle(opt)}
              />
              <label className="form-check-label text-capitalize" htmlFor={opt}>
                {opt.replace(/_/g, ' ')}
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 d-flex gap-3">
        <button className="btn btn-primary" type="submit">Consultar</button>
        <button className="btn btn-warning" type="button" onClick={limpiar}>🧹 Limpiar Consulta</button>
      </div>
    </form>
  );
}
