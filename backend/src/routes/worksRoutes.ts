import express from "express";
import {
  getWorks,
  updateWork,
  deleteWork,
} from "../controllers/worksController";

const router = express.Router();

// 一覧
router.get("/", getWorks);

export default router;
