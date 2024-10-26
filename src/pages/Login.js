import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setAuth} from "../store/action/authAction";
import {useLocation, useNavigate} from "react-router-dom";
import * as API from "../_DATA"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();
    const {state} = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        if (!username) {
            setError('Username must have value');
            return;
        }
        if (!password) {
            setError('Password must have value');
            return;
        }

        API.login({username, password}).then(res => {
            if (res && res.data) {
                dispatch(setAuth(res.data))
                localStorage.setItem('user', JSON.stringify(res.data));
                navigate(state.from.pathName ?? '/home');
            }
        }).catch(error => {
            setError(error);
        });
    };

    useEffect(() => {
        if (auth && auth.user) {
            navigate("/home");
        }
    }, [auth, navigate]);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Login Page</h1>
            <div className="row justify-content-center">
                <h3 className="text-danger row justify-content-center">{error}</h3>
                <div className="col-md-4">
                    <form>
                        <div className="form-group mt-2">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                data-testid="username"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                data-testid="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={handleLogin}
                            type="submit"
                            className="btn btn-primary btn-block mt-2"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
