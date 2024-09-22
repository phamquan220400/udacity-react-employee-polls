import {SET_USER} from "../action/userActions";

const initialState = {};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, ...action.payload
            };
        default:
            return state;
    }
}
