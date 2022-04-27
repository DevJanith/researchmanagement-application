import express from "express";
import { getPanels, createPanel, getPanel, updatePanel, deletePanel} from "../controllers/panel.js";

const router = express.Router();


router.get('/', getPanels);
router.post('/', createPanel);
router.get('/:id', getPanel);
router.patch('/:id', updatePanel);
router.delete('/:id', deletePanel);




export default router;