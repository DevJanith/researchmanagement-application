import mongoose from "mongoose";
const staffEmailSchema = mongoose.Schema({
	email: String,
	staff_ID: String,
	
	
});

const staffEmail = mongoose.model('staffEmail', staffEmailSchema);
export default staffEmail;