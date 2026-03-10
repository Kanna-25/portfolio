import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getWorks = async (req: Request, res: Response) => {
  const works = await prisma.work.findMany();
  res.json(works);
};
