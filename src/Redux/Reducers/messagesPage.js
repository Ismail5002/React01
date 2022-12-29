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
        id: 6,
        message: state.newDialogText,
      };
      state.messagseData.push(newDialog);
      state.newDialogText = "";
      return state;
    case UPDATE_NEW_DIALOG:
      state.newDialogText = action.newDialog;
      return state;
    default:
      return state;
  }
};

export const addDialog = () => ({ type: SEND_DIALOG });
export const UPDATENEWDIALOG = (text) => ({
  type: UPDATE_NEW_DIALOG,
  newDialog: text,
});
