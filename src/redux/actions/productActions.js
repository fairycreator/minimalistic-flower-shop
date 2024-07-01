import axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCT_DETAIL_SUCCESS = "FETCH_PRODUCT_DETAIL_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const FETCH_PRODUCT_DETAIL_FAILURE = "FETCH_PRODUCT_DETAIL_FAILURE";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/api/products");
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const fetchProductDetail = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );
    dispatch({ type: FETCH_PRODUCT_DETAIL_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCT_DETAIL_FAILURE, payload: error.message });
  }
};
