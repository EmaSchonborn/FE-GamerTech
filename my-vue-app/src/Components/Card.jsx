import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteItem } from "../Redux/actions";

export default function Card(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idLocal = localStorage.getItem("id");
  let { id, name, description, price, imageUrl, quantity } = props;

  let carrito = useSelector((state) => state.cartByUserId);
  let data;

  // const itemInCart = cart.find(item => item.productId === id);
  // const itemCount = itemInCart ? itemInCart.quantity : 1;
  //const data = { userId: parseInt(idLocal), itemId: id };
  const handleClick = () => {
    carrito.productsId = carrito.productsId.filter(item => item.id !== id);
    data = { userId: parseInt(idLocal), productId:carrito.productsId};
    console.log(data);
    dispatch(deleteItem(data));
    navigate("/home");
  };
  return (
    <div className="flex flex-col p-4 bg-gradient-to-br from-white via-gray-100 to-gray-300 mb-5 rounded-sm max-w-sm border border-gray-300">
      <figure className="w-full flex items-center justify-center">
        <img src={imageUrl} alt="" className="w-60 h-40" />
      </figure>
      <br />
      <h3 className="px-4 py-2 text-base text-white font-medium bg-[#0061FB] p-1 text-center rounded-sm">
        {name}
      </h3>
      <p className="px-4 py-2 text-base font-medium text-[#484848]">
        {description}
      </p>
      <p className="px-4 py-2 text-base font-medium text-[#484848]">
        $ {price}
      </p>
      <Link className="flex justify-center" to={`/product/${id}`}>
        <h2 className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm">
          <p>Detalle</p>
        </h2>
      </Link>
      <br />
      <button
        className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm"
        onClick={handleClick}
      >
        Quitar
      </button>
      {/* <h1>{itemCount > 1 && <span>Cantidad: {quantity}</span>}</h1> */}
      <h1>
        <span>Cantidad: {quantity}</span>
      </h1>
    </div>
  );
}
