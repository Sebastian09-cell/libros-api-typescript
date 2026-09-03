import { Libro } from "../models/libro_model";

let libros: Libro[] = [
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

export function obtenerLibro_repository() {
  return libros;
}

export function buscarlibroPorID_repository(id: number) {
  const libro = libros.find((l) => l.id === id);
  return libro;
}
export function crearLibro_repository(datos: {
  titulo: string;
  autor: string;
  anio: number;
}) {
  const { anio, autor, titulo } = datos;
  const nuevolibro = { anio, autor, titulo, id: Date.now(), leido: false };

  libros.push(nuevolibro);
  return nuevolibro;
}

export function actualizarLibros_repository(
  id: number,
  data: {
    titulo?: string;
    autor?: string;
    anio?: number;
    leido?: boolean;
  },
) {
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

export function eliminarLibro_repository(id: number) {
  const libro = buscarlibroPorID_repository(id);
  if (!libro) {
    return false;
  }
  libros = libros.filter((l) => l.id !== id);
  return true;
}
