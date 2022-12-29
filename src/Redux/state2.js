let store = {
  _state: {
    Friends: {
      myFriends: [
        { id: 1, name: "Daniel" },
        { id: 2, name: "Egor" },
      ],
    },
    postsPage: {
      postsData: [
        {
          id: 1,
          post: "Hello guys how are you?",
          dateAdded: "20.06.2010",
          likesCount: "14",
        },
        {
          id: 2,
          post: "Hello guys how are you?",
          dateAdded: "21.08.2020",
          likesCount: "23",
        },
        {
          id: 3,
          post: "Hello it`s my first post",
          dateAdded: "20.02.2019",
          likesCount: "20",
        },
        { id: 4, post: "Hi, have a good time", dateAdded: "20.10.2002" },
        {
          id: 5,
          post: "Hi, how are you?",
          dateAdded: "12.10.2000",
          likesCount: "29",
        },
      ],
      newPostText: "Ismo",
    },
    messagesPage: {
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
    },
  },
  _callSubscriber() {
    console.log("Hello");
  },
  _getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addDialog() {
    let newDialog = {
      id: 5,
      message: this._state.messagesPage.newDialogText,
    };
    this._state.messagesPage.dialogsData.push(newDialog);
    // state.messagesPage.newDialogText = "";
    this._callSubscriber(this._state);
  },
  changeNewDialog(newDialog) {
    this._state.messagesPage.newDialogText = newDialog;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    // {type: "ADD-POST"}
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        post: this._state.newPostText,
        dateAdded: "20.21.2000",
        likesCount: 0,
      };
      this._state.postsPage.postsData.push(newPost);
      this._state.postsPage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.postsPage.newPostText = action.newtext;
      this._callSubscriber(this._state);
    }
  },
};

window.store = store;
export default store;
