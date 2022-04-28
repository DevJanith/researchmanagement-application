import express from "express";
import { getGroup, getSpecifiedGroup, createGroup, updateGroup, deleteGroup} from "../controllers/Group.js";
 
const router = express.Router();

//API calling
//localhost:5000/Group/

router.get('/', getGroup); //get all Group details
router.get('/:id', getSpecifiedGroup); //get specified Group details
router.post('/', createGroup); // Create Group
router.patch('/:id', updateGroup); //update Group
router.delete('/:id', deleteGroup); //Delete Group


export default router;