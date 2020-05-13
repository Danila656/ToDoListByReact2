import React from 'react';
import '../App.css';

const TaskNameWriter = (props) => {
    const checkKeyCode = (event) => {
        props.deliverInput(event);
        if (event.keyCode === 13) {
            props.deliverCreateNewTaskFunction();
        }
    }

    return (
        <input onKeyUp={(event) => checkKeyCode(event)} />
    );
}

export default TaskNameWriter;