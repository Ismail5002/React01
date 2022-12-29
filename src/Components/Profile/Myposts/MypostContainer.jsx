// import React from "react";
import './Myposstes.css'
// import classes from './Mypost.module.css'
import { addPostActionCreater, uptadeNewPostTextActionCreater } from "../../../Redux/Reducer/postsPage";
import Myposts from "./Mypost";
// import StoreContext from "../../../storeContext";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        postData: state.postsPage.postsData,
        newPostText: state.postsPage.newPostText,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => { dispatch(addPostActionCreater()) },
        updateNewPostText: (text) => {
            let action = uptadeNewPostTextActionCreater(text)
            dispatch(action)
        }
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default SuperDialogsContainer

// const MypostsContainer = () => {
//     return (
//         <div>
//             <StoreContext.Consumer>
//                 {
//                     (store) => {

//                         // let newPostElement = React.createRef()
//                         let addPost = () => {
//                             console.log(store, 'Mypost3e2')

//                             console.log(store, 'textare121')
//                             store.dispatch(addPostActionCreater())
//                             // let action = addPostActionCreater()
//                             // props.dispatch(action)
//                         }

//                         let onPostChange = (text) => {
//                             let action = uptadeNewPostTextActionCreater(text)
//                             store.dispatch(action)
//                             // let action = uptadeNewPostTextActionCreater(text);
//                             // props.dispatch(action)

//                         }
//                         return (<Myposts addPost={addPost} updateNewPostText={onPostChange} newPostText={store.getState().postsPage.newPostText}
//                             postData={store.getState().postsPage.postsData} />
//                         )
//                     }}
//             </StoreContext.Consumer>
//         </div>
//     )
// }













