"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerLibro_repository = obtenerLibro_repository;
exports.buscarlibroPorID_repository = buscarlibroPorID_repository;
exports.crearLibro_repository = crearLibro_repository;
exports.actualizarLibros_repository = actualizarLibros_repository;
exports.eliminarLibro_repository = eliminarLibro_repository;
let libros = [
    {
        id: 1,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        anio: 1967,
        leido: true,
    },
    { id: 2, titulo: "1984", autor: "George Orwell", anio: 1949, leido: false },
    {
        id: 3,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        anio: 1943,
        leido: true,
    },
    {
        id: 4,
        titulo: "Rayuela",
        autor: "Julio Cortázar",
        anio: 1963,
        leido: false,
    },
    {
        id: 5,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        anio: 1953,
        leido: false,
    },
];
function obtenerLibro_repository() {
    return libros;
}
function buscarlibroPorID_repository(id) {
    const libro = libros.find((l) => l.id === id);
    return libro;
}
function crearLibro_repository(datos) {
    const { anio, autor, titulo } = datos;
    const nuevolibro = { anio, autor, titulo, id: Date.now(), leido: false };
    libros.push(nuevolibro);
    return nuevolibro;
}
function actualizarLibros_repository(id, data) {
    const libro = buscarlibroPorID_repository(id);
    if (libro === undefined) {
        return undefined;
    }
    libro.titulo = data.titulo ?? libro.titulo;
    libro.anio = data.anio ?? libro.anio;
    libro.autor = data.autor ?? libro.autor;
    libro.leido = data.leido ?? libro.leido;
    return libro;
}
function eliminarLibro_repository(id) {
    const libro = buscarlibroPorID_repository(id);
    if (!libro) {
        return false;
    }
    libros = libros.filter((l) => l.id !== id);
    return true;
}
//# sourceMappingURL=libros_repository.js.map