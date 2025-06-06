export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILES_SUCCESS = "FETCH_PROFILES_SUCCESS";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const ADD_POST = "ADD_POST";
export const UPLOAD_PROFILE_PICTURE_SUCCESS = "UPLOAD_PROFILE_PICTURE_SUCCESS";
export const ADD_EXPERIENCE_SUCCESS = "ADD_EXPERIENCE_SUCCESS";
export const UPLOAD_EXPERIENCE_IMAGE_SUCCESS = "UPLOAD_EXPERIENCE_IMAGE_SUCCESS";
export const SET_EXPERIENCES_SUCCESS = "SET_EXPERIENCES_SUCCESS";
export const FETCH_EXPERIENCES_SUCCESS = "FETCH_EXPERIENCES_SUCCESS";
export const DELETE_EXPERIENCE_SUCCESS = "DELETE_EXPERIENCE_SUCCESS";
export const SET_POSTS_LOADING = "SET_POSTS_LOADING";
export const SET_ADD_POSTS_SUCCESS = "SET_ADD_POSTS_SUCCESS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const SET_POSTS_ERROR = "SET_POSTS_ERROR";

const baseUrl = "https://striveschool-api.herokuapp.com/api/profile";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODQyYzc5NDM3MTg2MjAwMTVhZjFkY2QiLCJpYXQiOjE3NDkyMDY5MzMsImV4cCI6MTc1MDQxNjUzM30.qdU84WYqbALkPCFlPtA4dBMEOv5otGzwXPQ50Gu5uQc";

export const fetchMyProfile = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const response = await fetch(`${baseUrl}/me`, {
      headers: {
        Authorization: token,
      },
    });
    if (!response.ok) throw new Error("Errore nel recupero del profilo");
    const data = await response.json();
    dispatch({ type: FETCH_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const fetchAllProfiles = () => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const response = await fetch(baseUrl, {
      headers: {
        Authorization: token,
      },
    });
    const data = await response.json();
    console.log("Fetched profiles:", data);
    dispatch({ type: FETCH_PROFILES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const updateProfile = (profileData) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const response = await fetch(baseUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(profileData),
    });
    const data = await response.json();
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const addPost = (postData) => {
  return async (dispatch) => {
    dispatch({ type: "ADD_POST_REQUEST" });

    try {
      const token =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODQyYzc5NDM3MTg2MjAwMTVhZjFkY2QiLCJpYXQiOjE3NDkyMDY5MzMsImV4cCI6MTc1MDQxNjUzM30.qdU84WYqbALkPCFlPtA4dBMEOv5otGzwXPQ50Gu5uQc";

      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) throw new Error("Errore nella creazione del post");

      const data = await response.json();
      dispatch({ type: "ADD_POST_SUCCESS", payload: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: "ADD_POST_FAILURE", payload: error.message });
    }
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: "SET_POSTS_LOADING" });
    try {
      const token =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODQyYzc5NDM3MTg2MjAwMTVhZjFkY2QiLCJpYXQiOjE3NDkyMDY5MzMsImV4cCI6MTc1MDQxNjUzM30.qdU84WYqbALkPCFlPtA4dBMEOv5otGzwXPQ50Gu5uQc";

      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (!response.ok) throw new Error("Errore nel recupero dei post");

      let data = await response.json();

      data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

      console.log("Dati fetchati ordinati:", data);
      dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message });
    }
  };
};

export const fetchPostComments = (elementId) => {
  return async (dispatch) => {
    try {
      console.log(`Fetching comments from URL: https://striveschool-api.herokuapp.com/api/comments/`);

      const token =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODQyYzc5NDM3MTg2MjAwMTVhZjFkY2QiLCJpYXQiOjE3NDkyMDY5MzMsImV4cCI6MTc1MDQxNjUzM30.qdU84WYqbALkPCFlPtA4dBMEOv5otGzwXPQ50Gu5uQc";

      // Fetch TUTTI i commenti (non per singolo post,endpoint con {elementId non disponibile})
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (!response.ok) {
        throw new Error(`Errore nel recupero dei commenti`);
      }

      let comments = await response.json();

      // Filtro solo i commenti di questo post
      const filteredComments = comments.filter((comment) => comment.elementId === elementId);

      // Ordino dal più recente al più vecchio
      filteredComments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      console.log("Commenti ordinati per post", elementId, filteredComments);

      dispatch({ type: "FETCH_COMMENTS_SUCCESS", payload: { postId: elementId, comments: filteredComments } });
    } catch (error) {
      console.error("Errore nel fetch dei commenti:", error);
    }
  };
};

export const addComment = (postId, commentText) => {
  return async (dispatch) => {
    try {
      const token =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODQyYzc5NDM3MTg2MjAwMTVhZjFkY2QiLCJpYXQiOjE3NDkyMDY5MzMsImV4cCI6MTc1MDQxNjUzM30.qdU84WYqbALkPCFlPtA4dBMEOv5otGzwXPQ50Gu5uQc";

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          comment: commentText,
          rate: 5,
          elementId: postId,
        }),
      });

      if (!response.ok) {
        throw new Error("Errore nell'aggiunta del commento");
      }

      const newComment = await response.json();
      console.log("Nuovo commento creato:", newComment);

      dispatch(fetchPostComments(postId));
    } catch (error) {
      console.error("Errore nell'aggiunta del commento:", error);
    }
  };
};

export const uploadProfilePicture = (file) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const formData = new FormData();
    formData.append("profile", file);

    const response = await fetch(`${baseUrl}/me/picture`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Errore nel caricamento dell'immagine");
    }

    const profileRes = await fetch(`${baseUrl}/me`, {
      headers: {
        Authorization: token,
      },
    });

    const updatedProfile = await profileRes.json();

    dispatch({ type: UPLOAD_PROFILE_PICTURE_SUCCESS, payload: updatedProfile });
    dispatch({ type: FETCH_PROFILE_SUCCESS, payload: updatedProfile });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const createExperience = (userId, experienceData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/${userId}/experiences`, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(experienceData),
      });

      if (!response.ok) throw new Error("Errore nella creazione dell'esperienza");

      const data = await response.json();
      dispatch({ type: ADD_EXPERIENCE_SUCCESS, payload: data });

      return data;
    } catch (error) {
      console.error("Errore nella createExperience:", error);
      dispatch({ type: SET_ERROR, payload: error.message });
      return null;
    }
  };
};

export const uploadExperienceImage = (userId, expId, file) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("experience", file);

    const res = await fetch(`${baseUrl}/${userId}/experiences/${expId}/picture`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: formData,
    });

    if (!res.ok) throw new Error("Errore nel caricamento dell’immagine esperienza");

    const updated = await res.json();

    dispatch({ type: "UPLOAD_EXPERIENCE_IMAGE_SUCCESS", payload: updated });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const fetchExperiences = (userId) => async (dispatch) => {
  dispatch({ type: SET_LOADING });
  try {
    const response = await fetch(`${baseUrl}/${userId}/experiences`, {
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) throw new Error("Errore nel recupero delle esperienze");

    const data = await response.json();
    dispatch({ type: FETCH_EXPERIENCES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};

export const deleteExperience = (userId, expId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/${userId}/experiences/${expId}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Errore API DELETE:", errorData);
        throw new Error("Errore nella cancellazione dell'esperienza");
      }

      dispatch({ type: "DELETE_EXPERIENCE_SUCCESS", payload: expId });
    } catch (error) {
      console.error("Errore fetch DELETE:", error);
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  };
};

export const fetchJobs = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_JOBS_REQUEST" });

    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs");
      if (!response.ok) throw new Error("Errore nel recupero dei lavori");

      const data = await response.json();

      dispatch({
        type: "FETCH_JOBS_SUCCESS",
        payload: data.data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_JOBS_FAILURE",
        payload: error.message,
      });
    }
  };
};
