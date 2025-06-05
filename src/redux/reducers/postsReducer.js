const initialState = {
  posts: [],
  postDetails: {},
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      console.log("ADD_POST action ricevuta:", action.payload);
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case "FETCH_POST_DETAILS_SUCCESS":
      return {
        ...state,
        postDetails: {
          ...state.postDetails,
          [action.payload.postId]: action.payload.post,
        },
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
