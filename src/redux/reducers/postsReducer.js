const initialState = {
  posts: [],
  postDetails: {},
  loading: false,
  error: null,
  commentsLoading: false,
  commentsError: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "ADD_POST_SUCCESS":
      console.log("ADD_POST_SUCCESS action ricevuta:", action.payload);
      return {
        ...state,
        loading: false,
        posts: [action.payload, ...state.posts],
      };
    case "ADD_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "SET_POSTS_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "FETCH_COMMENTS_REQUEST":
      return {
        ...state,
        commentsLoading: true,
        commentsError: null,
      };
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        commentsLoading: false,
        postDetails: {
          ...state.postDetails,
          [action.payload.postId]: {
            ...(state.postDetails[action.payload.postId] || {}),
            comments: action.payload.comments,
          },
        },
      };
    case "FETCH_COMMENTS_FAILURE":
      return {
        ...state,
        commentsLoading: false,
        commentsError: action.payload,
      };

    case "FETCH_POST_DETAILS_SUCCESS":
      return {
        ...state,
        postDetails: {
          ...state.postDetails,
          [action.payload.postId]: action.payload.post,
        },
      };

    default:
      return state;
  }
};

export default postsReducer;
