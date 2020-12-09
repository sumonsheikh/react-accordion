import React from 'react';
import SingleQuestion from './SingleQuestion';

const  Questions = ({showQuestions}) => {
    return (
        <section>
            {showQuestions.map((question) =>{
                return(
                    <SingleQuestion key={question.id} {...question} />
                );
            })}
        </section>
    )
}
export default Questions;