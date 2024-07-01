import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_DETAIL_FAILURE,
} from "../actions/productActions";

const initialState = {
  products: [],
  productDetail: null,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, error: null };
    case FETCH_PRODUCT_DETAIL_SUCCESS:
      return { ...state, productDetail: action.payload, error: null };
    case FETCH_PRODUCTS_FAILURE:
    case FETCH_PRODUCT_DETAIL_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
