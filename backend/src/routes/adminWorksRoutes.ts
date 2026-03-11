import express from "express";
import { createWork } from "../controllers/adminWorksController";

const router = express.Router();

router.post("/", createWork);

export default router;
