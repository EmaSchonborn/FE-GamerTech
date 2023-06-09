import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import loadingImage from "../Imagenes/progress.gif";
import ChatBot from "./ChatBot/ChatBot";
import CardsContainer from "./CardsContainer";


export default function Home() {
  const navigate = useNavigate();
  let userId = localStorage.getItem("id");
  let isAuthenticated, marcaTiempoLogin, marcaTiempoActual, diferenciaTiempo, minutosTranscurridos;

  if (userId) {
    isAuthenticated = localStorage.getItem("isAuthenticated");
    marcaTiempoLogin = localStorage.getItem("marcaTiempoLogin");
    marcaTiempoActual = Date.now();
    diferenciaTiempo = marcaTiempoActual - marcaTiempoLogin;
    minutosTranscurridos = diferenciaTiempo / 60000;
  }

  const userVerified = useSelector((state) => state.userVerified);
  if(userVerified.user?.isAdmin === true ){
    console.log(userVerified.user.isAdmin)
    navigate("/controlPanel")
  } 
  
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


  useEffect(() => {
    if (minutosTranscurridos && minutosTranscurridos >= 30) {
      localStorage.setItem("isAuthenticated", false);
      localStorage.setItem("marcaTiempoLogin", Date.now());
      alert("Tu sesión ha caducado. Por favor vuelve a iniciar sesión");
      navigate("/login");
    }
  }, [minutosTranscurridos, navigate]);

  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!allProducts.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <img src={loadingImage} alt="Cargando..." />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-200 h-full">
        <div className="fixed bottom-10 right-10 z-10">
          <ChatBot />
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="w-full">
            <CardsContainer />
          </div>
        </div>
      </div>
    );
  }
}
