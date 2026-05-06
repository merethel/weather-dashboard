import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/weather", (_req, res) => {
  res.json({
    city: "Aarhus",
    temperature: 12,
    condition: "Cloudy",
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
