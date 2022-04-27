import mongoose from "mongoose";
const adminSchema = mongoose.Schema({
	admin_ID: String,
	name: String,
	states: String,
    createdDate: Date,
    updatedDate: Date,
    type: String,
    staff_ID: String,
    markingSchema_ID: String,

	
});

const admin = mongoose.model('admin', adminSchema);
export default admin;