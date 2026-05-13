import express from "express";
import { updateProfile } from "../controllers/profileController";

const router = express.Router();

router.put("/", updateProfile);

export default router;
