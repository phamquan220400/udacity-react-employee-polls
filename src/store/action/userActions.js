export const SET_USER = "user/SET_USER"

export function setUser (payload) {
    return {
        type: SET_USER,
        payload
    };
}
