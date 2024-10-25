import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {_saveQuestionAnswer as saveAnswer} from "../_DATA";
import {setQuestion as questionAction} from "../store/action/questionAction";
import {setUser as userAction} from "../store/action/userActions";

const authSelect = (state) => state.auth;
const userSelect = (state) => state.user;
const questionSelect = (state) => state.question;

const QuestionDetail = () => {
    let {questionId} = useParams();

    const [question, setQuestion] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(authSelect);
    const questions = useSelector(questionSelect);
    const user = useSelector(userSelect);

    useEffect(() => {
        setQuestion(questions[questionId]);
    }, []);

    const getVoted = () => {
        if (question.optionOne.votes.includes(auth.user.id)) {
            return question.optionOne.text;
        } else if (question.optionTwo.votes.includes(auth.user.id)) {
            return question.optionTwo.text;
        } else {
            return null;
        }
    };

    const saveSelectedAnswer = (answer) => {
        saveAnswer({
            authedUser: auth.user.id,
            qid: question.id,
            answer: answer
        }).then((res) => {
            if (res) {
                const newAnsweredQuestion = {
                    ...questions,
                    [question.id]: {
                        ...question,
                        [answer]: {
                            ...questions[question.id][answer],
                            votes: questions[question.id][answer].votes.concat([auth.user.id]),
                        }
                    }
                };
                const newAnsweredUser = {
                    ...user,
                    [auth.user.id]: {
                        ...user[auth.user.id],
                        answers: {
                            ...user[auth.user.id].answers,
                            [question.id]: answer
                        }
                    }
                };
                dispatch(questionAction(newAnsweredQuestion));
                dispatch(userAction(newAnsweredUser));
                navigate("/home");
            } else {
                navigate("/home");
            }
        });
    }
    return (
        <div className="container">
            {question && Object.keys(question).length > 0 ?
                (<div>
                    <div className="px-4 py-5 my-5 text-center">
                        <h1 className="display-5 fw-bold text-body-emphasis"> Poll by {auth.name}{" "} </h1>
                        <img
                            className="d-block mx-auto mb-4 rounded-circle"
                            src={auth.avatarURL}
                            alt={auth.name} width="128" height="128"
                        />
                        <div className="col-lg-6 mx-auto">
                            {!getVoted() ?
                                (
                                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-lg px-4 gap-3"
                                            onClick={() => {
                                                saveSelectedAnswer("optionOne");
                                            }}
                                        >
                                            {question?.optionOne.text}
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary btn-lg px-4"
                                            onClick={() => {
                                                saveSelectedAnswer("optionTwo");
                                            }}
                                        >
                                            {question?.optionTwo.text}
                                        </button>
                                    </div>) :
                                (
                                    <div className="answered-question row flex-row justify-content-center">
                                        <h4 className="col">You already answered this question.</h4>
                                        <div className="btn btn-success disabled row p-3">{getVoted()}</div>
                                        <button
                                            className="col-2 btn btn-primary mt-2"
                                            onClick={() => navigate(-1)}
                                        >
                                            Go back
                                        </button>
                                        <hr/>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>)
                : (<div className="d-flex align-items-center justify-content-center vh-100">
                    <div className="text-center">
                        <h1 className="display-1 fw-bold">404</h1>
                        <p className="fs-3 text-danger">Question not found.</p>
                        <Link to={"/home"} className="btn btn-primary"> Go Home </Link></div>
                </div>)}
        </div>
    )
}

export default QuestionDetail;