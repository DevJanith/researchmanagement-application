import mongoose from "mongoose";

const ResearchSchema = mongoose.Schema({
    researchTopic: {
        type: String
    },
    researchField: {
        type: String
    },
    description: {
        type: String
    },
    supervisorDetails: {
        supervisorId: String,
        supervisorName: String
    },
    coSupervisorDetails: {
        coSupervisorId: String,
        coSupervisorName: String
    },
    panelMemberDetails: {
        panelId: String,
        panelName: String
    },
    groupDetails: {
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
    },
    status: {
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

const Research = mongoose.model('Research', ResearchSchema);

export default Research;