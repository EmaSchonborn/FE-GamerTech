// import { Link } from "react-router-dom";

// export default function Card(props) {
//   // eslint-disable-next-line react/prop-types
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
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Card(props) {
  const { id, name, description, price, imageUrl } = props;
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
      <div className="flex justify-center">
        <button
          className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm"
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          className="w-12 text-center bg-white border border-gray-300"
          readOnly
        />
        <button
          className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <Link className="flex justify-center" to={`/product/${id}`}>
        <h2 className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm">
          <p>Detalle</p>
        </h2>
      </Link>
    </div>
  );
}

