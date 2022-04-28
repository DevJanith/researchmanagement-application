import mongoose from "mongoose";
const panelSchema = mongoose.Schema({
	panel_ID: String,
	type: String,
	description: String,
    panelMember_ID: String,
    final_ID: String,
	
});

const panel = mongoose.model('panel', panelSchema);
export default panel;