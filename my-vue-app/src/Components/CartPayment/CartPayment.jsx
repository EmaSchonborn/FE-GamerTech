import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createPurchase, getCartByUserId, getUserById, sendMailPaymentSuccess } from "../../Redux/actions";

const CartPayment = () => {
  const userId = localStorage.getItem("id");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartByUserId(userId));
    dispatch(getUserById(userId));  
  }, []);
  const cartUser = useSelector((state) => state.cartByUserId)
  const userCart = {userId:userId, productId: cartUser?.productsId}
  const user = useSelector((state) => state.userVerified)
  const dataEmail = { email: user?.user?.email };

  console.log(dataEmail)
  /* useEffect(() => {
    dispatch(createPurchase(userCart));
    dispatch(sendMailPaymentSuccess(dataEmail)); 
  }, []); */
  console.log(userCart)
  
  if (userCart.productId !== undefined && dataEmail !== undefined) {
      dispatch(createPurchase(userCart));
      dispatch(sendMailPaymentSuccess(dataEmail));
      localStorage.setItem('pagoExitoso', true)   
  }

  return (
<div className="flex flex-col items-center justify-center h-screen" style={{ background: 'linear-gradient(to bottom, black, #900000)' }}>
  <h1 className="text-4xl font-extrabold mb-4 animate-pulse transition-colors duration-500 text-green-600 hover:text-blue-600 font-serif">
    ¡Pago realizado correctamente!
  </h1>
  <br />
  <br />
  <br />
  <div className="flex justify-center">
    <Link to="/home">
      <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg">
        Seguir comprando
      </button>
    </Link>
  </div>
</div>
  );
};

export default CartPayment;




