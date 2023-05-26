import axios from "axios";
export const GET_USERS = "GET_USERS";
export const CREATE_USER = "CREATE_USER";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const GET_PRODUCT_BY_NAME='GET_PRODUCT_BY_NAME'
export const GET_PRODUCTS = "GET_PRODUCTS";
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const GET_CART_BY_USER_ID = 'GET_CART_BY_USER_ID'
export const SEND_EMAIL='SEND_EMAIL'
export const LOGIN='LOGIN'
export const FAILURE_LOGIN='FAILURE_LOGIN'

export function getProducts() {
  return async function (dispatch) {
    const apiData = await axios.get("https://api-gamertech.onrender.com/product");
    const products = apiData.data;
    dispatch({
      type: GET_PRODUCTS,
      payload: products,
    });
  };
}

export function getProductById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://api-gamertech.onrender.com/product/${id}`
      );
      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: json.data,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function getProductByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://api-gamertech.onrender.com/product/search/?name=${name}`
      );
      return dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: json.data,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function getUsers() {
  return async function (dispatch) {
    const apiData = await axios.get("https://api-gamertech.onrender.com/users");
    const users = apiData.data;
    dispatch({
      type: GET_USERS,
      payload: users,
    });
  };
}

export function createUser(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://api-gamertech.onrender.com/users/new",
        payload
      );
      dispatch({
        type: CREATE_USER,
        payload: json.data.user,
      });
    } catch (error) {
      console.log(error.message);
    }
  }}

  export function sendEmail(payload){
    return async function(dispatch){
        try {
        let json = await axios.post(`https://api-gamertech.onrender.com/send-email`, payload)
        dispatch({
          type: SEND_EMAIL,
          payload: json.data,
        });
        } catch (error) {
          console.log(error.message)
        }
  }}
 
  export function verifyUser(Email, Password) {
    const body = {
      email: Email,
      password: Password,
    };
    return async function (dispatch) {
      try {
        let json = await axios.post(
          "https://api-gamertech.onrender.com/verifyuser",
          body
        );
  
        const { user, msg } = json.data;
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("id", user.id);
  
        return dispatch({
          type: LOGIN,
          payload: { user, msg },
        });
      } catch (error) {
        dispatch({
          type: FAILURE_LOGIN,
          payload: { error: error.message },
        });
      }
    };
}

export function getCartByUserId(userId){
  return async function(dispatch){
    try { let cart = await axios.get(`https://api-gamertech.onrender.com/cart/${userId}`)
      
    return dispatch({type: GET_CART_BY_USER_ID, payload: cart.data})
    } catch (error) {
      console.log(error.message)
    }
  }
 }