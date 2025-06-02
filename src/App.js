import React, { useState } from 'react';
import './App.css';
import Formulario from './Components/Formulario';
import Resultado from './Components/Resultado';
import ModalAlerta from './Components/ModalAlerta';

function App() {
  const [resultados, setResultados] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleDiagnostico = (data) => {
    setResultados(data);
    const carreras100 = data.filter(r => r.porcentaje === 100);
    if (carreras100.length > 1) {
      setMostrarModal(true);
      setTimeout(() => setMostrarModal(false), 3000);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Orientador Vocacional</h1>
      <Formulario onDiagnostico={handleDiagnostico} onLimpiar={() => setResultados([])} />
      {mostrarModal && <ModalAlerta onClose={() => setMostrarModal(false)} />}
      {resultados.length > 0 && <Resultado data={resultados} />}
    </div>
  );
}

export default App;
