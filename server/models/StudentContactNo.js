import mongoose from "mongoose";

const StudentContactNoSchema = mongoose.Schema({
    StudentID:{
        type: String,
        required: true
    },
    ContactNo: Number,

});

const StudentContactNo = mongoose.model('StudentContactNo', StudentContactNoSchema);

export default StudentContactNo;