import mongoose from "mongoose";
const staffContactNoSchema = mongoose.Schema({
	contactNo: Number,
    staff_ID: String,
    
	
});

const staffContactNo = mongoose.model('staffContactNo', staffContactNoSchema);
export default staffContactNo;