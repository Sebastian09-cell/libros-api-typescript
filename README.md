# 📚 Libros API

API REST para la gestión de libros (operaciones CRUD), construida con **Node.js**, **Express** y **TypeScript**. Proyecto pensado como pieza de portafolio, con una estructura de carpetas limpia y escalable, y datos almacenados en memoria (fácilmente sustituible por una base de datos real).

## 🚀 Tecnologías

- Node.js
- Express
- TypeScript
- CORS

## 📁 Estructura del proyecto

```
libros-api/
├── src/
│   ├── controllers/
│   │   └── libros.controller.ts   # Lógica de las peticiones HTTP
│   ├── data/
│   │   └── libros.repository.ts   # Acceso a datos (en memoria)
│   ├── models/
│   │   └── libro.model.ts         # Interfaces y tipos (Libro, DTOs)
│   ├── routes/
│   │   └── libros.routes.ts       # Definición de rutas
│   ├── app.ts                     # Configuración de Express (middlewares, rutas)
│   └── server.ts                  # Punto de entrada (arranca el servidor)
├── package.json
├── tsconfig.json
└── README.md
```

**¿Por qué esta separación?**

- **`models/`**: define la forma de los datos (`Libro`) y los contratos de entrada (`NuevoLibroDTO`, `ActualizarLibroDTO`), sin lógica.
- **`data/`**: encapsula el almacenamiento. Hoy es un arreglo en memoria; mañana podría ser una consulta a PostgreSQL o MongoDB sin que el resto del código cambie.
- **`controllers/`**: traduce peticiones/respuestas HTTP (`req`/`res`) a llamadas al repositorio, validando entradas y códigos de estado.
- **`routes/`**: solo mapea métodos HTTP + rutas a funciones del controlador.
- **`app.ts` / `server.ts`**: separan la configuración de la app (útil para tests) del acto de levantar el servidor.

## ⚙️ Instalación y ejecución local

### Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm (incluido con Node.js)

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/libros-api.git
   cd libros-api
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Levantar el servidor en modo desarrollo** (con recarga automática)
   ```bash
   npm run dev
   ```

4. **(Opcional) Compilar y ejecutar en modo producción**
   ```bash
   npm run build
   npm start
   ```

5. El servidor quedará disponible en:
   ```
   http://localhost:3000
   ```

## 📌 Endpoints disponibles

| Método   | Ruta          | Descripción                                  |
|----------|---------------|-----------------------------------------------|
| `GET`    | `/libros`     | Obtiene el listado completo de libros          |
| `GET`    | `/libros/:id` | Obtiene un libro específico por su `id`        |
| `POST`   | `/libros`     | Crea un nuevo libro                            |
| `PUT`    | `/libros/:id` | Actualiza (parcial o totalmente) un libro      |
| `DELETE` | `/libros/:id` | Elimina un libro por su `id`                   |

## 📦 Ejemplos de uso

### `GET /libros`

**Respuesta `200 OK`**
```json
[
  {
    "id": 1,
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "anio": 1967,
    "leido": true
  },
  {
    "id": 2,
    "titulo": "1984",
    "autor": "George Orwell",
    "anio": 1949,
    "leido": false
  }
]
```

### `GET /libros/:id`

**Respuesta `200 OK`**
```json
{
  "id": 1,
  "titulo": "Cien años de soledad",
  "autor": "Gabriel García Márquez",
  "anio": 1967,
  "leido": true
}
```

**Respuesta `404 Not Found`** (id inexistente)
```json
{
  "error": "Libro no encontrado"
}
```

### `POST /libros`

**Body de la petición**
```json
{
  "titulo": "El principito",
  "autor": "Antoine de Saint-Exupéry",
  "anio": 1943
}
```

**Respuesta `201 Created`**
```json
{
  "id": 1717000000000,
  "titulo": "El principito",
  "autor": "Antoine de Saint-Exupéry",
  "anio": 1943,
  "leido": false
}
```

**Respuesta `400 Bad Request`** (faltan campos obligatorios)
```json
{
  "error": "Los campos titulo, autor y anio son obligatorios"
}
```

### `PUT /libros/:id`

**Body de la petición** (actualización parcial: solo se envía lo que cambia)
```json
{
  "leido": true
}
```

**Respuesta `200 OK`**
```json
{
  "id": 2,
  "titulo": "1984",
  "autor": "George Orwell",
  "anio": 1949,
  "leido": true
}
```

**Respuesta `404 Not Found`**
```json
{
  "error": "Libro no encontrado"
}
```

### `DELETE /libros/:id`

**Respuesta `200 OK`**
```json
{
  "mensaje": "Libro eliminado correctamente"
}
```

**Respuesta `404 Not Found`**
```json
{
  "error": "Libro no encontrado"
}
```

## 🧠 Notas de diseño

- Los datos se almacenan **en memoria**, por lo que se reinician cada vez que el servidor se reinicia. Es una decisión intencional para mantener el proyecto simple y enfocado en la API; migrar a una base de datos solo implicaría reemplazar el contenido de `src/data/libros.repository.ts`.
- Las validaciones de entrada son básicas (campos obligatorios, `id` numérico) y están pensadas como punto de partida; en un proyecto productivo se recomendaría una librería de validación de esquemas como `zod` o `joi`.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.