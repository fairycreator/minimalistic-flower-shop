import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/products");
    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error.response.data });
  }
};

export const fetchProductDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/products/${id}`);
    dispatch({ type: "FETCH_PRODUCT_DETAILS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({
      type: "FETCH_PRODUCT_DETAILS_FAILURE",
      payload: error.response.data,
    });
  }
};
