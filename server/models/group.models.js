import mongoose from "mongoose";

const GroupSchema = mongoose.Schema({
    groupName: {
        type: String,
        required: true
    },
    groupID: {
        type: String,
    },
    memberCount: String,
    // researchID: String,
    // finalID: String,
    groupDetails: [
        {
            userDetails: {
                userQNumber: String,
                userEmail: String,
                userName: String,
                userContactNumber: String,
                userAddress: String,
                userType: String,
            },
            states: String,
            _id: String,
            value: String,
            label: String
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