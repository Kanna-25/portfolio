import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

// Prismaクライアントの初期化（DB接続用）
const prisma = new PrismaClient();

export const createWork = async (req: Request, res: Response) => {
  // 1. リクエストボディから必要なデータを取り出す
  const { title, description, githubUrl } = req.body;

  // 2. データベースに保存
  const work = await prisma.work.create({
    data: {
      title,
      description,
      githubUrl,
    },
  });

  // 3. 成功レスポンスを返す（HTTP 201: Created）
  res.status(201).json(work);
};
