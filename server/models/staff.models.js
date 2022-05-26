import mongoose from "mongoose";
const staffSchema = mongoose.Schema({
	staff_ID: String,
	firstName: String,
	lastName: String,
    dob: Date,
    department: String,
    address: String,
    type: String,
    states: String,
    createdDate: Date,
    updatedDate: Date,
    login_ID: String,
    co_Superviser_ID: String,
    superviser_ID: String,
    panel_ID: String,
	
});

const staff = mongoose.model('staff', staffSchema);
export default staff;