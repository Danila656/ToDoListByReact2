import React from 'react';
import '../App.css'

const AcceptButton = (props) =>{
        return (
            <a href="# " onClick={props.deliverAcceptOrCancelFunction}
               className={props.status ? "cancel-button" : "accept-button"}>{props.status ? `–` : `✓`}</a>
        )
}

export default AcceptButton;