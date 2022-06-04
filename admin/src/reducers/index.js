import { combineReducers } from "redux";
import posts from './posts';
import presentationTemplates from './presentationTemplates';
import authReducer from "./auth";
import topicsReducer from "./researchTopics.reducers";

export default combineReducers({
    posts,
    presentationTemplates,
    authReducer,
    topicsReducer
})