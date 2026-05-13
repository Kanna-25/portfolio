import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 一覧取得
export const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await prisma.skill.findMany();
    res.json(skills);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// 追加
export const addSkill = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const newSkill = await prisma.skill.create({
      data: {
        name,
      },
    });

    res.status(201).json(newSkill);
  } catch (error: any) {
    console.error("===== ADD SKILL ERROR =====");
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// 削除
export const deleteSkill = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await prisma.skill.delete({
      where: { id },
    });

    res.json({ message: "削除成功" });
  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};
