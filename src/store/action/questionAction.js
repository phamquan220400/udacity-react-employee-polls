export const SET_QUESTION = 'question/SET_QUESTION';

export function setQuestion(payload){
    return {
        type: SET_QUESTION,
        payload
    };
}
