import './App.css';
import React, {useEffect} from "react";
import {Routes, Route, Outlet, useLocation, Navigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import LeaderBoard from "./pages/LeaderBoard";
import NewQuestion from "./pages/NewQuestion";
import * as data from "./_DATA";
import * as userAction from "./store/action/userActions";
import * as questionAction from "./store/action/questionAction";

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
            const question = await data._getQuestions();
            if (question) {
                dispatch(questionAction.setQuestion(question));
            }
        }
        if (!userState) {
            const user = await data._getUsers();
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
            <Route path="/" element={<Login/>}>
                {""}
            </Route>
            <Route element={<Auth/>}>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/leaderboard" element={<LeaderBoard/>}/>
                <Route path="/new" element={<NewQuestion/>}/>
            </Route>
        </Routes>
    );
}

export default App;
