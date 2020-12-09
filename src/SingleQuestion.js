import React, {useState} from 'react';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';

const SingleQuestion = ({id,title,info}) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="singleQuestion">
            <section>
                <h4 className="qsn-title">{title}</h4>
                <button className="btn-toggle" onClick={()=> setShowInfo(!showInfo)}>
                    {showInfo ? <AiOutlineMinusCircle/> : <AiOutlinePlusCircle/>}
                </button>
                {showInfo &&  <p>{info}</p>}
            </section>
            
           
            
        </article>
    )
}

export default SingleQuestion;