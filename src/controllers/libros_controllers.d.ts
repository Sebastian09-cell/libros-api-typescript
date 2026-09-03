import { Request, Response } from "express";
export declare function obtenerLibros(req: Request, res: Response): void;
export declare function obtenerLibroPorId(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
export declare function nuevoLibro(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
export declare function actualizarLibros(req: Request, res: Response): Response<any, Record<string, any>>;
export declare function eliminarlibro(req: Request, res: Response): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=libros_controllers.d.ts.map