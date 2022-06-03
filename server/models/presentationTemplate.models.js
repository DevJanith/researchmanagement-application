import mongoose from "mongoose";

const PresentationTemplateSchema = mongoose.Schema({
    ID: String,
    Created_Date: Date,
    Updated_Date: Date,
    States: String,
    Content: String,
});

const PresentationTemplate = mongoose.model('PresentationTemplate', PresentationTemplateSchema);

export default PresentationTemplate;