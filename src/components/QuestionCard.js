import React from "react";
import {Link} from "react-router-dom";

const QuestionCard = (props) => {
    let data = props.data;
    const time = (time) => {
        const date = new Date(time);
        return date.toLocaleTimeString() + ' | ' + date.toLocaleDateString();
    }
    return (
        <div className="card container m-2 col-3 border align-items-center">
            <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">{data.author}</h5>
                <p className="card-text">{time(data.timestamp)}</p>
                <Link className="btn btn-primary" to={`/question/${data.id}`}>Show</Link>
            </div>
        </div>
    );
}

export default QuestionCard;