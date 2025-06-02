import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function Resultado({ data }) {
  const mejores = data.filter(d => d.porcentaje >= 60);

  return (
   <div className="mt-5">
  <h4 className="mb-3">Gráfico de Afinidad</h4>
  <Bar
    data={{
      labels: data.map(d => d.carrera),
      datasets: [{
        label: 'Afinidad %',
        data: data.map(d => d.porcentaje),
        backgroundColor: data.map(d =>
          d.porcentaje === 100 ? 'rgba(220,53,69,0.9)' :
          d.porcentaje >= 60 ? 'rgba(255,193,7,0.9)' :
          'rgba(0,123,255,0.8)'
        )
      }]
    }}
    options={{
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: { display: true, text: 'Porcentaje' }
        },
        x: {
          title: { display: true, text: 'Carreras' }
        }
      }
    }}
  />
</div>

  );
}
