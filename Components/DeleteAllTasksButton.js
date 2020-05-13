import React from 'react';
import '../App.css';

const DeleteAllTasksButton = (props) => {
    return (
        <a href="# " onClick={props.deliverDeleteAllTasksFunction} className="delete-all-tasks-button">Delete
            all tasks</a>
    );
}

export default DeleteAllTasksButton;