import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createWork = async (req: Request, res: Response) => {
  const { title, description, url } = req.body;

  const work = await prisma.work.create({
    data: {
      title,
      description,
      githubUrl: url,
    },
  });

  res.status(201).json(work);
};
