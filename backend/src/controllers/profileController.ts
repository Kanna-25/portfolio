import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProfile = async (req: Request, res: Response) => {
  const profile = await prisma.profile.findFirst();
  res.json(profile);
};

export const updateProfile = async (req: Request, res: Response) => {
  const { name, bio } = req.body;

  try {
    const profile = await prisma.profile.findFirst();

    if (!profile) {
      return res.status(404).json({ message: "プロフィールが存在しません" });
    }

    const updated = await prisma.profile.update({
      where: { id: profile.id },
      data: {
        name,
        bio,
      },
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "更新失敗" });
  }
};
