import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createContact = async (req: Request, res: Response) => {
  // 1. リクエストボディから送信内容を抽出
  const { name, email, message } = req.body;

  // 2. データベース（Contactテーブル）への保存実行
  const contact = await prisma.contact.create({
    data: {
      name,
      email,
      message,
    },
  });

  // 3. 正常終了：保存されたデータをクライアントに返す
  res.status(201).json(contact);
};
