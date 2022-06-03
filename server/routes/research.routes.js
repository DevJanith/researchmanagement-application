import express from "express";
import { getResearch, getResearches, createResearch, updateResearch, deleteResearch } from "../controllers/research.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.get('/', getResearches);
router.post('/', createResearch);
router.get('/:id', getResearch);
router.patch('/:id', updateResearch);
router.delete('/:id', deleteResearch);


export default router;