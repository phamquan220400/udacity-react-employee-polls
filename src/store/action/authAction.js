export const SET_AUTH = "auth/SET_AUTH";
export const LOG_OUT = "auth/LOG_OUT";

export function setAuth (payload) {
    return {
        type: SET_AUTH,
        payload
    };
}

export function logout() {
    return {
        type: LOG_OUT
    };
}
