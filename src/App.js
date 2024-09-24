import './App.css';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./pages/Login";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
