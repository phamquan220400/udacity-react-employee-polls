import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import QuestionList from "../components/QuestionList";
import {Tab} from "react-bootstrap";
import {Tabs} from "react-bootstrap";

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
                || Object.keys(auth.user.answers).includes(key)
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
        <div className="mt-4">
            <Tabs defaultActiveKey="upcoming" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="upcoming" title="Upcoming Questions">
                    <div className="upcoming">
                        <div className="upcoming">
                            {
                                (notCompleteQuestions.length == 0)
                                    ?
                                    <h3>You answered all poll</h3>
                                    :
                                    <QuestionList
                                        listTitle="Upcoming Question"
                                        questionList={notCompleteQuestions.sort((a, b) => a.timestamp - b.timestamp)}
                                    />
                            }
                        </div>
                        {} </div>
                </Tab>
                <Tab eventKey="completed" title="Completed Questions">
                    <div className="completed">
                        <div className="completed">
                            {
                                (completeQuestions.length == 0)
                                    ?
                                    <h3>You did not answered any poll</h3>
                                    : <QuestionList
                                        listTitle="Completed Question"
                                        questionList={completeQuestions.sort((a, b) => a.timestamp - b.timestamp)}
                                    />
                            }
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default HomePage;
