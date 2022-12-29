let state = {
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
};
window.state = state;

let rerenderEntireTree = () => {
  console.log("Hello");
};

export const addPost = () => {
  let newpost = {
    id: 5,
    post: state.postsPage.newPostText,
    dateAdded: "21.10.2000",
    likesCount: 0,
  };
  state.postsPage.postsData.push(newpost);
  state.postsPage.newPostText = "";
  rerenderEntireTree(state);
};

export const changeNewPost = (newtext) => {
  state.postsPage.newPostText = newtext;
  rerenderEntireTree(state);
};
export const addDialog = () => {
  let newDialog = {
    id: 5,
    message: state.messagesPage.newDialogText,
  };
  state.messagesPage.dialogsData.push(newDialog);
  // state.messagesPage.newDialogText = "";
  rerenderEntireTree(state);
};
export const changeNewDialog = (newDialog) => {
  state.messagesPage.newDialogText = newDialog;
  rerenderEntireTree(state);
};
export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
