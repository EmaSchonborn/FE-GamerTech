import React, { useEffect, useState } from "react";

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

  return (
    <div className="hero min-h-screen" style={heroStyle}>
      <div className="bg-opacity-0 bg-hero bg-no-repeat bg-cover bg-center bg-fixed"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Todo lo que buscas en un solo lugar.
          </h1>
          <p className="mb-5"></p>
          <button className="btn btn-primary bg-[#E60011] border-none">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};