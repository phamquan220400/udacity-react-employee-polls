import React from "react";
import QuestionCard from "./QuestionCard";

const QuestionList = (props) => {
    return (
        <div className="container py-4 mt-4">
            <h3 className="text-center mb-4">{props.listTitle}</h3>
            <div className="row border p-4">
                {
                    props.questionList.length !== 0 && props.questionList.map((data, idx) => {
                        return (
                            <QuestionCard key={idx} data={data}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default QuestionList;