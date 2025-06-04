import { FETCH_PROFILE_SUCCESS, FETCH_PROFILES_SUCCESS, UPDATE_PROFILE_SUCCESS, SET_LOADING, SET_ERROR } from "../action/index";

const initialState = {
  myProfile: null,
  profiles: [],
  loading: false,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true, error: null };
    case SET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_PROFILE_SUCCESS:
      return { ...state, loading: false, myProfile: action.payload };
    case FETCH_PROFILES_SUCCESS:
      return { ...state, loading: false, profiles: action.payload };
    case UPDATE_PROFILE_SUCCESS:
      return { ...state, loading: false, myProfile: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
