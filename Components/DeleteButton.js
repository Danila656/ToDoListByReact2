import React from 'react';
import '../App.css'

const DeleteButton = (props) => {
    return (
        <a onClick={props.deliverDeleteFunction} href="# " className="delete-button">&#10008;</a>
    )
}

export default DeleteButton;