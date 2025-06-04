export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILES_SUCCESS = "FETCH_PROFILES_SUCCESS";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

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
