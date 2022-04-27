import mongoose from "mongoose";
const markingSchemaSchema = mongoose.Schema({
	markingSchema_ID: String,
	states: String,
	createdDate: Date,
    updatedDate: Date,
    
	
});

const markingSchema = mongoose.model('markingSchema', markingSchemaSchema);
export default markingSchema;