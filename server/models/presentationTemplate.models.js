import mongoose from "mongoose";

const PresentationTemplateSchema = mongoose.Schema({
    // ID: String,
    // Created_Date: Date,
    // Updated_Date: Date,
    // States: String,
    // Content: String,
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const PresentationTemplate = mongoose.model('PresentationTemplate', PresentationTemplateSchema);

export default PresentationTemplate;