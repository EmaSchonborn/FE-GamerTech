import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
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

  return (
    <div className="hero min-h-screen" style={heroStyle}>
      <div className="bg-hero bg-no-repeat bg-cover bg-center bg-fixed"></div>
      <div className="hero-content flex items-center justify-center text-center text-neutral-content">
        <div className="bg-black bg-opacity-70 p-4 rounded-lg">
          <h1 className="text-4xl font-bold mb-8">¡Lo sentimos! Esta página no existe</h1>
          <p className="text-2x1 font-bold mb-8">Puedes ver productos o volver al inicio</p>
          <div className="flex justify-center items-center">
            <Link to="/">
              <button className="bg-nintendo hover:bg-nintendo-700 text-white font-bold py-2 px-4 rounded mx-4">
                Inicio
              </button>
            </Link>
            <Link to="/landing">
              <button className="bg-nintendo hover:bg-nintendo-700 text-white font-bold py-2 px-4 rounded mx-4">
                Productos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
