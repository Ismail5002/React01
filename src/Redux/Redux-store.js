import { combineReducers, legacy_createStore as createStore } from "redux";
import { postsDataReducer } from "./Reducer/postsPage";
import { messagesPageReducer } from "./Reducer/messagesPage";
import { friendsReducer } from "./Reducer/friendsReducer";

export let reducers = combineReducers({
  messagesPage: messagesPageReducer,
  postsPage: postsDataReducer,
  Friends: friendsReducer,
});

let store = createStore(reducers);

export default store;
