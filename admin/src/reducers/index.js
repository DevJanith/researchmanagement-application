import { combineReducers } from "redux";
import posts from './posts';
import authReducer from "./auth";
import topicsReducer from "./researchTopics.reducers";

export default combineReducers({
    posts,
    authReducer,
    topicsReducer
})