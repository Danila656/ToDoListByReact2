import React from 'react';
import '../App.css';
import DeleteButton from './DeleteButton';
import AcceptButton from './AcceptButton';

const Task = (props) => {
    return (
        <div id={props.id} className="task">
            <div className="unit-with-task-info">
                {props.status ?
                    <div className="unit-with-ready-text"><p className="ready-task-name">{props.name}</p></div> :
                    <p className="task-name">{props.name}</p>}
                <div>
                    <p className="add-time">{props.addTime}</p>
                </div>
            </div>
            <div className="unit-with-task-buttons">
                <DeleteButton deliverDeleteFunction={props.deliverDeleteFunction}/>
                <AcceptButton deliverAcceptOrCancelFunction={props.deliverAcceptOrCancelFunction}
                              status={props.status}/>
            </div>
        </div>
    )
}

export default Task;