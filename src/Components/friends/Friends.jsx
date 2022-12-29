import React from "react"
import classes from './friends.module.css'
import BestFriendss from "./bestFriends"





const BestFriends = (props) => {


    let friendsELements =
        props.state.myFriends.map((friends) => {
            return <BestFriendss name={friends.name} />
        })

    return (
        <div className={classes.item}>
            {friendsELements}
        </div>
    )
}


export default BestFriends