import express from "express";
import { getMarkingSchemaDescriptions, createMarkingSchemaDescription, getMarkingSchemaDescription, updateMarkingSchemaDescription, deleteMarkingSchemaDescription} from "../controllers/markingSchemaDescription.js";

const router = express.Router();


router.get('/', getMarkingSchemaDescriptions);
router.post('/', createMarkingSchemaDescription);
router.get('/:id', getMarkingSchemaDescription);
router.patch('/:id', updateMarkingSchemaDescription);
router.delete('/:id', deleteMarkingSchemaDescription);




export default router;