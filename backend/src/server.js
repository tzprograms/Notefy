import cors from "cors";
import "dotenv/config";
import express from "express";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// ----------------- Middleware -----------------

// CORS
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );
}

app.use(express.json());
app.use(rateLimiter);

// ----------------- Routes -----------------

// Auth first, then notes
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

// ----------------- Serve Frontend in Production -----------------

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// ----------------- Start Server -----------------

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
  });
});
