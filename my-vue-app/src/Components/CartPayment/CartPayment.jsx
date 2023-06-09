// // import React from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { resetCart, sendEmail } from "../../Redux/actions";

// const CartPayment = () => {
//     const userId = localStorage.getItem("id")
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const mail = useSelector((state) => state.userVerified);
//     useEffect(() => {
//       dispatch(resetCart(userId));
//       setTimeout(() => {
//         dispatch(sendEmail(mail.user.email))
//       }, 3000);
//       // dispatch(sendEmail(dataEmail))
//     }, []);
    
//     console.log(mail) 
    
// 	return (
//         <div>
// 	<h1>¡Pago realizado correctamente!</h1>
//     <br />
//     <br />
//     <br />
//     <div className="flex lg:flex-1">
//           <a
//             href="#"
//             className="-m-1.5 p-2 bg-[#E60011] text-white font-semibold rounded-sm"
//           >
//             <span className="sr-only">Your Company</span>
//             <Link to= "/home">
//             <button>Seguir comprando</button>
//             </Link>
//           </a>
//         </div>
//         </div>
    
    
// 	);
// };

// export default CartPayment;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetCart, sendEmail } from "../../Redux/actions";

const CartPayment = () => {
  const userId = localStorage.getItem("id");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mail = useSelector((state) => state.userVerified);

  useEffect(() => {
    dispatch(resetCart(userId));
    
  }, []);

  return (
    <div>
      <h1>¡Pago realizado correctamente!</h1>
      <br />
      <br />
      <br />
      <div className="flex lg:flex-1">
        <Link to="/home">
          <button className="-m-1.5 p-2 bg-[#E60011] text-white font-semibold rounded-sm">
            Seguir comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPayment;