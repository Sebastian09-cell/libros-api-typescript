"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const libros_controllers_1 = require("../controllers/libros_controllers");
const router = (0, express_1.Router)();
router.get("/", libros_controllers_1.obtenerLibros);
router.get("/:id", libros_controllers_1.obtenerLibroPorId);
router.post("/", libros_controllers_1.nuevoLibro);
router.put("/:id", libros_controllers_1.actualizarLibros);
router.delete("/:id", libros_controllers_1.eliminarlibro);
exports.default = router;
//# sourceMappingURL=libros_routes.js.map