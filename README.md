# 🎓 Sistema de Recomendación de Carreras Universitarias

Este sistema experto sugiere carreras universitarias personalizadas según tus intereses, habilidades y valores.  
Utiliza Prolog como motor lógico, un backend en Flask y un frontend en React.

---

## 🧠 Tecnologías Utilizadas

- 🧠 **Prolog** — Lógica y reglas de inferencia
- 🐍 **Python + Flask** — API REST para comunicarse con Prolog
- ⚛️ **React** — Interfaz de usuario interactiva
- 📊 **Chart.js** — Visualización de resultados
- 🎨 **Bootstrap** — Diseño responsive

---

## 📁 Estructura del Proyecto

---

## ⚙️ Requisitos

- Python 3.x
- Node.js (v14+)
- pip
- npm

---

## 🔧 Instalación y Ejecución

### 1️⃣ Backend (Flask + Prolog)

cd backend

# Crear entorno virtual (opcional)

python -m venv venv
.\venv\Scripts\Activate.ps1 # PowerShell en Windows

# source venv/bin/activate # Linux/macOS

# Instalar dependencias

pip install flask flask-cors pyswip

# Ejecutar el servidor

python app.py
➡️ El backend se iniciará por defecto en: http://127.0.0.1:5000

2️⃣ Frontend (React)
bash
Copiar
Editar
cd frontend-react

# Instalar dependencias

npm install

# Iniciar la app en modo desarrollo

npm start

El navegador se abrirá en: http://localhost:3000

🔁 Comunicación entre Frontend y Backend
El frontend envía un POST a:

POST http://127.0.0.1:5000/recomendar
Content-Type: application/json
{
"respuestas": ["creatividad", "comunicacion", "tecnologia"]
}
El backend responde con:

json

[
{ "carrera": "Informatica", "porcentaje": 75.0 },
{ "carrera": "Disenio grafico", "porcentaje": 60.0 },
...
]
