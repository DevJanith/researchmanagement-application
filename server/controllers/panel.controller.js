import express from 'express';
import mongoose from 'mongoose';

import Panel from "../models/panel.models.js";

//get complete panel details
export const getPanels = async (req, res) => {
    try {
        const completePanel = await Panel.find();

        res.status(200);
        res.json(completePanel);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get panel details
export const getPanel = async (req, res) => {
    const { id } = req.params;

    try {
        const singlePanel = await Panel.findById(id);

        res.status(200);
        res.json(singlePanel);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//create panel
export const createPanel = async (req, res) => {
    const panel = req.body;

    const newPanel = new Panel(panel);
    try {
        await newPanel.save();

        res.status(201);
        res.json(newPanel);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

//update Panel
export const updatePanel = async (req, res) => {
    const { id } = req.params;
    const { panel_ID,type,description,panelMember_ID,final_ID } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No panel Available with id: ${id}`);
        }

        const updatedPanel = { panel_ID,type,description,panelMember_ID,final_ID, _id: id };

        await Panel.findByIdAndUpdate(id, updatedPanel, { new: true });

        res.status(200);
        res.json(updatedPanel);

    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//delete panel
export const deletePanel = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No panel Available with id: ${id}`);
        }

        await Panel.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Panel Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
} 