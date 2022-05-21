import { combineReducers } from "redux";
import posts from './posts';
import authReducer from "./auth";
import tutorialReducers from "./tutorial.reducers";

export default combineReducers({
    posts,
    authReducer,
    tutorialReducers
})