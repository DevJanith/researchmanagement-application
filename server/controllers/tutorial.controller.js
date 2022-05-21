import express from 'express';
import mongoose from 'mongoose';

import Tutorial from "../models/tutorial.model.js";

//get all tutorial(s)
export const getTutorials = async (req, res) => {
    try {
        const tutorials = await Tutorial.find();

        res.status(200)
        res.json(tutorials)

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get tutorial
export const getTutorial = async (req, res) => {
    const { id } = req.params;

    try {
        const tutorial = await Tutorial.findById(id)

        res.status(200);
        res.json(tutorial);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ "message": error.message });
    }
}

//create tutorial
export const createTutorial = async (req, res) => {
    const tutorial = req.body;

    const newTutorial = new Tutorial(tutorial);
    try {
        await newTutorial.save();

        res.status(201);
        res.json(newTutorial);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

//update tutorial
export const updateTutorial = async (req, res) => {
    const { id } = req.params;
    const { title, description, publishedBy, states } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No tutorial with id: ${id}`);
        }

        const updatedTutorial = { title, description, publishedBy, states, _id: id };



        const test = await Tutorial.findByIdAndUpdate(id, updatedTutorial, { new: true });

        res.status(200);
        res.json(test);

    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//delete tutorial

export const deleteTutorial = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Tutorial with id: ${id}`);
        }

        await Tutorial.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Tutorial Deleted Successfully" });

    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}




