import axios from "axios";
export const GET_USERS = "GET_USERS";
export const CREATE_USER = "CREATE_USER";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME";
export const SORT_PRODUCT = "SORT_PRODUCT";

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
        `https://api-gamertech.onrender.com/product/${name}`
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

export const sortProducts = (sort) =>{
  return async dispatch =>{
      const res = await fetch("https://api-gamertech.onrender.com/product//sort",{
          method: "POST",
          body: JSON.stringify(sort),
          headers:{
              'Content-Type': 'application/json'
          }
      })
      const dogs = await res.json();
      return dispatch ({
          type: SORT_PRODUCT,
          payload: dogs
      })
  }
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
 









