import express from 'express';
import mongoose from 'mongoose';

import Staff from "../models/staff.models.js";

//get complete staff details
export const getStaffs = async (req, res) => {
    try {
        const completeStaff = await Staff.find();

        res.status(200);
        res.json(completeStaff);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get staff details
export const getStaff = async (req, res) => {
    const { id } = req.params;

    try {
        const singleStaff = await Staff.findById(id);

        res.status(200);
        res.json(singleStaff);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//create staff
export const createStaff = async (req, res) => {
    const staff = req.body;

    const newStaff = new Staff(staff);
    try {
        await newStaff.save();

        res.status(201);
        res.json(newStaff);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

//update staff
export const updateStaff = async (req, res) => {
    const { id } = req.params;
    const { staff_ID,firstName,lastName,dob,department,address,type,states,createdDate,updatedDate,login_ID,co_Superviser_ID,superviser_ID,panel_ID } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No staff Available with id: ${id}`);
        }

        const updatedStaff = {staff_ID,firstName,lastName,dob,department,address,type,states,createdDate,updatedDate,login_ID,co_Superviser_ID,superviser_ID,panel_ID, _id: id };

        await Staff.findByIdAndUpdate(id, updatedStaff, { new: true });

        res.status(200);
        res.json(updatedStaff);

    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//delete staff
export const deleteStaff = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No staff Available with id: ${id}`);
        }

        await Staff.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Staff Deleted Succesfully" });
        
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
} 