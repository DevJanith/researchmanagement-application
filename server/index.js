import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//import routes
import postRoutes from "./routes/posts.js";
import StudentRoutes from "./routes/Student.js";
import StudentContactRoutes from "./routes/StudentContactNo.js";
import GroupRoutes from "./routes/Group.js";
import GroupDetailsRoutes from "./routes/GroupDetails.js";
import PresentationTempRoutes from "./routes/PresentationTemplate.js";
import panelRoutes from "./routes/panel.js";
import panelMemberRoutes from "./routes/panelMember.js";
import staffRoutes from "./routes/staff.js";
import staffContactNoRoutes from "./routes/staffContactNo.js";
import staffEmailRoutes from "./routes/staffEmail.js";
import adminRoutes from "./routes/admin.js";
import markingSchemaRoutes from "./routes/markingSchema.js";
import markingSchemaDescriptionRoutes from "./routes/markingSchemaDescription.js";
import userRoutes from "./routes/user.routes.js"
import tutorialRoutes from "./routes/tutorial.routes.js"

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/Student', StudentRoutes);
app.use('/StudentCon', StudentContactRoutes);
app.use('/Group', GroupRoutes);
app.use('/GroupDetails', GroupDetailsRoutes);
app.use('/PresentationTemp', PresentationTempRoutes);
app.use('/panel', panelRoutes);
app.use('/panelMember', panelMemberRoutes);
app.use('/staff', staffRoutes);
app.use('/staffContactNo', staffContactNoRoutes);
app.use('/staffEmail', staffEmailRoutes);
app.use('/admin', adminRoutes);
app.use('/markingSchema', markingSchemaRoutes);
app.use('/markingSchemaDescription', markingSchemaDescriptionRoutes);
app.use('/user', userRoutes);

app.use('/tutorial', tutorialRoutes);

const CONNECTION_URL = "mongodb+srv://user:YEsowdUiBU9QnAEy@researchmanagement-appl.vzhn4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);