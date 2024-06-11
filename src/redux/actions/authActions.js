import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("/api/auth/login", { email, password });
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
  }
};

export const register = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("/api/auth/register", {
      email,
      password,
    });
    dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
  }
};
