import express from 'express';
import mongoose from 'mongoose';

import PostMessage from "../models/postMessage.models.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200);
        res.json(postMessages);

    } catch (error) {
        console.log(error)

        res.status(404);
        res.json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();

        res.status(201);
        res.json(newPost);

    } catch (error) {
        res.status(409);
        res.json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);

        res.status(200);
        res.json(post);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No post with id: ${id}`);
        }

        const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

        await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

        res.status(200);
        res.json(updatedPost);
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No post with id: ${id}`);
        }

        await PostMessage.findByIdAndDelete(id);
        res.status(200);
        res.json({ "message": "Post Deleted Succesfully" });
    } catch (error) {
        res.status(404);
        res.json({ "message": error.message });
    }
}