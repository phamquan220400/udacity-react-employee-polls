import './App.css';
import {Routes, BrowserRouter as Router, Route, Outlet} from 'react-router-dom'
import Login from "./pages/Login";
import {Provider} from "react-redux";
import store from "./store/store";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";

function Auth(){
    return (<Menu><Outlet/></Menu>)
}

function App() {
    return (
        <Provider store={store}>

            <Router>
                <Routes>
                    <Route element={<Auth/>}>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/home" element={<HomePage/>}/>
                    </Route>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
