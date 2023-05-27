import {
  CREATE_USER,
  GET_USERS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_BY_NAME,
  GET_PRODUCTS,
  SORT_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  GET_CART_BY_USER_ID,
  SEND_EMAIL,
  LOGIN,
  FAILURE_LOGIN,
} from "../Redux/actions";

const initialState = {
  users: [],
  products: [],
  productDetail: {},
  productsByName: [],
  cartByUserId: {},
  emails: [],
  userVerified: {},
  userCreated: {},
  isAuthenticated: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        userCreated: action.payload,
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
        productsByName: action.payload,
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        userVerified: action.payload,
        isAuthenticated: true,
      };
    case FAILURE_LOGIN:
      return {
        ...state,
        isAuthenticated: false,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case GET_CART_BY_USER_ID:
      return {
        ...state,
        cartByUserId: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
