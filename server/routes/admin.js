import express from "express";
import { getAdmins, createAdmin, getAdmin, updateAdmin, deleteAdmin} from "../controllers/admin.js";

const router = express.Router();


router.get('/', getAdmins);
router.post('/', createAdmin);
router.get('/:id', getAdmin);
router.patch('/:id', updateAdmin);
router.delete('/:id', deleteAdmin);




export default router;