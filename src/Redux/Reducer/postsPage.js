const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
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
};

export const postsDataReducer = (state = initialState, action) => {
  console.log(state, action, "Reducer");
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        post: state.newPostText,
        dateAdded: "20.21.2000",
        likesCount: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      // this._callSubscribe(this._state);
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      // this._callSubscribe(this._state);
      return state;
    default:
      return state;
  }
};

export const addPostActionCreater = () => ({ type: ADD_POST });

export const uptadeNewPostTextActionCreater = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
