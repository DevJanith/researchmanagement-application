import express from "express";
import { getStudent, getSpecifiedStudent, createStudent, updateStudent, deleteStudent } from "../controllers/Student.js";
 
const router = express.Router();

//API calling
//localhost:5000/Student/

router.get('/', getStudent); //get all student details
router.get('/:id', getSpecifiedStudent); //get specified student details
router.post('/', createStudent);
router.patch('/:id', updateStudent); //update
router.delete('/:id', deleteStudent);


export default router;