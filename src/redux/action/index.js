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

const baseUrl = "https://striveschool-api.herokuapp.com/api/profile";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYmIxNGIxMGJmMDAwMTVjZjIyYTciLCJpYXQiOjE3NDkwMjgxMzYsImV4cCI6MTc1MDIzNzczNn0.XFqECEDgMz_5gm4UrksLxQCBUPU4x3HVpVwkiOADh-E";

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

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
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
