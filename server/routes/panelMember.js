import express from "express";
import { getPanelMembers, createPanelMember, getPanelMember, updatePanelMember, deletePanelMember} from "../controllers/panelMember.js";

const router = express.Router();


router.get('/', getPanelMembers);
router.post('/', createPanelMember);
router.get('/:id', getPanelMember);
router.patch('/:id', updatePanelMember);
router.delete('/:id', deletePanelMember);




export default router;