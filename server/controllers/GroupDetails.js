import express from 'express';
import mongoose from 'mongoose';

import GroupDetails from "../models/GroupDetails.js";

//get all Group details
export const getGroupDetails = async (req, res) => {
    try {
        const allGroupDetails = await GroupDetails.find();

        res.status(200);
        res.json(allGroupDetails);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get specified Group details
export const getSpecifiedGroupDetails = async (req, res) => {
    const { id } = req.params;

    try {
        const specGroupDetails = await GroupDetails.findById(id);

        res.status(200);
        res.json(specGroupDetails);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

// Create Group Details
export const createGroupDetails = async (req, res) => {
    const groupsDetails = req.body;

    const newGroupDetails = new GroupDetails(groupsDetails);
    try {
        await newGroupDetails.save();

        res.status(201);
        res.json(newGroupDetails);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}


//Update Group Details
export const updateGroupDetails = async (req, res) => {
    const { id } = req.params;
    const { GroupMem_Name, States, Created_Date, Updated_Date} = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Group Details Available with id: ${id}`);
        }

        const updatedgrpDetails = { GroupMem_Name, States, Created_Date, Updated_Date, _id: id };

        await GroupDetails.findByIdAndUpdate(id, updatedgrpDetails, { new: true });

        res.status(200);
        res.json(updatedgrpDetails);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//Delete Group Details
export const deleteGroupDetails = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Group Details Available with id: ${id}`);
        }

        await GroupDetails.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Group Details Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}