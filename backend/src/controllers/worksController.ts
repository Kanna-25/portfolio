import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getWorks = async (req: Request, res: Response) => {
  const works = await prisma.work.findMany();
  res.json(works);
};

export const updateWork = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, githubUrl } = req.body;

  try {
    const updated = await prisma.work.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        githubUrl,
      },
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "更新失敗" });
  }
};

export const deleteWork = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.work.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "削除成功" });
  } catch (error) {
    res.status(500).json({ error: "削除失敗" });
  }
};
