import React from "react";
import Mypostes from "./Mypostes";
import './Myposstes.css'
import classes from './Mypost.module.css'
import { addPostActionCreater, uptadeNewPostTextActionCreater } from "../../../Redux/Reducer/postsPage";


const Myposts = (props) => {
    console.log(props, 'Mypost')

    let postElement = props.postData.map((post) => {
        return <Mypostes message={post.post} id={post.id}
            dateAdded={post.dateAdded} likesCount={post.likesCount} />
    })
    console.log(props, 'textareaa')

    let newPostElement = React.createRef()
    let onAddPost = () => {
        console.log(props, 'textare1')
        props.addPost()
        // let action = addPostActionCreater()
        // props.dispatch(action)
        // props.dispatch(addPostActionCreater())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        // let text = newPostElement.current.value;
        // let action = uptadeNewPostTextActionCreater(text);
        // props.dispatch(action)
        // let action = uptadeNewPostTextActionCreater(text)
        // props.dispatch(action)
    }
    return (
        <div>
            <div className='Mypostes'>


                <div>
                    <h2> My posts</h2>
                </div>
                <div>
                    <div className={classes.textarea}>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} rows='3' cols='50' placeholder='You news...' />

                    </div>
                    <div>
                        <button onClick={onAddPost} className={classes.btn}>
                            Send
                        </button>
                    </div>
                </div>
                <div className={classes.posts}>
                    {postElement}
                </div>
            </div >

        </div>




    )
}













export default Myposts
