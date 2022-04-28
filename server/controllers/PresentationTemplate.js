import express from 'express';
import mongoose from 'mongoose';

import PresentationTemp from "../models/PresentationTemplate.js";

//get all Presentation Template
export const getPresentationTemp = async (req, res) => {
    try {
        const allPresentationTemp = await PresentationTemp.find();

        res.status(200);
        res.json(allPresentationTemp);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get specified Presentation Template
export const getSpecifiedPresentationTemp = async (req, res) => {
    const { id } = req.params;

    try {
        const specPresentationTemp = await PresentationTemp.findById(id);

        res.status(200);
        res.json(specPresentationTemp);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

// Create Presentation Template
export const createPresentationTemp = async (req, res) => {
    const presentations = req.body;

    const newPresentationTemp = new PresentationTemp(presentations);
    try {
        await newPresentationTemp.save();

        res.status(201);
        res.json(newPresentationTemp);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}


//update Presentation Template
export const updatePresentationTemp = async (req, res) => {
    const { id } = req.params;
    const { ID, Created_Date, Updated_Date, States, Content} = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Presentation Template Available with id: ${id}`);
        }

        const updatedPresTemp = { ID, Created_Date, Updated_Date, States, Content, _id: id };

        await PresentationTemp.findByIdAndUpdate(id, updatedPresTemp, { new: true });

        res.status(200);
        res.json(updatedPresTemp);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//Delete Presentation Template
export const deletePresentationTemp = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Presentation Template Available with id: ${id}`);
        }

        await PresentationTemp.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Presentation Template Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}