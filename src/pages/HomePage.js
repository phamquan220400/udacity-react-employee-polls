import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import QuestionList from "../components/QuestionList";

const authSelector = (state) => state.auth;
const questionSelector = (state) => state.question;

const HomePage = () => {
    const auth = useSelector(authSelector);
    const questions = useSelector(questionSelector)

    const [notCompleteQuestions, setNotCompleteQuestions] = useState([]);
    const [completeQuestions, setCompleteQuestions] = useState([]);
    useEffect(() => {
        let notCompletedList = [];
        let completedList = [];
        Object.keys(questions).forEach(key => {
            if (
                questions[key].optionOne.votes.includes(auth.user.id)
                || questions[key].optionOne.votes.includes(auth.user.id)
            ) {
                completedList.push(questions[key]);
            } else {
                notCompletedList.push(questions[key]);
            }
        });

        setNotCompleteQuestions(notCompletedList);
        setCompleteQuestions(completedList);
    }, []);
    return (
        <div>
            <QuestionList
                listTitle="Upcoming Question"
                questionList={notCompleteQuestions.sort((a, b) => a.timestamp - b.timestamp)}
            />
            <QuestionList
                listTitle="Completed Question"
                questionList={completeQuestions.sort((a, b) => a.timestamp - b.timestamp)}
            />
        </div>
    );
}

export default HomePage;
