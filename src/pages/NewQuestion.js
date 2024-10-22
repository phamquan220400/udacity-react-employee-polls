import React, {useState} from "react";
import {_saveQuestion as save} from "../_DATA";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setQuestion} from "../store/action/questionAction";
import {setUser} from "../store/action/userActions";

const authSelect = (state) => state.auth;
const userSelect = (state) => state.user;
const questionSelect = (state) => state.question;

const NewQuestion = (props) => {
    const [message, setMessage] = useState("");
    const [firstOption, setFirstOption] = useState();
    const [secondOption, setSecondOption] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(authSelect);
    const question = useSelector(questionSelect);
    const user = useSelector(userSelect);

    const handleCreatePoll = () => {
        if (!firstOption || !secondOption) {
            setMessage("Please fill all options");
            return;
        }
        let questionSaveData = {
            optionOneText: firstOption,
            optionTwoText: secondOption,
            author: auth.user.id
        };
        save(questionSaveData)
            .then(res => {
                debugger
                if (res) {
                    const newQuestion = {...question, [res.id]: res};
                    dispatch(setQuestion(newQuestion));
                    const newUserData = {
                        ...user,
                        [res.author]: {
                            ...user[res.author],
                            questions: [...user[res.author].questions, res.id],
                        }
                    };
                    dispatch(setUser(newUserData));
                    navigate("/home");
                }
            })
            .catch(error => {
                setMessage("Cannot create poll: " + error);
            });
    }

    return (
        <div className="container">
            <h3 className="text-center">Create your poll</h3>
                <div className="form-group">
                    <span className="text-danger">{message}</span>
                </div>
                <div className="form-group">
                    <label className="form-label" form="firstOption">Option 1</label>
                    <input type="text"
                           className="form-control"
                           id="firstOption"
                           placeholder="First Option"
                           onChange={e => setFirstOption(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" form="secondOption">Option 2</label>
                    <input type="text"
                           className="form-control"
                           id="secondOption"
                           placeholder="Second Option"
                           onChange={e => setSecondOption(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2 mb-2" onClick={handleCreatePoll}>Create poll
                </button>
        </div>
    );
}

export default NewQuestion;