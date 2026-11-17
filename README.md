# Sistema Inteligente de Moderación de Comentarios

## Descripción

Aplicación web desarrollada para la clasificación y visualización de comentarios utilizando una arquitectura cliente-servidor.

La solución permite consultar comentarios almacenados en una base de datos MySQL, visualizarlos mediante una interfaz web moderna y clasificarlos en diferentes categorías de moderación.

---

## Funcionalidades

- Consulta de comentarios desde MySQL.
- Visualización de estadísticas generales.
- Búsqueda de comentarios por texto.
- Filtros por categoría.
- Clasificación de comentarios:
  - OK
  - SPAM
  - REVISAR
- Consumo de datos mediante API REST.

---

## Arquitectura

```text
Frontend (HTML, CSS, JavaScript)
               ↓
Backend (Node.js + Express)
               ↓
Base de Datos (MySQL)
```

La aplicación obtiene los datos mediante una API REST desarrollada con Express y conectada a MySQL.

---

## Tecnologías Utilizadas

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express

### Base de Datos

- MySQL

### Dependencias

- mysql2
- cors
- dotenv

---

## Estructura del Proyecto

```text
PRACTICA-ATLANTIC

│
├── index.html
├── styles.css
├── script.js
├── login.html
│
├── backend
│   ├── server.js
│   ├── db.js
│   └── .env
│
├── README.md
└── Bitacora_Desarrollo_Marcela.pdf
```

---

## Base de Datos

La base de datos utilizada es:

```sql
practicatlantic
```

Tabla principal:

```sql
comentarios
```

Campos:

| Campo | Descripción |
|---------|---------|
| id | Identificador del comentario |
| texto | Contenido del comentario |
| reportes | Cantidad de reportes recibidos |
| categoria | Clasificación asignada |
| motivo | Justificación de la clasificación |
| fecha_creacion | Fecha de registro |

---

## Configuración

Crear un archivo `.env` dentro de la carpeta `backend`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=practicatlantic
PORT=3000
```

---

## Instalación

Instalar dependencias:

```bash
npm install
```

---

## Ejecución

Iniciar el servidor:

```bash
node backend/server.js
```

El backend 