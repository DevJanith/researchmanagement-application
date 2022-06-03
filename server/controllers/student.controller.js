import express from 'express';
import mongoose from 'mongoose';

import Student from "../models/student.models.js";

//get all student details
export const getStudent = async (req, res) => {
    try {
        const allStudent = await Student.find();

        res.status(200);
        res.json(allStudent);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get specified student details
export const getSpecifiedStudent = async (req, res) => {
    const { id } = req.params;

    try {
        const SpecStudent = await Student.findById(id);

        res.status(200);
        res.json(SpecStudent);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//create students
export const createStudent = async (req, res) => {
    const students = req.body;

    const newStudent = new Student(students);
    try {
        await newStudent.save();

        res.status(201);
        res.json(newStudent);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

//update Students
export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { StdName, Email, ITNumber, DOB, Year, Semester, Department, Specialization,
            Status, Created_Date, Updated_Date, GroupID, LoginID, ResearchID, FinalID } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Student Available with id: ${id}`);
        }

        const updatedStudent = { StdName, Email, ITNumber, DOB, Year, Semester, Department, Specialization,
                                 Status, Created_Date, Updated_Date, GroupID, LoginID, ResearchID, FinalID, _id: id };

        await Student.findByIdAndUpdate(id, updatedStudent, { new: true });

        res.status(200);
        res.json(updatedStudent);

    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//delete students
export const deleteStudent = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No Student Available with id: ${id}`);
        }

        await Student.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Student Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}