const SEND_DIALOG = "ADD-DIALOG";
const UPDATE_NEW_DIALOG = "UPDATE-NEW-DIALOG-TEXT";

let initialState = {
  dialogsData: [
    { id: 1, name: "Ismail" },
    { id: 2, name: "Daniel" },
    { id: 3, name: "Sashaa" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Egor" },
  ],
  messagseData: [
    { id: 1, message: "HI" },
    { id: 2, message: "How are you doing" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Hello" },
    { id: 5, message: "Hi bro" },
  ],
  newDialogText: "Hi",
};
export const messagesPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_DIALOG:
      let newDialog = {
        id: 5,
        message: state.newDialogText,
      };
      state.messagseData.push(newDialog);
      state.newDialogText = "";
      // this._callSubscribe(state);
      return state;
    case UPDATE_NEW_DIALOG:
      state.newDialogText = action.newDialog;
      // this._callSubscribe(state);
      return state;
    default:
      return state;
  }
};
export const dialogAction1 = () => ({ type: SEND_DIALOG });
export const dialogAction = (text) => ({
  type: UPDATE_NEW_DIALOG,
  newDialog: text,
});

// export const messagesPageReducer = (state = initialState, action) => {
//   if (action.type === SEND_DIALOG) {
//     let newDialog = {
//       id: 5,
//       message: state.newDialogText,
//     };
//     state.messagseData.push(newDialog);
//     state.newDialogText = "";
//     // this._callSubscribe(state);
//   } else if (action.type === UPDATE_NEW_DIALOG) {
//     state.newDialogText = action.newDialog;
//     // this._callSubscribe(state);
//   }
//   return state
// };
