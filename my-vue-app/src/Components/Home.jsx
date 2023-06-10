import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions";
import { useEffect } from "react";
import CardsContainer from "./CardsContainer";
import { useNavigate } from "react-router";
import loadingImage from "../Imagenes/progress.gif";

export default function Home() {
  const navigate = useNavigate();
  let userId = localStorage.getItem("id");
  let isAuthenticated, marcaTiempoLogin,marcaTiempoActual, diferenciaTiempo, minutosTranscurridos

  if (userId) {
    isAuthenticated = localStorage.getItem("isAuthenticated");
    marcaTiempoLogin = localStorage.getItem("marcaTiempoLogin");
    marcaTiempoActual = Date.now();
    diferenciaTiempo = marcaTiempoActual - marcaTiempoLogin;
    minutosTranscurridos = diferenciaTiempo / 60000;
  }
  console.log(userId);
  if (minutosTranscurridos && minutosTranscurridos < 30) {
    console.log("Aún no han pasado 30 minutos");
  }
  if (minutosTranscurridos && minutosTranscurridos >= 30) {
    localStorage.setItem("isAuthenticated", false);
    localStorage.setItem("marcaTiempoLogin", Date.now());
    alert("Tu sesión ha caducado. Por favor vuelve a iniciar sesión");
    navigate("/login");
  }
  // if (isAuthenticated === "false") {
  //   alert("Tu sesión ha caducado. Por favor vuelve a iniciar sesión");
  //   navigate("/login");
  // }

  const dispatch = useDispatch();

  /* useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]); */

  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (!allProducts.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        {/* <h1>No hay productos para mostrar!</h1> */}
        <img src={loadingImage} alt="Cargando..." />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-200">
        <br />
        <CardsContainer />
      </div>
    );
  }
}
