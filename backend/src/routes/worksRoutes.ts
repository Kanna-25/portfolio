import express from "express";
import { getWorks } from "../controllers/worksController";

const router = express.Router();

router.get("/", getWorks);

export default router;
