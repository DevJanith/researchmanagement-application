import mongoose from "mongoose";

const GroupSchema = mongoose.Schema({
    GroupName: {
        type: String,
        required: true
    },
    GroupID: {
        type: String,
        required: true
    },
    States: String,
    Created_Date: Date,
    Updated_Date: Date,
    Member_Count: String,
    ResearchID: String,
    FinalID: String,
    GroupDetails: [
        {
            studentID: String,
            StudentName: String,
        }
    ],

});

const Group = mongoose.model('Group', GroupSchema);

export default Group;