import React from "react";
import { postsDataReducer } from "./Reducer/postsPage";
import { friendsReducer } from "./Reducer/friendsReducer";
import { messagesPageReducer } from "./Reducer/messagesPage";

// import { ftruncate } from "fs";
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
        {
          id: 4,
          post: "Hi, have a good time",
          likesCount: "10",
          dateAdded: "20.10.2002",
        },
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
  subscribe(observer) {
    this._callSubscribe = observer;
  },

  getState() {
    return this._state;
  },
  _callSubscribe() {
    console.log("Hello");
  },
  dispatch(action) {
    this._state.postsPage = postsDataReducer(this._state.postsPage, action);
    this._state.messagesPage = messagesPageReducer(
      this._state.messagesPage,
      action
    );
    this._state.Friends = friendsReducer(this._state.Friends, action);
    this._callSubscribe(this._state);
  },
};

window.store = store;
export default store;

// addPost() {
//   let newpost = {
//     id: 5,
//     post: this._state.postsPage.newPostText,
//     dateAdded: "21.10.2000",
//     likesCount: 0,
//   };
//   this._state.postsPage.postsData.push(newpost);
//   this._state.postsPage.newPostText = "";
//   this._callSubscribe(this._state);
// },
// changeNewPost(newtext) {
//   this._state.postsPage.newPostText = newtext;
//   this._callSubscribe(this._state);
// },
