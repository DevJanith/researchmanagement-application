import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
    StdName:{
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    ITNumber: {
        type: String,
        required: true
    },
    DOB: String,
    Year: String,
    Semester: String,
    Department: String,
    Specialization: String,
    Status: String,
    Created_Date: Date,
    Updated_Date: Date,
    GroupID: String,
    LoginID: String,
    ResearchID: String,
    FinalID: String,

    // createdAt: {
    //     type: Date,
    //     default: new Date()
    // }

});

const Student = mongoose.model('Student', StudentSchema);

export default Student;