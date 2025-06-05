import { combineReducers } from "redux";
import profileReducer from "./profilesReducer";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  posts: postsReducer,
});

export default rootReducer;
