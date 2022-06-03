import express from 'express';
import mongoose from 'mongoose';

import Group from "../models/group.models.js";

//get all Group details
export const getGroup = async (req, res) => {
    try {
        const allGroup = await Group.find();

        res.status(200);
        res.json(allGroup);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get specified Group details
export const getSpecifiedGroup = async (req, res) => {
    const { id } = req.params;

    try {
        const specGroup = await Group.findById(id);

        res.status(200);
        res.json(specGroup);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

// Create Group
export const createGroup = async (req, res) => {
    const groups = req.body;

    const newGroup = new Group(groups);
    try {
        await newGroup.save();

        res.status(201);
        res.json(newGroup);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}


//update Group
export const updateGroup = async (req, res) => {
    const { id } = req.params;
    const { GroupName, GroupID, States, Created_Date, Updated_Date, Member_Count, ResearchID, FinalID } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Group Available with id: ${id}`);
        }

        const updatedGroup = { GroupName, GroupID, States, Created_Date, Updated_Date, Member_Count, ResearchID, FinalID, _id: id };

        await Group.findByIdAndUpdate(id, updatedGroup, { new: true });

        res.status(200);
        res.json(updatedGroup);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//Delete Group
export const deleteGroup = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Group Available with id: ${id}`);
        }

        await Group.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Group Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}