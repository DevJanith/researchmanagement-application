import mongoose from "mongoose";

const GroupSchema = mongoose.Schema({
    groupName: {
        type: String,
        required: true
    },
    groupID: {
        type: String,
        required: true
    },
    memberCount: String,
    // researchID: String,
    // finalID: String,
    groupDetails: [
        {
            studentID: String,
            studentQNumber: String,
            studentName: String,
        }
    ],
    states: {
        type: String,
        default: "1"
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }

});

const Group = mongoose.model('Group', GroupSchema);

export default Group;