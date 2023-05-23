import {CREATE_USER, GET_USERS, GET_PRODUCT_BY_ID, GET_PRODUCTS, GET_PRODUCTS_BY_NAME, SORT_PRODUCT, SEND_EMAIL} from "../Redux/actions";
  
  const initialState = {
    users: [],
    products:[],
    productDetail: {},
    emails: [], 
    productsByName:[]
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_USER:
        return {
          ...state,
          users: action.payload,
        };
        case GET_USERS:
        return {
          ...state,
          users: action.payload,
        };
        case GET_PRODUCTS:
          return {
            ...state,
            products: action.payload,
          };
        case GET_PRODUCT_BY_ID:
          return {
            ...state,
            productDetail: action.payload,
          };
        case GET_PRODUCTS_BY_NAME:
          return {
            ...state,
            productDetail: action.payload,
          };
        case SORT_PRODUCT:
          return {
            ...state,
            products: action.payload,
          };
        case SEND_EMAIL:
          return {
            ...state,
            emails: action.payload,
          };
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;