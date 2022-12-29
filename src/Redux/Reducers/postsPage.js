const addPost = "ADD-POST";
const uptadenewposttext = "UPDATE-NEW-POST-TEXT";

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
  switch (action.type) {
    case addPost:
      let newPost = {
        id: 5,
        post: state.newPostText,
        dateAdded: "20.01.2000",
        likesCount: "10",
      };

      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case uptadenewposttext:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreater = () => ({
  type: addPost,
});

export const uptadenewposttexts = (text) => ({
  type: uptadenewposttext,
  newText: text,
});
