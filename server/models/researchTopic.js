import mongoose from "mongoose";

const TopicSchema = mongoose.Schema({
    groupid:{
        type: String,
        required: true
    },
    leaderid: {
        type: String,
        required: true
    },
    leader_email: {
        type: String,
        required: true
    },
    member1: {
        type: String,
        required: true
    },
    member2: {
        type: String,
        required: true
    },
    member3: String,
    membercount: String,
    research_topic: String,
    research_field: String,
    description: String,
    status: {
        type: String,
        default: "pending"
    },
    supervisorName: String,
    co_supervisorName: String,
    
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }

});

const Topic = mongoose.model('Topic', TopicSchema);

export default Topic;