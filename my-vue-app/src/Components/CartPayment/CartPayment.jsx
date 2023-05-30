// import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetCart } from "../../Redux/actions";

const CartPayment = () => {
    const userId = localStorage.getItem("id")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(resetCart(userId));
      }, []);
      console.log(userId)
	return (
        <div>
	<h1>¡Pago realizado correctamente!</h1>
    <br />
    <br />
    <br />
    <div className="flex lg:flex-1">
          <a
            href="#"
            className="-m-1.5 p-2 bg-[#E60011] text-white font-semibold rounded-sm"
          >
            <span className="sr-only">Your Company</span>
            <Link to= "/home">
            <button>Seguir comprando</button>
            </Link>
          </a>
        </div>
        </div>
    
    
	);
};

export default CartPayment;