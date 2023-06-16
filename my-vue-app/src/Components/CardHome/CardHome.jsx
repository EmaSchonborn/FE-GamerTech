import { Link } from "react-router-dom";

export default function CardHome(props) {
  // eslint-disable-next-line react/prop-types
  let { id, name, description, price, imageUrl, stock } = props;
  return (
    <div className="max-w-xs overflow-hidden bg-slate-50 rounded-md shadow-lg">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-900 uppercase">{name}</h1>
        <p className="mt-1 text-sm text-gray-800">{description}</p>
      </div>
      <div className="relative">
        <img
          className="w-full h-52 object-cover"
          src={imageUrl}
          alt="NIKE AIR"
        />
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-nintendo">
        <h1 className="text-lg font-bold text-white">${price}</h1>
        <Link className="flex justify-center" to={`/product/${id}`}>
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Detalle
          </button>
        </Link>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col p-4 bg-gradient-to-br from-white via-gray-100 to-gray-300 mb-5 rounded-sm max-w-sm border border-gray-300">
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
        U$S {price}
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
    </div> */
}
