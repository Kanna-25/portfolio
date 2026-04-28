import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ---------------------------
// お問い合わせ送信（ユーザー）
// ---------------------------
export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to create contact" });
  }
};

// ---------------------------
// 一覧取得（管理者）
// ---------------------------
export const getContacts = async (_req: Request, res: Response) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};

// ---------------------------
// 詳細取得（管理者）
// ---------------------------
export const getContactById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const contact = await prisma.contact.findUnique({
      where: { id },
    });

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contact" });
  }
};

// ---------------------------
// 削除（管理者）
// ---------------------------
export const deleteContact = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await prisma.contact.delete({
      where: { id },
    });

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
};
