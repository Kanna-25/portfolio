import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await prisma.skill.findMany();
    res.json(skills);
  } catch (error: any) {
    // 【重要】これでバックエンドのターミナルに本当の原因が表示されます
    console.error("===== SKILLS FETCH ERROR =====");
    console.error(error);
    console.error("==============================");

    res.status(500).json({
      message: "Internal Server Error",
      detail: error.message, // 一時的にフロント側でも詳細が見えるようにします
    });
  }
};
