import express from 'express';
import mongoose from 'mongoose';

import Admin from "../models/admin.models.js";

//get complete admin details
export const getAdmins = async (req, res) => {
    try {
        const completeAdmin = await Admin.find();

        res.status(200);
        res.json(completeAdmin);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

//get admin details
export const getAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        const singleAdmin = await Admin.findById(id);

        res.status(200);
        res.json(singleAdmin);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//create admin
export const createAdmin = async (req, res) => {
    const admin = req.body;

    const newAdmin = new Admin(admin);
    try {
        await newAdmin.save();

        res.status(201);
        res.json(newAdmin);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

//update Admin
export const updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { admin_ID,name,states,createdDate,updatedDate,type,staff_ID,markingSchema_ID } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No admin Available with id: ${id}`);
        }

        const updatedAdmin = {admin_ID,name,states,createdDate,updatedDate,type,staff_ID,markingSchema_ID, _id: id };

        await Admin.findByIdAndUpdate(id, updatedAdmin, { new: true });

        res.status(200);
        res.json(updatedAdmin);

    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

//delete admin
export const deleteAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No admin Available with id: ${id}`);
        }

        await Admin.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Admin Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
} 