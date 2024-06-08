import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/products");
    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: res.data });
  } catch (error) {
    console.error("Error fetching products", error);
    dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.message });
  }
};
