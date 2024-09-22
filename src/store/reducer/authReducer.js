import {SET_AUTH, LOG_OUT} from "../action/authAction";

const initialState = {};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                user: action.payload
            };
        case LOG_OUT:
            return {
                ...state,
                user: null
            };
        default:
            return state;

    }
}
