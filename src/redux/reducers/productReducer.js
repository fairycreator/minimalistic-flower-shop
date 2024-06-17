const initialState = {
  products: [],
  productDetails: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, products: action.payload };
    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, products: [] };
    case "FETCH_PRODUCT_DETAILS_SUCCESS":
      return { ...state, productDetails: action.payload };
    case "FETCH_PRODUCT_DETAILS_FAILURE":
      return { ...state, productDetails: null };
    default:
      return state;
  }
};

export default productReducer;
