import express from "express";
import { getGroupDetails, getSpecifiedGroupDetails, createGroupDetails, updateGroupDetails, deleteGroupDetails} from "../controllers/groupDetails.controller.js";
 
const router = express.Router();

//API calling
//localhost:5000/GroupDetails/

router.get('/', getGroupDetails); //get all Group details
router.get('/:id', getSpecifiedGroupDetails); //get specified Group details
router.post('/', createGroupDetails); // Create Group Details
router.patch('/:id', updateGroupDetails); //update Group Details
router.delete('/:id', deleteGroupDetails); //Delete Group Details


export default router;