import React from 'react';

export default function ModalAlerta({ onClose }) {
  return (
    <div className="modal-alerta">
      <h3>🚨 Atención Vocacional</h3>
      <p>Se detectaron múltiples carreras con afinidad total (100%).</p>
      <p><strong>Te recomendamos consultar con un orientador académico para tomar una decisión informada.</strong></p>
      <button className="btn btn-danger mt-3" onClick={onClose}>Cerrar</button>
    </div>
  );
}
