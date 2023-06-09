import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { getProductById, sumarCarrito } from "../Redux/actions";

const ProductDetail = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  let dispatch = useDispatch();
  let params = useParams();

  const id = localStorage.getItem("id");
  useEffect(() => {
    params.id ? dispatch(getProductById(params.id)) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id, dispatch]);
  const productoDetail = useSelector((state) => state.productDetail);
  
  const data = {userId: parseInt(id),
    productId:parseInt(params.id)} 
    console.log(data)    
    const handleClick = (e) => { 
      dispatch(sumarCarrito(data))
      alert("Agregado Correctamente!")
      navigate("/home")
    };
    const carrito = useSelector((state) => state.cartByUserId)
    console.log(carrito)

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
            <img src={productoDetail.imageUrl} alt="Loading.." />
            
          ) : (
            setTimeout(0)
          )}
          <div className="flex justify-evenly items-center h-24">
            <button className="flex justify-center bg-nintendo text-white font-medium px-4 py-2 rounded-sm" onClick={handleClick}>
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
    </div>
  );
};

export default ProductDetail;
