import './App.css';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./pages/Login";
import {Provider} from "react-redux";
import store from "./store/store";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/home" element={<HomePage/>}/>

                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
