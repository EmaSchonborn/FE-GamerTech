import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById, sumarCarrito } from "../Redux/actions";
import { getAuth, signOut } from "firebase/auth";
import Reviews from "./Reviews/Reviews";

export default function ProductDetail() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  let dispatch = useDispatch();
  let params = useParams();

  const verified = useSelector((state) => state.userVerified);

  const id = localStorage.getItem("id");
  useEffect(() => {
    params.id ? dispatch(getProductById(params.id)) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id, dispatch]);
  const productoDetail = useSelector((state) => state.productDetail);
  // console.log(productoDetail);
  const [quantity, setQuantity] = useState(1);
  const data = {
    userId: parseInt(id),
    productId: { id: parseInt(params.id), quantity: quantity },
  };
  // const data = { userId: parseInt(id), productId:parseInt(params.id)};
  //const carrito = useSelector((state) => state.cartByUserId);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleClick = () => {
    if (verified.user?.isActive === false) {
      signOut(auth)
        .then(() => {
          console.log("sign out successful");
          localStorage.clear();
          navigate("/banned-user");
        })
        .catch((error) => console.log(error));
    } else {
      dispatch(sumarCarrito(data));
      console.log(data);
      alert("Agregado Correctamente!");
      navigate("/home");
    }
  };
  // console.log(carrito);

  if (loading) {
    setLoading(false);
    return <div>Cargando...</div>; // Indicador de carga
  }

  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div className="container flex items-center justify-center">
        <div className="w-6/12 h-auto rounded-md bg-slate-100 text-white p-5 flex flex-col justify-around">
          {productoDetail?.name !== undefined ? (
            <h1 className="px-4 py-2 text-base text-white font-medium bg-[#0061FB] p-1 text-center rounded-sm ">
              {" "}
              {productoDetail.name.charAt(0).toUpperCase() +
                productoDetail.name.slice(1)}
            </h1>
          ) : (
            setTimeout(0)
          )}
          {productoDetail?.description !== undefined ? (
            <h1 className="px-4 py-2 text-base font-medium text-[#484848]">
              {productoDetail.description}
            </h1>
          ) : (
            setTimeout(0)
          )}
          {productoDetail?.price !== undefined ? (
            <h1 className="px-4 py-2 text-base font-medium text-[#484848]">
              $ {productoDetail.price}
            </h1>
          ) : (
            setTimeout(0)
          )}
          {productoDetail?.imageUrl !== undefined ? (
            <img
              src={productoDetail.imageUrl}
              alt="Loading.."
              className="px-10"
            />
          ) : (
            setTimeout(0)
          )}
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
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-12 text-center text-black bg-white border border-gray-300"
            />
            <button
              className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <div className="flex justify-evenly items-center h-24">
            <button
              className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm"
              onClick={handleClick}
            >
              Añadir al Carrito
            </button>
            <br />
            <Link to={`/review/${params.id}`}>
              <button className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm">
                Dejar reseña
              </button>
            </Link>

            <Link to="/home">
              <button className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm">
                Volver
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
}

