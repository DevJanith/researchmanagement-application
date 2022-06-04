import express from 'express';
import mongoose from 'mongoose';

import Topic from "../models/researchTopic.js";

//get all Topic details
export const getTopics = async (req, res) => {
    try {
        const allTopic = await Topic.find();

        res.status(200);
        res.json(allTopic);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get specified Topic details
export const getTopic = async (req, res) => {
    const { id } = req.params;

    try {
        const specTopic = await Topic.findById(id);

        res.status(200);
        res.json(specTopic);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

// Create Topic
export const createTopic = async (req, res) => {
    const Topics = req.body;

    const newTopic = new Topic(Topics);
    try {
        await newTopic.save();

        res.status(201);
        res.json(newTopic);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

//update Topic
export const updateTopic = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Research Topic Available with id: ${id}`);
        }

        const updatedTopic = { ...req.body, _id: id };

        await Topic.findByIdAndUpdate(id, updatedTopic, { new: true });

        res.status(200);
        res.json(updatedTopic);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//Delete Topic
export const deleteTopic = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Research Topic Available with id: ${id}`);
        }

        await Topic.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Research Topic Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}