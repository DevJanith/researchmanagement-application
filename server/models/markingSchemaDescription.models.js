import mongoose from "mongoose";
const markingSchemaDescriptionSchema = mongoose.Schema({
	description: String,
    markingSchema_ID: String,
	
    
	
});

const markingSchemaDescription = mongoose.model('markingSchemaDescription', markingSchemaDescriptionSchema);
export default markingSchemaDescription;