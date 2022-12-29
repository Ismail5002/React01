import React from 'react'
import classes from '../Dialogs.module.css'




const Messages = (props) => {
    return (
        <div>
            <div className={classes.dialog}>{props.mes}</div>
        </div >
    )
}

export default Messages


