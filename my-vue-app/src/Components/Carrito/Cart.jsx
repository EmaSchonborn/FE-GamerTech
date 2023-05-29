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

initMercadoPago("TEST-1b219c6f-dc51-44fd-ad18-6c48f228ef56");

const Cart = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  useEffect(() => {
    dispatch(getCartByUserId(userId));
  }, []);
  const cartByUserId = useSelector((state) => state.cartByUserId);
  console.log(cartByUserId.productsId);

  const allProducts = useSelector((state) => state.products);
  let total=0
  let cartItems=[]

  if (allProducts.length) {
    allProducts.forEach(e => {
      cartByUserId.productsId.forEach(el => {
        if (e.id===el) {
          total=total+e.price;
          cartItems.push(e);
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const renderSpinner = () => {
    if (isLoading) {
      return (
        <div className="spinner-wrapper">
          <SpinnerCircular сolor="#009EE3" />
        </div>
      );
    }
  };

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
};

export default Cart;

{
  /* {cartByUserId.length === 0 ? (
<p>No hay productos en el carrito.</p>
) : (
<ul>
{cartByUserId.map((item) => (
<li key={item.id}>
  {item.name} - ${item.price}
  <button onClick={() => handleRemoveFromCart(item)}>
	Eliminar
  </button>
</li>
))}
</ul>
)}
<button onClick={handleClearCart}>Vaciar Carrito</button> */
}
