
import {CREATE_USER, GET_USERS, GET_PRODUCT_BY_ID, GET_PRODUCTS, SEND_EMAIL, GET_PRODUCT_BY_NAME} from "../Redux/actions";

  
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
        case SEND_EMAIL:
          return {
            ...state,
            emails: action.payload,
          };
        case GET_PRODUCT_BY_NAME:
          return {
            ...state,
            productsByName: action.payload
          }
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;