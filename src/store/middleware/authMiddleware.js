import {SET_AUTH, LOG_OUT} from "../action/authAction";


const authMiddleware = (storeAPI) => (next) => (action) => {
    if (action.type === SET_AUTH) {
        // Perform login side effect
        localStorage.setItem('isAuthenticated', 'true');
    } else if (action.type === LOG_OUT) {
        localStorage.removeItem('isAuthenticated');
    }

    return next(action);
};

export default authMiddleware;
