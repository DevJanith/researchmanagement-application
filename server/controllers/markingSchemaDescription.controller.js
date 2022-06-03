import express from 'express';
import mongoose from 'mongoose';

import MarkingSchemaDescription from "../models/markingSchemaDescription.models.js";

//get complete MarkingSchemaDescription details
export const getMarkingSchemaDescriptions = async (req, res) => {
    try {
        const completeMarkingSchema = await MarkingSchemaDescription.find();

        res.status(200);
        res.json(completeMarkingSchema);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get MarkingSchemaDescription details
export const getMarkingSchemaDescription = async (req, res) => {
    const { id } = req.params;

    try {
        const singleMarkingSchema = await MarkingSchemaDescription.findById(id);

        res.status(200);
        res.json(singleMarkingSchema);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//create MarkingSchemaDescription
export const createMarkingSchemaDescription = async (req, res) => {
    const markingSchemaDescription = req.body;

    const newMarkingSchema= new MarkingSchemaDescription(markingSchema);
    try {
        await newMarkingSchema.save();

        res.status(201);
        res.json(newMarkingSchema);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

//update MarkingSchemaDescription
export const updateMarkingSchemaDescription = async (req, res) => {
    const { id } = req.params;
    const { description,markingSchema_ID } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No MarkingSchemaDescription Available with id: ${id}`);
        }

        const updatedMarkingSchema = { description,markingSchema_ID, _id: id };

        await MarkingSchemaDescription.findByIdAndUpdate(id, updatedMarkingSchema, { new: true });

        res.status(200);
        res.json(updatedMarkingSchema);

    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//delete MarkingSchemaDescription
export const deleteMarkingSchemaDescription = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No MarkingSchemaDescription Available with id: ${id}`);
        }

        await MarkingSchemaDescription.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "MarkingSchemaDescription Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
} 