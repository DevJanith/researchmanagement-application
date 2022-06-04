import express from 'express';
import mongoose from 'mongoose';

import Research from "../models/research.model.js";

export const getResearches = async (req, res) => {
    try {
        const research = await Research.find();

        res.status(200);
        res.json(research);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

export const createResearch = async (req, res) => {
    const research = req.body;

    const newResearch = new Research(research);
    try {
        await newResearch.save();

        res.status(201);
        res.json(newResearch);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

export const getResearch = async (req, res) => {
    const { id } = req.params;

    try {
        const research = await Research.findById(id);

        res.status(200);
        res.json(research);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

export const updateResearch = async (req, res) => {
    const { id } = req.params; 

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Research with id: ${id}`);
        }

        const updatedResearch = { ...req.body, _id: id };

        await Research.findByIdAndUpdate(id, updatedResearch, { new: true });

        res.status(200);
        res.json(updatedResearch);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

export const deleteResearch = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Research with id: ${id}`);
        }

        await Research.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Research Deleted Successfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}