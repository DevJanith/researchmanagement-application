import express from 'express';
import mongoose from 'mongoose';

import PanelMember from "../models/panelMember.js";

//get complete panelMember details
export const getPanelMembers = async (req, res) => {
    try {
        const completePanel = await PanelMember.find();

        res.status(200);
        res.json(completePanel);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get panelMember details
export const getPanelMember = async (req, res) => {
    const { id } = req.params;

    try {
        const singlePanel = await PanelMember.findById(id);

        res.status(200);
        res.json(singlePanel);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//create panelMember
export const createPanelMember = async (req, res) => {
    const panel = req.body;

    const newPanel = new PanelMember(panel);
    try {
        await newPanel.save();

        res.status(201);
        res.json(newPanel);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

//update PanelMember
export const updatePanelMember = async (req, res) => {
    const { id } = req.params;
    const { panelMember_ID,name,specialSkills } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No panel Available with id: ${id}`);
        }

        const updatedPanel = { panelMember_ID,name,specialSkills, _id: id };

        await PanelMember.findByIdAndUpdate(id, updatedPanel, { new: true });

        res.status(200);
        res.json(updatedPanel);

    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//delete panelMember
export const deletePanelMember = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No panel member Available with id: ${id}`);
        }

        await PanelMember.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Panel Member Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
} 