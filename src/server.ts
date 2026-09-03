import express from "express";
import cors from "cors";
import librosRoutes from "./routes/libros_routes";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/libros", librosRoutes);

app.listen(3000, () => console.log("Servidor en puerto 3000"));
