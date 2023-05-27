import React, { useEffect } from "react";
import { getCartByUserId } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
// import ProductDetail from "../ProductDetail";
import Card from "../Card";

const Cart = () => {
	const dispatch = useDispatch()
	const userId = localStorage.getItem("id");
	useEffect(() => {
		dispatch(getCartByUserId(userId));
	}, []);
	const cartByUserId = useSelector((state) => state.cartByUserId);
	console.log(cartByUserId.productsId)
	return (
		<div className='shopping-cart'>
			{/* {!cartByUserId.length === 0 ? (cartByUserId.map(e => <ProductDetail 
			   userId={e.id}
			   id={e.productsId}
			  />
			)): null} */}
			<h5>{cartByUserId.userId}</h5>
			{cartByUserId?.productsId ? (
            <h1 className="px-4 py-2 text-base font-medium text-[#484848]">
              {cartByUserId.productsId.map(e => <Card e = {e}/>)}
            </h1>
          ) : (
            setTimeout(0)
          )} 
		</div>
	);
};

export default Cart;




{/* {cartByUserId.length === 0 ? (
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
<button onClick={handleClearCart}>Vaciar Carrito</button> */}
