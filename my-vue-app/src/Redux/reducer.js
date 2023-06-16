import {
  CREATE_USER,
  GET_USERS,
  GET_USERS_BY_NAME,
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
  SUMAR_CARRITO,
  LOGIN_WITH_GOOGLE,
  DELETE_ITEM,
  RESET_CART,
  DECREMENT_VALUE,
  ADD_MESSAGE,
  GET_USER_BY_ID,
  MODIFY_USER,
  DELETE_REVIEW,
  GET_PURCHASES,
  GET_PURCHASES_BY_ID,
  GET_ALL_CATEGORIES,
  CREATE_PURCHASE
} from "../Redux/actions";

const initialState = {
  users: [],
  filteredUsers: [],
  products: [],
  filteredProducts: [],
  dashFilteredProducts: [],
  productDetail: {},
  productsByName: [],
  cartByUserId: {},
  emails: {},
  userVerified: {},
  userCreated: {},
  changeRolAttempts: 3,
  isAuthenticated: false,
  messages: [],
  purchases: [],
  userPurchases: [],
  categories: [],
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
        filteredUsers: action.payload,
      };
    case GET_USERS_BY_NAME:
      return {
        ...state,
        filteredUsers: action.payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        userVerified: action.payload,
      };
    case MODIFY_USER:
      return {
        ...state,
        userVerified: action.payload,
      };
    case GET_PRODUCTS:
      const { sortProducts, filteredProducts } = action.payload;
      return {
        ...state,
        products: sortProducts,
        filteredProducts: filteredProducts,
        dashFilteredProducts: sortProducts,
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
      const { products, filteredSearch } = action.payload;
      return {
        ...state,
        productsByName: filteredSearch,
        filteredProducts: filteredSearch,
        dashFilteredProducts: products,
      };
    case SORT_PRODUCTS:
      return {
        ...state,
        productsByName: action.payload,
        filteredProducts: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        userVerified: action.payload,
        isAuthenticated: true,
      };
    case LOGIN_WITH_GOOGLE:
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
    case SUMAR_CARRITO:
      return {
        ...state,
        cartByUserId: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        cartByUserId: action.payload,
      };
    case RESET_CART:
      return {
        ...state,
        cartByUserId: action.payload,
      };
    case DECREMENT_VALUE:
      return {
        ...state,
        changeRolAttempts: state.changeRolAttempts - 1,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case DELETE_REVIEW:
      return {
        ...state,
      };
    case GET_PURCHASES:
      return {
        ...state,
        purchases: action.payload,
      };
    case GET_PURCHASES_BY_ID:
      return {
        ...state,
        userPurchases: action.payload,
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
    case CREATE_PURCHASE:
      return {
        ...state,
        };
    default:
      return { ...state };
  }
};

export default rootReducer;
