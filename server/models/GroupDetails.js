import mongoose from "mongoose";

const GroupDetailsSchema = mongoose.Schema({
    GroupMem_Name: String,
    States: String,
    Created_Date: Date,
    Updated_Date: Date,

});

const GroupDetails = mongoose.model('GroupDetails', GroupDetailsSchema);

export default GroupDetails;