import { combineReducers, legacy_createStore } from "redux";
import { postsDataReducer } from "../Reducers/postsPage";
import { messagesPageReducer } from "../Reducers/messagesPage";
import { friendsReducer } from "../Reducers/friendsPage";

const reducers = combineReducers({
  messagesPage: messagesPageReducer,
  postsPage: postsDataReducer,
  Friends: friendsReducer,
});

export let store = legacy_createStore(reducers);
