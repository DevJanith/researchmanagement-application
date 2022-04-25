import express from "express";
import { getPresentationTemp, getSpecifiedPresentationTemp, createPresentationTemp, updatePresentationTemp, deletePresentationTemp} from "../controllers/PresentationTemplate.js";
 
const router = express.Router();

//API calling
//localhost:5000/PresentationTemp/

router.get('/', getPresentationTemp); //get all Presentation Template
router.get('/:id', getSpecifiedPresentationTemp); //get specified Presentation Template
router.post('/', createPresentationTemp); // Create Presentation Template
router.patch('/:id', updatePresentationTemp); //update Presentation Template
router.delete('/:id', deletePresentationTemp); //Delete Presentation Template


export default router;