import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createContact = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  const contact = await prisma.contact.create({
    data: {
      name,
      email,
      message,
    },
  });

  res.status(201).json(contact);
};
