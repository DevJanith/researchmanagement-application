import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//import routes
import postRoutes from "./routes/posts.js";
import panelRoutes from "./routes/panel.js";
import panelMemberRoutes from "./routes/panelMember.js";
import staffRoutes from "./routes/staff.js";
import staffContactNoRoutes from "./routes/staffContactNo.js";
import staffEmailRoutes from "./routes/staffEmail.js";
import adminRoutes from "./routes/admin.js";
import markingSchemaRoutes from "./routes/markingSchema.js";
import markingSchemaDescriptionRoutes from "./routes/markingSchemaDescription.js";

const app = express(); 

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/panel', panelRoutes);
app.use('/panelMember', panelMemberRoutes);
app.use('/staff', staffRoutes);
app.use('/staffContactNo', staffContactNoRoutes);
app.use('/staffEmail', staffEmailRoutes);
app.use('/admin', adminRoutes);
app.use('/markingSchema', markingSchemaRoutes);
app.use('/markingSchemaDescription', markingSchemaDescriptionRoutes);

const CONNECTION_URL = "mongodb+srv://user:YEsowdUiBU9QnAEy@researchmanagement-appl.vzhn4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);