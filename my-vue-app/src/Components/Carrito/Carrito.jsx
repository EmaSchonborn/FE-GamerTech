import { useEffect } from "react";
import { getCartByUserId } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
	// const handleRemoveFromCart = (product) => {
	//   dispatch();
	// };

	// const handleClearCart = () => {
	//   dispatch();
	// };
	const dispatch=useDispatch();
	const UserId=useSelector(state=>state.userVerified)
	console.log(UserId);

	useEffect(() => {
		dispatch(getCartByUserId(UserId));
	}, []);

	const cartByUserId = useSelector((state) => state.cartByUserId);

	console.log(cartByUserId);
	return (
		<div className='shopping-cart'>
			<h2>Carrito de Compras</h2>
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
		</div>
	);
};

export default Cart;
