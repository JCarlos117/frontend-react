from flask import Flask, request, jsonify
from flask_cors import CORS
from pyswip import Prolog

app = Flask(__name__)
CORS(app)

prolog = Prolog()
prolog.consult("orientacion.pl")

CARRERAS = [
    'ingenieria', 'psicologia', 'medicina',
    'arquitectura', 'disenio_grafico',
    'administracion', 'educacion', 'informatica'
]

@app.route('/recomendar', methods=['POST'])
def recomendar():
    datos = request.json
    respuestas = datos.get('respuestas', [])

    if not respuestas:
        return jsonify({"error": "No se recibieron respuestas."}), 400

    respuestas_str = '[' + ','.join(respuestas) + ']'
    resultados = []

    for carrera in CARRERAS:
        consulta = f"coincidencia({respuestas_str}, {carrera}, Porcentaje)"
        for r in prolog.query(consulta):
            resultados.append({
                'carrera': carrera.replace('_', ' ').capitalize(),
                'porcentaje': round(r['Porcentaje'], 2)
            })

    resultados.sort(key=lambda x: x['porcentaje'], reverse=True)
    return jsonify(resultados)

if __name__ == '__main__':
    app.run(debug=True)
