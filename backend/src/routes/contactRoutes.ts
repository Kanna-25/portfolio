import express from "express";
import {
  createContact,
  getContacts,
  getContactById,
  deleteContact,
} from "../controllers/contactController";

const router = express.Router();

// ユーザー用
router.post("/contacts", createContact);

// 管理者用
router.get("/admin/contacts", getContacts);
router.get("/admin/contacts/:id", getContactById);
router.delete("/admin/contacts/:id", deleteContact);

export default router;
