import express from "express";
import { getTutorials, createTutorial, getTutorial, updateTutorial, deleteTutorial } from "../controllers/tutorial.controller.js";

const router = express.Router();
// CRUD
// localhost:5000/tutorial/  (read)
// localhost:5000/tutorial/  (create)
// localhost:5000/tutorial/:id  (read) localhost:5000/tutorial/id=10 

router.get('/', getTutorials); //read all tutorial(s) operation
router.post('/', createTutorial); //create operation
router.get('/:id', getTutorial);  //read tutorial
router.patch('/:id', updateTutorial); //update tutorial operation
router.delete('/:id', deleteTutorial); //delete tutorial operation


export default router;