import express from 'express';
import mongoose from 'mongoose';

import MarkingSchema from "../models/markingSchema.js";

//get complete MarkingSchema details
export const getMarkingSchemas = async (req, res) => {
    try {
        const completeMarkingSchema = await MarkingSchema.find();

        res.status(200);
        res.json(completeMarkingSchema);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get MarkingSchema details
export const getMarkingSchema = async (req, res) => {
    const { id } = req.params;

    try {
        const singleMarkingSchema = await MarkingSchema.findById(id);

        res.status(200);
        res.json(singleMarkingSchema);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//create MarkingSchema
export const createMarkingSchema = async (req, res) => {
    const markingSchema = req.body;

    const newMarkingSchema = new MarkingSchema(markingSchema);
    try {
        await newMarkingSchema.save();

        res.status(201);
        res.json(newMarkingSchema);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

//update MarkingSchema
export const updateMarkingSchema = async (req, res) => {
    const { id } = req.params;
    const { markingSchema_ID,states,createdDate,updatedDate } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No MarkingSchema Available with id: ${id}`);
        }

        const updatedMarkingSchema = { markingSchema_ID,states,createdDate,updatedDate, _id: id };

        await MarkingSchema.findByIdAndUpdate(id, updatedMarkingSchema, { new: true });

        res.status(200);
        res.json(updatedMarkingSchema);

    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//delete MarkingSchema
export const deleteMarkingSchema = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No MarkingSchema Available with id: ${id}`);
        }

        await MarkingSchema.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "MarkingSchema Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
} 