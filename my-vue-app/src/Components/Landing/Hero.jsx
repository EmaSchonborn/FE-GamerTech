import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://onlygames.com.ar/wp-content/uploads/2022/03/the-legend-of-zelda-breath-of-the-wild-switch-hero.jpg",
    "https://images.hdqwalls.com/wallpapers/2021-call-of-duty-warzone-yq.jpg",
    "https://images5.alphacoders.com/129/1299476.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const heroStyle = {
    backgroundImage: `url(${images[currentImage]})`,
  };

  const handlerClick = () => {
    // Lógica para manejar el clic del botón
    console.log("Botón 'Salir' clicado");
  };

  return (
    <div className="hero min-h-screen" style={heroStyle}>
      <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed"></div>
      <div className="hero-content flex items-center justify-center text-center text-neutral-content">
        <div className="bg-gray-950/50 bg-opacity-70 p-4 rounded-lg">
          <div className=" text-white p-4 mb-3">
            <p className="font-bold text-4xl">
              Bienvenidos a GamerTech
            </p>
            {/* <p>
              Ponte en contacto con nuestro equipo de soporte para obtener más
              información.
            </p> */}
          </div>
          
          <div className="flex justify-center items-center mt-5">
            <Link to="/login">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4">
                Registrarse
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};