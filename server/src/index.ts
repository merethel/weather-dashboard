import "dotenv/config";
import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weather.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
