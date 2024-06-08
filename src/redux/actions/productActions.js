import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("/api/products");
  dispatch({ type: "FETCH_PRODUCTS", payload: res.data });
};
