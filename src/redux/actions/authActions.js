import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const registerUser = (email, password) => async (dispatch) => {
  try {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    dispatch({ type: "REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "REGISTER_FAILURE", payload: error.message });
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: "LOGIN_SUCCESS" });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error.message });
  }
};

export const logoutUser = () => (dispatch) => {
  const auth = getAuth();
  auth.signOut();
  dispatch({ type: "LOGOUT" });
};
