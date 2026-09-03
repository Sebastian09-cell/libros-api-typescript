import express from "express";
import cors from "cors";
import librosRoutes from "./routes/libros_routes";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/libros", librosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
