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
        groupId: String,
        memberCount: String,
        groupMembers: [
            {
                studentID: String,
                studentQNumber: String,
                studentName: String,
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