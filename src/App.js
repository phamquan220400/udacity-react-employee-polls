import './App.css';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./pages/Login";

function App() {
    return (<Router>
            <Routes>
                <Route path={"/login"} element={Login}/>
            </Routes>
        </Router>
    );
}

export default App;
