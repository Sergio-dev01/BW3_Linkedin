import { combineReducers } from "redux";
import profileReducer from "./profilesReducer";
import postsReducer from "./postsReducer";
import jobsReducer from "./jobsReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  posts: postsReducer,
  jobs: jobsReducer,
});

export default rootReducer;
