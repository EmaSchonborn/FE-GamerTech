import { Link } from "react-router-dom";

export default function Card(props) {
  // eslint-disable-next-line react/prop-types
  let { id, name, description, price, imageUrl } = props;
  return (
    <div className="container mx-auto p-4 bg-slate-50 mb-5 rounded-sm">
      <img src={imageUrl} alt="" className="w-10 h-10" />
      <br />
      <h3 className="px-4 py-2 text-base text-white font-medium bg-[#0061FB] p-1 text-center rounded-sm ">
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
    </div>
  );
}
