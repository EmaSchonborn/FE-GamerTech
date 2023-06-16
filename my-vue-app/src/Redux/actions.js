import axios from "axios";
export const GET_USERS = "GET_USERS";
export const GET_USERS_BY_NAME = "GET_USERS_BY_NAME";
export const GET_USER_BY_ID = "GET_USER_BY_ID";
export const CREATE_USER = "CREATE_USER";
export const MODIFY_USER = "MODIFY_USER";
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
export const DECREMENT_VALUE = "DECREMENT_VALUE";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const GET_PURCHASES = "GET_PURCHASES";
export const GET_PURCHASES_BY_ID = "GET_PURCHASES_BY_ID";
export const CREATE_PURCHASE = "CREATE_PURCHASE";

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
      const product = json.data;
      const filteredProducts = product.isActive
        ? product
        : console.log("No hay Stock o no existe el producto!");

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

export function getUserById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `https://api-gamertech.onrender.com/users/${id}`
      );
      const user = json.data;
      const msg = "Usuario encontrado!";

      console.log(msg)

      return dispatch({
        type: GET_USER_BY_ID,
        payload: user,
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
      const { user, msg, marcaTiempoLogin } = json.data;
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        cart.userId = user.id;
        localStorage.setItem("cart", JSON.stringify(cart));
        try {
          //sumarCarrito(cart);
          let newCart = await axios.post(
            `https://api-gamertech.onrender.com/cart/addcartfromlocalstorage`,
            cart
          );
          localStorage.setItem('cart', JSON.stringify(null));
          dispatch({
            type: SUMAR_CARRITO,
            payload: newCart.data,
          });
        } catch (error) {
          console.log(error.message);
        }
      }

      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("id", user.id);
      localStorage.setItem("marcaTiempoLogin", marcaTiempoLogin);
      localStorage.setItem("vrfd", user.isActive);

      dispatch({
        type: CREATE_USER,
        payload: { user, msg, marcaTiempoLogin },
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

export function sendMailPaymentSuccess(Email){
  return async function(dispatch){
    try {
      let json = await axios.post(
        `https://api-gamertech.onrender.com/send-email/paymentsuccess`,
        Email
      );
      dispatch({
        type: SEND_EMAIL,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
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

      const { user, msg, marcaTiempoLogin } = json.data;

      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        cart.userId = user.id;
        localStorage.setItem("cart", JSON.stringify(cart));
        try {
          //sumarCarrito(cart);
          let newCart = await axios.post(
            `https://api-gamertech.onrender.com/cart/addcartfromlocalstorage`,
            cart
          );
          localStorage.setItem('cart', JSON.stringify(null));
          dispatch({
            type: SUMAR_CARRITO,
            payload: newCart.data,
          });
        } catch (error) {
          console.log(error.message);
        }
      }

      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("id", user.id);
      localStorage.setItem("marcaTiempoLogin", marcaTiempoLogin);
      localStorage.setItem("vrfd", user.isActive);

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
  let body = {
    uid: payload.uid,
    data: payload.userProfile,
  };
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://api-gamertech.onrender.com/users/loginwithgoogle",
        body
      );
      const { user, msg, marcaTiempoLogin } = json.data;

      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        cart.userId = user.id;
        localStorage.setItem("cart", JSON.stringify(cart));
        try {
          //sumarCarrito(cart);
          let newCart = await axios.post(
            `https://api-gamertech.onrender.com/cart/addcartfromlocalstorage`,
            cart
          );
          localStorage.setItem('cart', JSON.stringify(null));
          dispatch({
            type: SUMAR_CARRITO,
            payload: newCart.data,
          });
        } catch (error) {
          console.log(error.message);
        }
      }

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
  let id = localStorage.getItem("id");
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!id) {
    if (!cart) {
      let initialCart = { userId: 0, productId: [] };
      localStorage.setItem("cart", JSON.stringify(initialCart));
      cart = initialCart;
    }
    let newProduct = {
      id: payload.productId.id,
      quantity: payload.productId.quantity,
    };
    cart.productId.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(
      "Producto agregado al carrito. Recuerda que para poder ver tu carrito deberás registrarte o iniciar sesión."
    );
    return;
  }
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
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://api-gamertech.onrender.com/users/modifyuser",
        payload
      );
      if (response.data.msg === "Usuario modificado!") {
        const query = await axios.get(
          `https://api-gamertech.onrender.com/users/${payload.id}`
        );
        const user = query.data;
        return dispatch({
          type: MODIFY_USER,
          payload: user,
        });
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export function deleteItem(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        `https://api-gamertech.onrender.com/cart/deleteitem`,
        payload
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

export function decrementValue() {
  return (dispatch, getState) => {
    dispatch({ type: DECREMENT_VALUE });

    const { changeRolAttempts } = getState();

    localStorage.setItem("changeRolAttempts", changeRolAttempts.toString());
  };
}

export const addMessage = (message) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: "ADD_MESSAGE",
        payload: message,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export function sendReview(data) {
  let body = {
    textReview: { userId: data.userId, mensaje: data.mensaje },
    score: { userId: data.userId, score: data.rate },
    productId: data.productId,
  };

  return async function () {
    try {
      let json = await axios.post(
        `https://api-gamertech.onrender.com/product/addreviewscore`,
        body
      );
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const deleteReview = (data) => {
  return async function (dispatch) {
    try {
      await axios.post(
        `https://api-gamertech-prueba.onrender.com/product/deletereviewscore`,
        data
      );
      dispatch({
        type: DELETE_REVIEW,
        payload: data,
      });
      dispatch(getProducts());
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getAllPurchases = () => {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        "https://api-gamertech-prueba.onrender.com/purchase/"
      );

      const purchases = json.data;

      dispatch({
        type: GET_PURCHASES,
        payload: purchases,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getAllPurchasesById = (id) => {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        `https://api-gamertech-prueba.onrender.com/purchase/${id}`
      );

      const purchases = json.data;

      dispatch({
        type: GET_PURCHASES_BY_ID,
        payload: purchases,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const createPurchase = (payload) => {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        `https://api-gamertech.onrender.com/purchase/new`, payload
      );

      const purchase = json.data;

      dispatch({
        type: CREATE_PURCHASE,
        payload: purchase,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
