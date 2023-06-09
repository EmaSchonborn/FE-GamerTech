import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BannedUser = () => {
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://onlygames.com.ar/wp-content/uploads/2022/03/the-legend-of-zelda-breath-of-the-wild-switch-hero.jpg",
    "https://images.hdqwalls.com/wallpapers/2021-call-of-duty-warzone-yq.jpg",
    "https://images5.alphacoders.com/129/1299476.png",
  ];

  useEffect(() => {
    const preLoadImages = [];
    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.src = images[i];
      preLoadImages.push(img);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  const heroStyle = {
    backgroundImage: `url(${images[currentImage]})`,
  };

  const handlerClick = () => {
    navigate("/");
  };

  return (
    <div className="hero min-h-screen" style={heroStyle}>
      <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed"></div>
      <div className="hero-content flex items-center justify-center text-center text-neutral-content">
        <div className="bg-black bg-opacity-70 p-4 rounded-lg">
          <div className="bg-red-500 text-white p-4 mb-3">
            <p className="font-bold">
              ¡Lo sentimos, pero tu cuenta ha sido suspendida temporalmente!
            </p>
            <p>
              Ponte en contacto con nuestro equipo de soporte para obtener más
              información.
            </p>
            <p>
              Actualmente, no tienes acceso para utilizar las funcionalidades de
              GamerStore.
            </p>
          </div>
          <p>Contáctanos: soporte@gamerstore.com.ar</p>
          <div className="flex justify-center items-center mt-5">
            <Link to="/">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4"
                onClick={handlerClick}
              >
                Salir
              </button>
            </Link>
            <Link to="/home">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-4">
                Ver productos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannedUser;
