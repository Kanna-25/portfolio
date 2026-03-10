import express from "express";

import profileRoutes from "./routes/profileRoutes";
import worksRoutes from "./routes/worksRoutes";
import skillsRoutes from "./routes/skillsRoutes";
import contactRoutes from "./routes/contactRoutes";

const app = express();

app.use(express.json());

// ルート確認用
app.get("/", (req, res) => {
  res.send("API server running");
});

// routes接続
app.use("/api/profile", profileRoutes);
app.use("/api/works", worksRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/contact", contactRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
