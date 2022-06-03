import express from 'express';
import mongoose from 'mongoose';

import StaffEmail from "../models/staffEmail.models.js";

//get complete staff Email details
export const getStaffEmails = async (req, res) => {
    try {
        const completeStaff = await StaffEmail.find();

        res.status(200);
        res.json(completeStaff);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get staff Email details
export const getStaffEmail = async (req, res) => {
    const { id } = req.params;

    try {
        const singleStaff = await StaffEmail.findById(id);

        res.status(200);
        res.json(singleStaff);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//create staff Email
export const createStaffEmail = async (req, res) => {
    const staff = req.body;

    const newStaff = new StaffEmail(staff);
    try {
        await newStaff.save();

        res.status(201);
        res.json(newStaff);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

//update staff Email
export const updateStaffEmail = async (req, res) => {
    const { id } = req.params;
    const { email,staff_ID} = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No staff Email Available with id: ${id}`);
        }

        const updatedStaff = {email,staff_ID, _id: id };

        await StaffEmail.findByIdAndUpdate(id, updatedStaff, { new: true });

        res.status(200);
        res.json(updatedStaff);

    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//delete staff Email
export const deleteStaffEmail= async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No staff Email Available with id: ${id}`);
        }

        await StaffEmail.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Staff Email Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
} 