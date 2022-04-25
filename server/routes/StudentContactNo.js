import express from "express";
import { getStudentCon, getSpecifiedStudentCon, createStudentCon, updateStudentCon, deleteStudentCon} from "../controllers/StudentContactNo.js";
 
const router = express.Router();

//API calling
//localhost:5000/StudentCon/

router.get('/', getStudentCon); //get all student Contact Number details
router.get('/:id', getSpecifiedStudentCon); //get specified student Contact Number details
router.post('/', createStudentCon);
router.patch('/:id', updateStudentCon); //update
router.delete('/:id', deleteStudentCon);


export default router;