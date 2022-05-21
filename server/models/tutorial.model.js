import mongoose from "mongoose";

const tutorialSchema = mongoose.Schema({
    title: String,
    description: String,
    publishedBy: String,
    states: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Tutorial = mongoose.model('tutorial', tutorialSchema);
export default Tutorial;