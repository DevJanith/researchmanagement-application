import { combineReducers } from "redux";
import posts from './posts';
import authReducer from "./auth";
import tutorialReducers from "./tutorial.reducers";
import groupReducer from "./group.reducer"

export default combineReducers({
    posts,
    authReducer,
    tutorialReducers,
    groupReducer
})