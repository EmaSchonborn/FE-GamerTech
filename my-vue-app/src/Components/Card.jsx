import { Link } from 'react-router-dom';

export default function Card(props) {
  // eslint-disable-next-line react/prop-types
  let {id,name,description,price,imgUrl}=props;
  return (
    <div className="container mx-auto p-4">
        <img
        src={imgUrl}
        alt=""
        className="w-10 h-10"
      />

      <h3 className="px-4 py-2 ">{name}</h3>
      <p className="px-4 py-2">Descripcion: {description}</p>
      <p className="px-4 py-2">Precio: {price}</p>
        <Link className="flex justify-center" to={`/product/${id}`}>
          <h2 className="flex justify-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
            <p>Detalle</p>
          </h2>
        </Link>
    </div>
  )
}
