// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// export default function Card(props) {
//   // eslint-disable-next-line react/prop-types
//   const cart = useSelector((state) => state.cartByUserId)  // cartByUserId.qunatity = 2
//   // console.log(cartUser)
//   let { id, name, description, price, imageUrl } = props;
//   return (
//     <div className="flex flex-col p-4 bg-gradient-to-br from-white via-gray-100 to-gray-300 mb-5 rounded-sm max-w-sm border border-gray-300">
//       <figure className="w-full flex items-center justify-center">
//         <img src={imageUrl} alt="" className="w-60 h-40" />
//       </figure>
//       <br />
//       <h3 className="px-4 py-2 text-base text-white font-medium bg-[#0061FB] p-1 text-center rounded-sm">
//         {name}
//       </h3>
//       <p className="px-4 py-2 text-base font-medium text-[#484848]">
//         {description}
//       </p>
//       <p className="px-4 py-2 text-base font-medium text-[#484848]">
//         $ {price}
//       </p>
//       <Link className="flex justify-center" to={`/product/${id}`}>
//         <h2 className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm">
//           <p>Detalle</p>
//         </h2>
//       </Link>
//     </div>
//   );
// }

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../Redux/actions";

export default function Card(props) {
  const dispatch = useDispatch()
  const idLocal = localStorage.getItem("id");
  let { id, name, description, price, imageUrl, quantity } = props;
  const cart = [{productId: 1,quantity: 3}, {quantity: 2}, {quantity: 20}, {quantity: 10}, {quantity: 1}];
  // const array2 = cart.filter(e => e.quantity > 1);
  
  // console.log(array2);
  const itemInCart = cart.find(item => item.productId === id);
  const itemCount = itemInCart ? itemInCart.quantity : 1;
  const data = {userId: parseInt(idLocal), itemId:id}
  console.log(data)
  const handleClick = () => {
    dispatch(deleteItem(data))
  }
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
      <button className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm"
      onClick={handleClick}>Quitar</button>
      {/* <h1>{itemCount > 1 && <span>Cantidad: {quantity}</span>}</h1> */}
      <h1><span>Cantidad: {quantity}</span></h1>
    </div>
  );
}


