import express from "express";
import { getStaffs, createStaff, getStaff, updateStaff, deleteStaff} from "../controllers/staff.js";

const router = express.Router();


router.get('/', getStaffs);
router.post('/', createStaff);
router.get('/:id', getStaff);
router.patch('/:id', updateStaff);
router.delete('/:id', deleteStaff);




export default router;