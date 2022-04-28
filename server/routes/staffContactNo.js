import express from "express";
import { getStaffContactNos, createStaffContactNo, getStaffContactNo, updateStaffContactNo, deleteStaffContactNo } from "../controllers/staffContactNo.js";

const router = express.Router();


router.get('/', getStaffContactNos);
router.post('/', createStaffContactNo);
router.get('/:id', getStaffContactNo);
router.patch('/:id', updateStaffContactNo);
router.delete('/:id', deleteStaffContactNo);




export default router;