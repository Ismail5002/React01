import React from "react";
import classes from './DialogsItems.module.css'
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}


export default DialogsItem