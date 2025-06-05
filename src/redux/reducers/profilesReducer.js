import {
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILES_SUCCESS,
  UPDATE_PROFILE_SUCCESS,
  SET_LOADING,
  SET_ERROR,
  UPLOAD_PROFILE_PICTURE_SUCCESS,
  ADD_EXPERIENCE_SUCCESS,
  UPLOAD_EXPERIENCE_IMAGE_SUCCESS,
  SET_EXPERIENCES_SUCCESS,
  FETCH_EXPERIENCES_SUCCESS,
  DELETE_EXPERIENCE_SUCCESS,
} from "../action/index";

const initialState = {
  myProfile: null,
  profiles: [],
  loading: false,
  error: null,
  experiences: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true, error: null };
    case SET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case FETCH_PROFILE_SUCCESS:
      return { ...state, loading: false, myProfile: action.payload, experiences: action.payload.experiences || [] };
    case FETCH_PROFILES_SUCCESS:
      return { ...state, loading: false, profiles: action.payload };
    case UPDATE_PROFILE_SUCCESS:
      return { ...state, loading: false, myProfile: action.payload };
    case UPLOAD_PROFILE_PICTURE_SUCCESS:
      return { ...state, loading: false, error: null, myProfile: action.payload };
    case ADD_EXPERIENCE_SUCCESS:
      return {
        ...state,
        experiences: [...(state.experiences || []), action.payload],
        loading: false,
      };
    case FETCH_EXPERIENCES_SUCCESS:
      return {
        ...state,
        experiences: action.payload,
      };
    case DELETE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        experiences: state.experiences.filter((exp) => exp._id !== action.payload),
        loading: false,
      };

    case UPLOAD_EXPERIENCE_IMAGE_SUCCESS:
      return {
        ...state,
        experiences: state.experiences.map((exp) => (exp._id === action.payload._id ? action.payload : exp)),
        loading: false,
      };
    case SET_EXPERIENCES_SUCCESS:
      return {
        ...state,
        experiences: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
