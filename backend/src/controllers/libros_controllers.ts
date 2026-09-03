import { Request, Response } from "express";
import {
  obtenerLibro_repository,
  buscarlibroPorID_repository,
  crearLibro_repository,
  actualizarLibros_repository,
  eliminarLibro_repository,
} from "../data/libros_repository";

export function obtenerLibros(req: Request, res: Response) {
  const libros = obtenerLibro_repository();
  res.status(200).json(libros);
}

export function obtenerLibroPorId(req: Request, res: Response) {
  const id = req.params.id;
  const libro = buscarlibroPorID_repository(Number(id));
  if (!libro) {
    return res.status(404).json({ error: "Error el libro no encontrado" });
  }
  res.status(200).json(libro);
}

export function nuevoLibro(req: Request, res: Response) {
  const { anio, titulo, autor } = req.body;
  if (!titulo || !autor) {
    return res.status(400).json({ error: "faltan datos" });
  }
  const nuevolibro = crearLibro_repository({ anio, autor, titulo });
  res.status(201).json(nuevolibro);
}

export function actualizarLibros(req: Request, res: Response) {
  const id = req.params.id;
  const { autor, anio, leido, titulo } = req.body;

  const libroactualizado = actualizarLibros_repository(Number(id), {
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

export function eliminarlibro(req: Request, res: Response) {
  const id = req.params.id;
  const eliminado = eliminarLibro_repository(Number(id));
  if (!eliminado) {
    return res.status(404).json({ error: "libro inexistente" });
  }

  res.status(200).json({ mensaje: "Libro eliminado" });
}
