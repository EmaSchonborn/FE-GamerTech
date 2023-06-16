import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createPurchase, getCartByUserId, getUserById, sendMailPaymentSuccess } from "../../Redux/actions";

const PaymetnFaliure = () => {
  
 
  

  return (
<div className="flex flex-col items-center justify-center h-screen" style={{ background: 'linear-gradient(to bottom, white, blue)' }}>
  <h1 className="text-4xl font-extrabold mb-4 animate-pulse transition-colors duration-500 text-red-600 hover:text-blue-600 font-serif">
    ¡El Pago no pudo realizarse!
  </h1>
  <br />
  <br />
  <br />
  <div className="flex justify-center">
    <Link to="/home">
      <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg" >
        Volver a ver los productos
      </button>
    </Link>
  </div>
</div>
  );
};

export default PaymetnFaliure;