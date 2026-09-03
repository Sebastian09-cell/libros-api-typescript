import { Router } from "express";
import {
  actualizarLibros,
  eliminarlibro,
  nuevoLibro,
  obtenerLibroPorId,
  obtenerLibros,
} from "../controllers/libros_controllers";

const router = Router();

router.get("/", obtenerLibros);
router.get("/:id", obtenerLibroPorId);
router.post("/", nuevoLibro);
router.put("/:id", actualizarLibros);
router.delete("/:id", eliminarlibro);

export default router;
