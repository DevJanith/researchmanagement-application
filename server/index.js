import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//import routes
import postRoutes from "./routes/posts.routes.js";
import StudentRoutes from "./routes/student.routes.js";
import StudentContactRoutes from "./routes/studentContactNo.routes.js";
import GroupRoutes from "./routes/group.routes.js";
import GroupDetailsRoutes from "./routes/groupDetails.routes.js";
import PresentationTempRoutes from "./routes/presentationTemplate.routes.js";
import panelRoutes from "./routes/panel.routes.js";
import panelMemberRoutes from "./routes/panelMember.routes.js";
import staffRoutes from "./routes/staff.routes.js";
import staffContactNoRoutes from "./routes/staffContactNo.routes.js";
import staffEmailRoutes from "./routes/staffEmail.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import markingSchemaRoutes from "./routes/markingSchema.routes.js";
import markingSchemaDescriptionRoutes from "./routes/markingSchemaDescription.routes.js";
import userRoutes from "./routes/user.routes.js"
import tutorialRoutes from "./routes/tutorial.routes.js"
import topicRoutes from "./routes/researchTopic.routes.js";
import ResearchRoutes from "./routes/research.routes.js"


import dotenv from "dotenv";

dotenv.config()

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/student', StudentRoutes);
app.use('/studentCon', StudentContactRoutes);
app.use('/group', GroupRoutes);
app.use('/groupDetails', GroupDetailsRoutes);
app.use('/presentationTemp', PresentationTempRoutes);
app.use('/panel', panelRoutes);
app.use('/panelMember', panelMemberRoutes);
app.use('/staff', staffRoutes);
app.use('/staffContactNo', staffContactNoRoutes);
app.use('/staffEmail', staffEmailRoutes);
app.use('/admin', adminRoutes);
app.use('/markingSchema', markingSchemaRoutes);
app.use('/markingSchemaDescription', markingSchemaDescriptionRoutes);
app.use('/user', userRoutes);
app.use('/topic', topicRoutes);
app.use('/tutorial', tutorialRoutes);
app.use('/research', ResearchRoutes);


const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@researchmanagement-appl.vzhn4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);