import React from 'react';
import '../App.css';

const AddButton = (props) => {
    return (
        <a href="# " onClick={props.deliverNewTask} className="add-button">Add</a>
    );
}

export default AddButton