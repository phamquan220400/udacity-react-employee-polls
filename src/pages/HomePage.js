import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const authSelector = (state) => state.auth?.user;
const questionSelector = (state) => state.question;

const HomePage = (props) => {
    const auth = useSelector(authSelector);
    const questions = useSelector(questionSelector)

    const [upcomingQuestions, setUpcomingQuestions] = useState([]);
    const [completeQuestions, setCompleteQuestions] = useState([]);

    useEffect(() => {

    }, []);
    return (
        <div>
            This is home page
        </div>
    );
}

export default HomePage;
