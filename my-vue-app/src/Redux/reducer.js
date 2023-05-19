import {CREATE_USER, GET_USERS } from "../Redux/actions";
  
  const initialState = {
    users: []
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
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;