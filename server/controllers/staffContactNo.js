import express from 'express';
import mongoose from 'mongoose';

import StaffContactNo from "../models/staffContactNo.js";

//get complete staff contactNO details
export const getStaffContactNos = async (req, res) => {
    try {
        const completeStaff = await StaffContactNo.find();

        res.status(200);
        res.json(completeStaff);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get staff ContactNo details
export const getStaffContactNo = async (req, res) => {
    const { id } = req.params;

    try {
        const singleStaff = await StaffContactNo.findById(id);

        res.status(200);
        res.json(singleStaff);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//create staff ContactNO
export const createStaffContactNo = async (req, res) => {
    const staff = req.body;

    const newStaff = new StaffContactNo(staff);
    try {
        await newStaff.save();

        res.status(201);
        res.json(newStaff);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

//update staff ContactNo
export const updateStaffContactNo = async (req, res) => {
    const { id } = req.params;
    const { contactNo,staff_ID} = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No staff ContactNo Available with id: ${id}`);
        }

        const updatedStaff = {contactNo,staff_ID, _id: id };

        await StaffContactNo.findByIdAndUpdate(id, updatedStaff, { new: true });

        res.status(200);
        res.json(updatedStaff);

    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//delete staff ContactNo
export const deleteStaffContactNo= async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No staff ContactNo Available with id: ${id}`);
        }

        await StaffContactNo.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Staff ContactNo Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
} 