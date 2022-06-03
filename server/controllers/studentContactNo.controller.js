import express from 'express';
import mongoose from 'mongoose';

import StudentCon from "../models/studentContactNo.models.js";

//get all student Contact Number details
export const getStudentCon = async (req, res) => {
    try {
        const allStudent = await StudentCon.find();

        res.status(200);
        res.json(allStudent);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get specified student Contact Number details
export const getSpecifiedStudentCon = async (req, res) => {
    const { id } = req.params;

    try {
        const SpecStudent = await StudentCon.findById(id);

        res.status(200);
        res.json(SpecStudent);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//create student Contact Number
export const createStudentCon = async (req, res) => {
    const students = req.body;

    const newStudent = new StudentCon(students);
    try {
        await newStudent.save();

        res.status(201);
        res.json(newStudent);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

//update student Contact Number
export const updateStudentCon = async (req, res) => {
    const { id } = req.params;
    const { StudentID, ContactNo } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`Student contact is Not Available with id: ${id}`);
        }

        const updatedStudent = { StudentID, ContactNo, _id: id };

        await StudentCon.findByIdAndUpdate(id, updatedStudent, { new: true });

        res.status(200);
        res.json(updatedStudent);

    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//delete student Contact Number
export const deleteStudentCon = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`Student contact is Not Available with id: ${id}`);
        }

        await StudentCon.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Student Contact Number Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}