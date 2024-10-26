import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

const userSelect = state => state.user;
const LeaderBoard = () => {
    const [userList, setUserList] = useState([]);
    const users = useSelector(userSelect);
    useEffect(() => {
        if (users) {
            let userListData = [];
            Object.keys(users).forEach(key => {
                let user = users[key];
                userListData.push(user);
                userListData.sort((a, b) => {
                    const aDataSort = Object.keys(a.answers).length + a.questions.length;
                    const bDataSort = Object.keys(b.answers).length + b.questions.length;
                    if (aDataSort > bDataSort) {
                        return -1;
                    } else {
                        return 1
                    }
                });
            })
            setUserList(userListData)
        }
    }, []);
    return (
        <table className="table text-center">
            <thead>
            <tr>
                <th scope="col">User</th>
                <th scope="col">Answers</th>
                <th scope="col">Questions Created</th>
            </tr>
            </thead>
            <tbody>
            {
                userList.map(user => {
                    return (
                        <tr key={user.id}>
                            <td className="d-flex flex-row align-items-center">
                                <img
                                    src={user.avatarURL}
                                    alt={user.name} width="50" height="50"
                                    className="bg-primary mx-3 rounded-circle"
                                />
                                <div className="d-flex flex-column align-items-start">
                                    <p>{user.name}</p>
                                    <small>{user.id}</small>
                                </div>
                            </td>
                            <td>{Object.keys(user.answers).length}</td>
                            <td>{user.questions.length}</td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    );
}

export default LeaderBoard;