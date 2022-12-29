// import React from "react"
import { dialogAction, dialogAction1 } from "../../Redux/Reducer/messagesPage"
// import { TextArea } from "./DialogTextArea/textareadialog"
// import { uptadeNewPostTextActionCreater } from '../../Redux/Reducer/postsPage';
// import StoreContext from "../../storeContext";
// import Myposts from '../Profile/Myposts/Mypost';
import Dialogs from './Dialog'
// import { TextAreaContainer } from './DialogsContainer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newDialogText: state.messagesPage.newDialogText,

    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        addDialog: () => {
            dispatch(dialogAction1())
        },
        updateNewDialogText: (text) => {
            let action = dialogAction(text)
            dispatch(action)
        }
    }
}

const TextAreaContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


// export const TextAreaContainer = () => {

//     return (
//         <div>
//             <StoreContext.Consumer>
//                 {
//                     (store) => {
//                         // let state = props.store.getState()

//                         // let newPostElement = React.createRef()
//                         let onAddPost = () => {
//                             store.dispatch(dialogAction1())
//                             // props.addPost()
//                             // let text = newPostElement.current.value
//                             // props.addPost(text)
//                             // props.dispatch(dialogAction1())
//                             // props.dispatch('');    
//                         }
//                         let onDialogChange = (text) => {
//                             // let text = newPostElement.current.value;
//                             // let text = e.target.value
//                             // let text = newPostElement.current.value
//                             // props.updateNewPostText(text)
//                             // props.store.dispatch(dialogAction(text))
//                             // props.dispatch(dialogAction(text))
//                             let action = dialogAction(text)
//                             store.dispatch(action)
//                             // props.dispatch(dialogAction(text))
//                         }
//                         return (<Dialogs newDialogText={store.getState().messagesPage.newDialogText}
//                             updateNewDialogText={onDialogChange}
//                             addDialog={onAddPost}
//                             messagesPage={store.getState().messagesPage} dialogsData={store.getState().messagesPage.dialogsData}
//                             messagseData={store.getState().messagesPage.messagseData} />
//                         )
//                     }}

//             </StoreContext.Consumer>

//         </div >
//     )
// }


export default TextAreaContainer
// messagesPage