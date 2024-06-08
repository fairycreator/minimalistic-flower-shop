// src/redux/actions/productActions.js
import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5001/api/products");
    dispatch({ type: "FETCH_PRODUCTS", payload: res.data });
  } catch (error) {
    console.error("Error fetching products", error);
  }
};
