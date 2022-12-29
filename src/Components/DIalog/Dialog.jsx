import React from 'react'
import classes from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItems'
import Messages from './DialogsMessage/Dialogsmessages'
// import { TextArea } from './DialogTextArea/textareadialog'
// import { TextAreaContainer } from './DialogsContainer';


const Dialogs = (props) => {
    console.log(props, 'dialogs.jsx')
    let dialogsElements = props.messagesPage.dialogsData.map((dialog) => {
        return <DialogsItem name={dialog.name} id={dialog.id} />
    })

    let messagesElements = props.messagesPage.messagseData.map((message) => {
        return <Messages mes={message.message} id={message.id} />
    })

    console.log(props, 'textare12')
    // let state = props.store.getState()

    let newPostElement = React.createRef()
    let onAddPost = () => {
        // props.store.dispatch(dialogAction1())
        props.addDialog()
        // let text = newPostElement.current.value
        // props.addPost(text)
        // props.dispatch(dialogAction1())
        // props.dispatch('');    
    }

    let onDialogChange = (e) => {
        // let text = newPostElement.current.value;
        // let text = e.target.value
        // let text = newPostElement.current.value
        let text = e.target.value
        props.updateNewDialogText(text)
        // props.store.dispatch(dialogAction(text))
        // props.dispatch(dialogAction(text))
    }
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>
            <div className='Mypostes'>
                <div>
                    <div className='textArea'>
                        <textarea onChange={onDialogChange} ref={newPostElement} value={props.newDialogText} rows='3' cols='30' placeholder='You messages...' />

                    </div>
                    <div>
                        <button onClick={onAddPost} className='btn'>
                            Send
                        </button>
                    </div>
                </div>
            </div>


            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs

// <div div className = { classes.textArea } >
//     <TextAreaContainer
//         store={props.store}
//         newPostText={props.newPostText}
//     />
//         </div >



{/* 
            <div>
                <TextArea dispatch={props.dispatch} newDialogText={props.messagesPage.newDialogText} />
            </div> changeNewDialog={props.changeNewDialog} addDialog={props.addDialog} */}

