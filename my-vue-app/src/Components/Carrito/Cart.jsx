import { useEffect, useState } from "react";
import { getCartByUserId } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { initMercadoPago } from "@mercadopago/sdk-react";
import Payment from "../Payment/Payment";
import Checkout from "../Checkout/Checkout";
//import Footer from "../FooterPayment/FooterPayment";
import InternalProvider from "../ContextProvider/ContextProvider";
import { SpinnerCircular } from "spinners-react";
import "../../Styles/payment.css";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";

initMercadoPago("TEST-1b219c6f-dc51-44fd-ad18-6c48f228ef56");

const Cart = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  const isActive = localStorage.getItem("vrfd");
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartByUserId(userId));
  }, [dispatch]);

  const allProducts = useSelector((state) => state.products);
  const cartByUserId = useSelector((state) => state.cartByUserId);

  let total = 0;
  let cartItems = [];
  setTimeout(1);

  if (allProducts.length && cartByUserId.productsId) {
    allProducts.forEach((e) => {
      cartByUserId.productsId.forEach((el) => {
        if (e.id === el.id) {
          total = total + e.price;
          cartItems.push({ product: e, quantity: el.quantity });
        }
      });
    });
  }

  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState({
    quantity: "1",
    price: total,
    description: "Tu compra en GamerTech",
  });
  // console.log(orderData)
  const handleClick = () => {
    setIsLoading(true);
    fetch("https://api-gamertech.onrender.com/payment/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        return response.json();
      })
      .then((preference) => {
        setPreferenceId(preference.id);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const renderSpinner = () => {
    if (isLoading && preferenceId === null) {
      return (
        <div className="spinner-wrapper">
          <SpinnerCircular сolor="#009EE3" />
        </div>
      );
    }
    return null;
  };

  if (isActive === "false") {
    console.log("isActive");
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        localStorage.clear();
        navigate("/banned-user");
      })
      .catch((error) => console.log(error));
  } else {
    return (
      <InternalProvider
        context={{ preferenceId, isLoading, orderData, setOrderData }}
      >
        <main>
          {renderSpinner()}
          <Checkout cartItems={cartItems} onClick={handleClick} description />
          <Payment />
        </main>
        {/* <Footer /> */}
      </InternalProvider>
    );
  }
};

export default Cart;
