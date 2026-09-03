import { Libro } from "../models/libro_model";
export declare function obtenerLibro_repository(): Libro[];
export declare function buscarlibroPorID_repository(id: number): Libro | undefined;
export declare function crearLibro_repository(datos: {
    titulo: string;
    autor: string;
    anio: number;
}): {
    anio: number;
    autor: string;
    titulo: string;
    id: number;
    leido: boolean;
};
export declare function actualizarLibros_repository(id: number, data: {
    titulo?: string;
    autor?: string;
    anio?: number;
    leido?: boolean;
}): Libro | undefined;
export declare function eliminarLibro_repository(id: number): boolean;
//# sourceMappingURL=libros_repository.d.ts.map