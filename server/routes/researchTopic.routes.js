import express from "express";
import { getTopics, createTopic, getTopic, updateTopic, deleteTopic} from "../controllers/researchTopic.js";

const router = express.Router();

router.get('/', getTopics);
router.post('/', createTopic);
router.get('/:id', getTopic);
router.patch('/:id', updateTopic);
router.delete('/:id', deleteTopic);

export default router;