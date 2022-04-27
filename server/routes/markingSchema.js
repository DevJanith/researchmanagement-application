import express from "express";
import { getMarkingSchemas, createMarkingSchema, getMarkingSchema, updateMarkingSchema, deleteMarkingSchema} from "../controllers/markingSchema.js";

const router = express.Router();


router.get('/', getMarkingSchemas);
router.post('/', createMarkingSchema);
router.get('/:id', getMarkingSchema);
router.patch('/:id', updateMarkingSchema);
router.delete('/:id', deleteMarkingSchema);




export default router;