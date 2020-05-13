import React from 'react';
import '../App.css';

const DeleteReadyTasksButton = (props) => {
    return (
        <a href="# " onClick={props.deliverDeleteReadyTasksFunction} className="delete-ready-tasks-button">Delete
            ready tasks</a>
    );
}

export default DeleteReadyTasksButton;