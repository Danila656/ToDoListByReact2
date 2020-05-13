import React from 'react';
import '../App.css';
import Task from './Task';

const TaskList = (props) => {
    return (
        <div className="task-list">
            {props.arrayWithTasksInfo.map((item) => {
                    return <Task key={item.taskId}
                                 deliverDeleteFunction={props.deliverDeleteFunction}
                                 deliverAcceptOrCancelFunction={props.deliverAcceptOrCancelFunction}
                                 name={item.taskName}
                                 id={item.taskId}
                                 status={item.taskStatus}
                                 addTime={item.addTime}/>;
                }
            )}
        </div>
    );
}

export default TaskList;