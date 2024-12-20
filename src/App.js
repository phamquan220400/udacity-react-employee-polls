import './App.css';
import React, {useEffect} from "react";
import {Routes, Route, Outlet, useLocation, Navigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import LeaderBoard from "./pages/LeaderBoard";
import NewQuestion from "./pages/NewQuestion";
import {_getUsers, _getQuestions} from "./_DATA";
import * as userAction from "./store/action/userActions";
import * as questionAction from "./store/action/questionAction";
import QuestionDetail from "./pages/QuestionDetail";
import NotFound from "./pages/NotFound";

const questionSelector = (state) => state.question;
const userSelector = (state) => state.user;
const authSelector = (state) => state.auth;

function Auth() {
    let currentLocation = useLocation();
    const auth = useSelector(authSelector) ?? localStorage.getItem('user');

    if (!auth.user) {
        return <Navigate to="/" state={{from: currentLocation}}/>
    }
    return (
        <Menu>
            <Outlet/>
        </Menu>
    )
}

function App() {
    const dispatch = useDispatch();
    const questionState = useSelector(questionSelector);
    const userState = useSelector(userSelector);

    const initData = async () => {
        if (!questionState) {
            const question = await _getQuestions();
            if (question) {
                dispatch(questionAction.setQuestion(question));
            }
        }
        if (!userState) {
            const user = await _getUsers();
            if (user) {
                dispatch(userAction.setUser(user));
            }
        }
    }
    useEffect(() => {
        initData();
    });

    return (
        <Routes>
            <Route path="/" element={<Login/>}>{""}</Route>
            <Route element={<Auth/>}>
                <Route exact path="/home" element={<HomePage/>}/>
                <Route exact path="/leaderboard" element={<LeaderBoard/>}/>
                <Route exact path="/new" element={<NewQuestion/>}/>
                <Route exact path="/question/:questionId" element={<QuestionDetail/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}

export default App;
