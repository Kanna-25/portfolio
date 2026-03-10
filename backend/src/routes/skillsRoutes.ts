import express from "express";
import { getSkills } from "../controllers/skillsController";

const router = express.Router();

router.get("/", getSkills);

export default router;
