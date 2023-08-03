import React from "react";
import { Header } from "../Components/Landing/Header";
import { Hero } from "../Components/Landing/Hero";
import { Categories } from "../Components/Landing/Categories";
import { Ofertas } from "../Components/Landing/Ofertas";
import { Marcas } from "../Components/Landing/Marcas";
import { Footer } from "../Components/Landing/Footer";
import ChatBot from "../Components/ChatBot/ChatBot";

export const Landing = () => {
  return (
    <div>
      <div className="fixed bottom-32 right-10 z-10 ">
        <ChatBot />
      </div>
      <div className="font-D-DIN">
        <Header />
        <Hero />
        <div id="categorias">
          <Categories />
        </div>
        <div id="ofertas">{/* <Ofertas /> */}</div>

        <Marcas />
        <Footer />
      </div>
    </div>
  );
};
