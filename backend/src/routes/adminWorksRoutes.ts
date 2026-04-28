import express from "express";
import { createWork } from "../controllers/adminWorksController";

import { updateWork, deleteWork } from "../controllers/worksController";

const router = express.Router();

// 新規作成
router.post("/", createWork);

// 更新
router.patch("/:id", updateWork);

// 削除
router.delete("/:id", deleteWork);

export default router;
