import { Link } from "react-router-dom";

export default function CardHome(props) {
  // eslint-disable-next-line react/prop-types
  let { id, name, description, price, imageUrl, stock } = props;
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
      {stock >= 1 ? (
           <h1 className="px-4 py-2 text-base font-medium text-[#484848]">
           Unidades disponibles: {stock}
           </h1>) : (
           <h1 className="text-base font-medium text-black">Sin Stock!</h1>
          )}
      <Link className="flex justify-center" to={`/product/${id}`}>
        <h2 className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm">
          <p>Detalle</p>
        </h2>
      </Link>
    </div>
  );
}