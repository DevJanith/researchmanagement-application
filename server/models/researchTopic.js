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
    Created_Date: Date,
    Updated_Date: Date,

});

const Topic = mongoose.model('Topic', TopicSchema);

export default Topic;