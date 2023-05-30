import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions";
import { useEffect } from "react";
import CardsContainer from "./CardsContainer";
import SearchBar from "./SearchBar/SearchBar";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  let isAuthenticated = localStorage.getItem("isAuthenticated");
  const marcaTiempoLogin = localStorage.getItem("marcaTiempoLogin");
  const marcaTiempoActual = Date.now();
  const diferenciaTiempo = marcaTiempoActual - marcaTiempoLogin;
  const minutosTranscurridos = diferenciaTiempo / 60000;
  console.log(minutosTranscurridos);
  if (minutosTranscurridos < 10) {
    console.log("Aún no han pasado 10 minutos");
  }
  if (minutosTranscurridos >= 10) {
    localStorage.setItem("isAuthenticated", false);
    localStorage.setItem("marcaTiempoLogin", Date.now());
  }
  if (isAuthenticated === "false") {
    alert("Tu sesión ha caducado. Por favor vuelve a iniciar sesión");
    navigate("/login");
  }

  const dispatch = useDispatch();

  /* useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]); */

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const allProducts = useSelector((state) => state.products);

  if (!allProducts.length) {
    return (
      <div>
        <h1>No hay productos para mostrar!</h1>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-200">
        <SearchBar />
        <CardsContainer />
      </div>
    );
  }
}
