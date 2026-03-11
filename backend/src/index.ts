import express from "express";
import cors from "cors";

import profileRoutes from "./routes/profileRoutes";
import worksRoutes from "./routes/worksRoutes";
import skillsRoutes from "./routes/skillsRoutes";
import contactRoutes from "./routes/contactRoutes";
import adminWorksRoutes from "./routes/adminWorksRoutes";

const app = express();

app.use(cors()); // フロントからのアクセスを許可
app.use(express.json()); // JSONを解析できるようにする
app.use("/api/admin/works", adminWorksRoutes);

// ルート確認用
app.get("/", (req, res) => {
  res.send("API server running");
});

// routes接続
app.use("/api/profile", profileRoutes);
app.use("/api/works", worksRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/contact", contactRoutes);

// エラーハンドリング
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).json({
    message: "Internal Server Error",
  });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
