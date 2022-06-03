import express from "express";
import { getStaffEmails, createStaffEmail, getStaffEmail, updateStaffEmail, deleteStaffEmail} from "../controllers/staffEmail.controller.js";

const router = express.Router();


router.get('/', getStaffEmails);
router.post('/', createStaffEmail);
router.get('/:id', getStaffEmail);
router.patch('/:id', updateStaffEmail);
router.delete('/:id', deleteStaffEmail);




export default router;