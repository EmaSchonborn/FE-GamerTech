import { useDispatch, useSelector } from "react-redux";
import { getProducts, sendEmail } from "../Redux/actions";
import { useEffect } from "react";
import CardsContainer from "./CardsContainer";
import SearchBar from "./SearchBar/SearchBar";
import { useNavigate } from "react-router";
import loadingImage from "../Imagenes/progress.gif";
import { all } from "axios";

export default function Home() {
  const navigate = useNavigate();
  let isAuthenticated = localStorage.getItem("isAuthenticated");
  const marcaTiempoLogin = localStorage.getItem("marcaTiempoLogin");
  const marcaTiempoActual = Date.now();
  const diferenciaTiempo = marcaTiempoActual - marcaTiempoLogin;
  const minutosTranscurridos = diferenciaTiempo / 60000;
  console.log(minutosTranscurridos);
  if (minutosTranscurridos < 30) {
    console.log("Aún no han pasado 30 minutos");
  }
  if (minutosTranscurridos >= 30) {
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
