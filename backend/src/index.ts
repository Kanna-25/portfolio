import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// サーバー確認用
app.get("/", (req, res) => {
  res.send("API server running");
});

// DB取得API
app.get("/profiles", async (req, res) => {
  const profiles = await prisma.profile.findMany();
  res.json(profiles);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
