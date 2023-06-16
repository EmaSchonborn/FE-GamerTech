import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById, sumarCarrito, modifyProducts, getCartByUserId } from "../Redux/actions";
import { getAuth, signOut } from "firebase/auth";
import Reviews from "./Reviews/Reviews";
import Swal from "sweetalert2";


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
    dispatch(getCartByUserId(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id, dispatch]);

  const productoDetail = useSelector((state) => state.productDetail);
  const carrito = useSelector((state) => state.cartByUserId);

  const [quantity, setQuantity] = useState(1);
  const data = {
    userId: parseInt(id),
    productId: { id: parseInt(params.id), quantity: quantity },
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  let pagoExitoso = localStorage.getItem("pagoExitoso");
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
      if (pagoExitoso === "true") {
        localStorage.setItem("pagoExitoso", false);
      }

      const existingProduct = carrito.productsId?.find(
        (product) => product.id === parseInt(params.id)
      );

      if (existingProduct) {
        const newQuantity = existingProduct.quantity + quantity;
        dispatch(modifyProducts({ id: parseInt(params.id), quantity: newQuantity }));
      } else if (productoDetail.stock >= quantity){
        dispatch(sumarCarrito(data));
      

      dispatch(
        modifyProducts({
          id: parseInt(params.id),
          stock: productoDetail.stock - quantity,
        })
      );

      console.log(data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Agregado correctamente!',
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/home");} else {Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: '¡No hay Stock suficiente!',
        showConfirmButton: false,
        timer: 1500
      })}
    }
  };

  if (loading) {
    setLoading(false);
    return <div>Cargando...</div>; // Indicador de carga
  }

  return (
    <section className="bg-slate-200 w-full h-screen flex items-center justify-center">
    <div className="max-w-2xl overflow-hidden bg-slate-50 rounded-lg shadow-md ">
      {productoDetail?.imageUrl !== undefined ? (
        <img src={productoDetail.imageUrl} alt="Article" className="object-contain w-full h-48 bg-slate-100" />
      ) : null}

      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-nintendo uppercase">
            Product
          </span>

          {productoDetail?.name !== undefined ? (

            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-900"
              tabIndex="0"
              role="link"
            >
              {productoDetail.name.charAt(0).toUpperCase() +
                productoDetail.name.slice(1)}
            </a>
          ) : null}


          {productoDetail?.description !== undefined ? (
            <p className="mt-2 text-sm text-gray-900">
              {productoDetail.description}
            </p>
          ) : null}
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              
              {productoDetail?.price !== undefined ? (
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-900"
                  tabIndex="0"
                  role="link"
                >
                  $ {productoDetail.price}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center h-28">
      <div className="flex justify-center items- mr-5">
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
        <button
          className="flex justify-center bg-nintendo text-white font-medium p-2 rounded-sm mr-5"
          onClick={handleClick}
        >
          Añadir al Carrito
        </button>
        <br />
        <Link to={`/review/${params.id}`}>
          <button className="flex justify-center bg-nintendo text-white font-medium p-2 rounded-sm mr-5">
            Dejar reseña
          </button>
        </Link>

        <Link to="/home">
          <button className="flex justify-center bg-nintendo text-white font-medium p-2 rounded-sm">
            Volver
          </button>
        </Link>
      </div>
      <div className="w-full h-auto bg-slate-100 flex items-center justify-center">
      <Reviews />
      </div>
    </div>
    </section>
  );
}

{
  /* <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">

      {productoDetail?.imageUrl !== undefined ? (
      <img
        src={productoDetail.imageUrl}
        alt="Article"
      />
       ) : (
            setTimeout(0)
          )}
      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
            Product
          </span>


          {productoDetail?.name !== undefined ? (
          <a
            href="#"
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabIndex="0"
            role="link"
          >
             {" "}
              {productoDetail.name.charAt(0).toUpperCase() +
                productoDetail.name.slice(1)}
          </a>
        {productoDetail?.stock > 1 ? (
           <h1 className="px-4 py-2 text-base font-medium text-[#484848]">
           Unidades disponibles: {productoDetail.stock}
           </h1>) : (
           <h1 className="text-base font-medium text-black">Sin Stock!</h1>
          )}
          {productoDetail?.price !== undefined ? (
            <h1 className="px-4 py-2 text-base font-medium text-[#484848]">
              $ {productoDetail.price}
            </h1>

          ) : (
            setTimeout(0)
          )}

          {productoDetail?.description !== undefined ? (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {productoDetail.description}
          </p>
          ) : (
            setTimeout(0)
          )}
        </div>

        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="object-cover h-10 rounded-full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              {productoDetail?.price !== undefined ? (
              <a
                href="#"
                className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                tabIndex="0"
                role="link"
              >
                $ {productoDetail.price}
              </a>
              ) : (
            setTimeout(0)
          )}
            </div>
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
          </div>
        </div>
      </div>
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
     </div> */
}



// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { getProductById, sumarCarrito, modifyProducts } from "../Redux/actions";
// import { getAuth, signOut } from "firebase/auth";
// import Reviews from "./Reviews/Reviews";

// export default function ProductDetail() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const auth = getAuth();

//   let dispatch = useDispatch();
//   let params = useParams();

//   const verified = useSelector((state) => state.userVerified);

//   const id = localStorage.getItem("id");
//   useEffect(() => {
//     params.id ? dispatch(getProductById(params.id)) : null;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [params.id, dispatch]);
//   const productoDetail = useSelector((state) => state.productDetail);
//   console.log(productoDetail);
//   const [quantity, setQuantity] = useState(1);
//   const data = {
//     userId: parseInt(id),
//     productId: { id: parseInt(params.id), quantity: quantity },
//   };
//   // const data = { userId: parseInt(id), productId:parseInt(params.id)};
//   //const carrito = useSelector((state) => state.cartByUserId);
//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   let pagoExitoso=localStorage.getItem('pagoExitoso')
//   const handleClick = () => {
//     if (verified.user?.isActive === false) {
//       signOut(auth)
//         .then(() => {
//           console.log("sign out successful");
//           localStorage.clear();
//           navigate("/banned-user");
//         })
//         .catch((error) => console.log(error));
//     } else {
//       if(pagoExitoso==='true'){
//         localStorage.setItem('pagoExitoso', false)
//       }
//       dispatch(sumarCarrito(data));
//       dispatch(modifyProducts({ id: parseInt(params.id), stock: productoDetail.stock - quantity }));
//       console.log(data);
//       alert("Agregado Correctamente!");
//       navigate("/home");
//     }
//   };
//   // console.log(carrito);

//   if (loading) {
//     setLoading(false);
//     return <div>Cargando...</div>; // Indicador de carga
//   }