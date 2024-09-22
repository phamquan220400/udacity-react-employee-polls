import {SET_QUESTION} from "../action/questionAction";

const initialState = {};
export const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTION:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
