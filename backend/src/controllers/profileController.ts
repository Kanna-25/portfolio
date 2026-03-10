import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProfile = async (req: Request, res: Response) => {
  const profile = await prisma.profile.findFirst();
  res.json(profile);
};
