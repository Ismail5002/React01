import React from "react";
import classes from './bestFriend.module.css'


const BestFriends = (props) => {
    return (
        <div>
            <div className={classes.bestFr}>{props.name} </div>
        </div>
    )
}


export default BestFriends





