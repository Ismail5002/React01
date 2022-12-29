let store = {
  _state: {
    Friends: '1'
    },
    postsPage: "1",
    messagesPage: "1",
},

  rerenderEntireTree() {
    console.log("Hello");
  };

  addPost() {
    let newpost = {
      id: 5,
      post: this._state.postsPage.newPostText,
      dateAdded: "21.10.2000",
      likesCount: 0,
    };
    this._state.postsPage.postsData.push(newpost);
    this._state.postsPage.newPostText = "";
    this.rerenderEntireTree(this._state);
  },

  changeNewPost(newtext) {
    this._state.postsPage.newPostText = newtext;
    this.rerenderEntireTree(this._state);
  },
  addDialog() {
    let newDialog = {
      id: 5,
      message: this._state.messagesPage.newDialogText,
    };
    this._state.messagesPage.dialogsData.push(newDialog);
    // state.messagesPage.newDialogText = "";
    this.rerenderEntireTree(this._state);
  },
  changeNewDialog(newDialog) {
    this._state.messagesPage.newDialogText = newDialog;
    this.rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
};

export default store;
