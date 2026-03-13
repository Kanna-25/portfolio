import express from "express";

// 管理画面用の制作実績コントローラーをインポート
import { createWork } from "../controllers/adminWorksController";

const router = express.Router();

// POST / - 新規制作実績の登録
router.post("/", createWork);

/* * 将来追加予定のルートのメモ:
 * router.get("/", getWorks);        // 一覧取得
 * router.put("/:id", updateWork);   // 更新
 * router.delete("/:id", deleteWork); // 削除
 */
export default router;
