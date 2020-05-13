import React from 'react';
import '../App.css';
import DeleteAllTasksButton from './DeleteAllTasksButton';
import DeleteReadyTasksButton from './DeleteReadyTasksButton';

const UnitWithDeleteButtons = (props) =>{
        return (
            <div className="unit-with-delete-buttons">
                <DeleteAllTasksButton deliverDeleteAllTasksFunction={props.deliverDeleteAllTasksFunction}/>
                <DeleteReadyTasksButton deliverDeleteReadyTasksFunction={props.deliverDeleteReadyTasksFunction}/>
            </div>
        )
}

export default UnitWithDeleteButtons;