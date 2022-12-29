import React from "react";
// import classes from './Post.module.css'
import ProfileImage from "./PostImage";

const Mypostes = (props) => {



    return (
        <div>

            <ProfileImage />
            {props.message} - {props.dateAdded}
            <div>
                <like>like</like> {props.likesCount}
            </div>

        </div>



    )
}

export default Mypostes  