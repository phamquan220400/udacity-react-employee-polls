import {combineReducers} from "@reduxjs/toolkit";
import {authReducer} from "./authReducer";
import {questionReducer} from "./questionReducer";
import {userReducer} from "./userReducer";

const rootReducer = combineReducers(
    {
        auth: authReducer,
        question: questionReducer,
        user: userReducer
    }
);

export default rootReducer;
