import mongoose from "mongoose";
const panelMemberSchema = mongoose.Schema({
  panelMember_ID: String,
  name: String,
  specialSkills: Array,
});

const panelMember = mongoose.model("panelMember", panelMemberSchema);
export default panelMember;
