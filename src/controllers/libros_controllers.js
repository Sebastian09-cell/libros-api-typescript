"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerLibros = obtenerLibros;
exports.obtenerLibroPorId = obtenerLibroPorId;
exports.nuevoLibro = nuevoLibro;
exports.actualizarLibros = actualizarLibros;
exports.eliminarlibro = eliminarlibro;
const libros_repository_1 = require("../data/libros_repository");
function obtenerLibros(req, res) {
    const libros = (0, libros_repository_1.obtenerLibro_repository)();
    res.status(200).json(libros);
}
function obtenerLibroPorId(req, res) {
    const id = req.params.id;
    const libro = (0, libros_repository_1.buscarlibroPorID_repository)(Number(id));
    if (!libro) {
        return res.status(404).json({ error: "Error el libro no encontrado" });
    }
    res.status(200).json(libro);
}
function nuevoLibro(req, res) {
    const { anio, titulo, autor } = req.body;
    if (!titulo || !autor) {
        return res.status(400).json({ error: "faltan datos" });
    }
    const nuevolibro = (0, libros_repository_1.crearLibro_repository)({ anio, autor, titulo });
    res.status(201).json(nuevolibro);
}
function actualizarLibros(req, res) {
    const id = req.params.id;
    const { autor, anio, leido, titulo } = req.body;
    const libroactualizado = (0, libros_repository_1.actualizarLibros_repository)(Number(id), {
        anio,
        autor,
        leido,
        titulo,
    });
    if (!libroactualizado) {
        return res.status(404).json({ error: "libro inexistente" });
    }
    return res.status(200).json(libroactualizado);
}
function eliminarlibro(req, res) {
    const id = req.params.id;
    const eliminado = (0, libros_repository_1.eliminarLibro_repository)(Number(id));
    if (!eliminado) {
        return res.status(404).json({ error: "libro inexistente" });
    }
    res.status(200).json({ mensaje: "Libro eliminado" });
}
//# sourceMappingURL=libros_controllers.js.map