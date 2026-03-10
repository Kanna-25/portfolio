import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSkills = async (req: Request, res: Response) => {
  const skills = await prisma.skill.findMany();
  res.json(skills);
};
