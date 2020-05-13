import React from 'react';
import '../App.css';
import TaskNameWriter from "./TaskNameWriter";
import AddButton from "./AddButton";

const AddUnit = (props) =>{
        return (
            <div>
                <TaskNameWriter deliverCreateNewTaskFunction={props.deliverCreateNewTaskFunction} deliverInput={props.deliverInput}/>
                <AddButton deliverNewTask={props.deliverNewTask}/>
            </div>
        );
}

export default AddUnit;