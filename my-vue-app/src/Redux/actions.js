import axios from "axios";
export const GET_USERS = "GET_USERS";
export const GET_USERS_BY_NAME = "GET_USERS_BY_NAME";
export const CREATE_USER = "CREATE_USER";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SORT_PRODUCTS = "SORT_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const GET_CART_BY_USER_ID = "GET_CART_BY_USER_ID";
export const SEND_EMAIL = "SEND_EMAIL";
export const LOGIN = "LOGIN";
export const FAILURE_LOGIN = "FAILURE_LOGIN";
export const SUMAR_CARRITO = "SUMAR_CARRITO";
export const LOGIN_WITH_GOOGLE = "LOGIN_WITH_GOOGLE";
export const DELETE_ITEM = "DELETE_ITEM";
export const RESET_CART = "RESET_CART";

export function getProducts() {
  return async function (dispatch) {
    const apiData = await axios.get(
      "https://api-gamertech.onrender.com/product"
    );
    const products = apiData.data;
    const sortProducts = products.sort((a, b) => (a.id > b.id ? 1 : -1));
    const filteredProducts = products
      .filter((p) => p.isActive === true)
      .filter((p) => p.stock > 0);

    dispatch({
      type: GET_PRODUCTS,
      payload: { sortProducts, filteredProducts },
    });
  };
}

export function getProductById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://api-gamertech.onrender.com/product/${id}`
      );
      const products = json.data;
      const filteredProducts = products.filter((p) => p.isActive === true);

      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: filteredProducts,
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
        `https://api-gamertech.onrender.com/product/search?name=${name}`
      );
      const products = json.data.sort((a, b) => (a.id > b.id ? 1 : -1));
      const filteredSearch = products.filter((p) => p.isActive === true);

      return dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: { products, filteredSearch },
      });
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function sortProducts(payload) {
  return async function (dispatch) {
    const apiData = await axios.post(
      `https://api-gamertech.onrender.com/product/sort`,
      payload
    );
    const products = apiData.data;
    const filteredProducts = products.filter((p) => p.isActive === true);

    dispatch({
      type: SORT_PRODUCTS,
      payload: filteredProducts,
    });
  };
}

/* const fakeUsers = [
  {
    id: 1,
    name: "usuarioprueba",
    email: "usuarioprueba@mail.com",
    isActive: true,
    isAdmin: true,
    createdAt: "05/06/2023",
  },
  {
    id: 2,
    name: "Salvador",
    email: "usuarioprueba1@mail.com",
    isActive: true,
    isAdmin: false,
    createdAt: "05/06/2023",
  },
  {
    id: 3,
    name: "Salvador Hilares",
    email: "shilaresbarrios@gmail.com",
    isActive: true,
    isAdmin: false,
    createdAt: "05/06/2023",
  },
  {
    id: 4,
    name: "nicolas",
    email: "prueba12@mail.com",
    isActive: true,
    isAdmin: false,
    createdAt: "05/06/2023",
  },
  {
    id: 5,
    name: "schonborn",
    email: "emanuel.1908@hotmail.com",
    isActive: true,
    isAdmin: false,
    createdAt: "05/06/2023",
  },
]; */

export function getUsers() {
  return async function (dispatch) {
    const apiData = await axios.get("https://api-gamertech.onrender.com/users");
    const users = apiData.data.sort((a, b) => (a.id > b.id ? 1 : -1));
    dispatch({
      type: GET_USERS,
      payload: users,
    });
  };
}

export function getUserByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://api-gamertech.onrender.com/users/search?name=${name}`
      );
      const data = json.data;

      return dispatch({
        type: GET_USERS_BY_NAME,
        payload: data,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function createUser(payload) {
  const body = {
    name: payload.name,
    email: payload.email,
    password: payload.password,
    isActive: true,
  };
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://api-gamertech.onrender.com/users/new",
        body
      );
      const { user, msg } = json.data;
      dispatch({
        type: CREATE_USER,
        payload: { user, msg },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function sendEmail(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        `https://api-gamertech.onrender.com/send-email`,
        payload
      );
      dispatch({
        type: SEND_EMAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function verifyUser(Email, Password) {
  const body = {
    email: Email,
    password: Password,
  };
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://api-gamertech.onrender.com/users/verifyuser",
        body
      );
      console.log(json.data);

      const { user, msg, marcaTiempoLogin } = json.data;
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("id", user.id);
      localStorage.setItem("marcaTiempoLogin", marcaTiempoLogin);

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

export function loginWithGoogle(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://api-gamertech.onrender.com/users/loginwithgoogle",
        payload
      );
      const { user, msg, marcaTiempoLogin } = json.data;

      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("id", user.id);
      localStorage.setItem("marcaTiempoLogin", marcaTiempoLogin);

      return dispatch({
        type: LOGIN_WITH_GOOGLE,
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

export function getCartByUserId(userId) {
  return async function (dispatch) {
    try {
      let cart = await axios.get(
        `https://api-gamertech.onrender.com/cart/${userId}`
      );
      return dispatch({ type: GET_CART_BY_USER_ID, payload: cart.data });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function sumarCarrito(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        `https://api-gamertech.onrender.com/cart/addproducttocart`,
        payload
      );
      dispatch({
        type: SUMAR_CARRITO,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function modifyProducts(payload) {
  return async function () {
    try {
      const response = await axios.post(
        "https://api-gamertech.onrender.com/product/modifyproduct",
        payload
      );
      const { product, msg } = response.data;
      return { product, msg };
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export function modifyUsers(payload) {
  return async function () {
    try {
      const response = await axios.post(
        "https://api-gamertech.onrender.com/users/modifyuser",
        payload
      );
      const { user, msg } = response.data;
      return { user, msg };
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export function deleteItem(payload) {
  const { userId, itemId } = payload;
  return async function (dispatch) {
    try {
      let json = await axios.put(
        `https://api-gamertech.onrender.com/cart/${userId}`,
        itemId
      );
      dispatch({
        type: DELETE_ITEM,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function resetCart(id) {
  return async function (dispatch) {
    try {
      let json = await axios.put(
        `https://api-gamertech.onrender.com/cart/${id}`
      );
      dispatch({
        type: RESET_CART,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
