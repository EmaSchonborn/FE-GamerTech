import {CREATE_USER, GET_USERS, GET_PRODUCT_BY_ID} from "../Redux/actions";
  
  const initialState = {
    users: [],
    products:[],
    productDetail: {} 
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
        case GET_PRODUCT_BY_ID:
          return {
            ...state,
            productDetail: action.payload,
          };
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;