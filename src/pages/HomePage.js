import {useSelector} from "react-redux";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from "./Login";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";


const auth = (state) => state.auth?.user;
const question = (state) => state.question;

const HomePage = (props) => {
    return (
        <div>This is home page</div>
    );
}

export default HomePage;
