import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout as logoutAction} from "../store/action/authAction";

const selectAuth = state => state.auth;
const Menu = ({children}) => {
    const navBarItems = [
        {
            id: 'home',
            text: "Home",
            link: "/home"
        },
        {
            id: 'leaderBoard',
            text: "Leader Board",
            link: "/leaderboard"
        },
        {
            id: 'newQuestion',
            text: "New Question",
            link: "/new"
        },
    ];
    const data = useSelector(selectAuth);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutAction())
    }

    return (
        <div className="container">
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="d-flex collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            {navBarItems.map(item => {
                                return (
                                    <li className="nav-item" key={item.id}>
                                        <Link to={item.link} className="nav-link">{item.text}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="d-flex align-baseline nav-item align-items-center">
                            <img src={data.user.avatarURL} alt={data.user.name} width="50" height="50"
                                 className="bg-primary rounded-circle mx-2"/>
                            <span className="mx-2">{data.user.name}</span>
                            <button className="btn btn-primary mx-2" onClick={logout}>Logout</button>
                        </div>
                    </div>
                </nav>
            </header>
            <div>{children}</div>
        </div>
    );
}

export default Menu;