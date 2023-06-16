import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer px-10 py-4 border-t bg-gray-700 text-white border-base-300 text-xl font-size: 1.25rem;">
        <div className="items-end grid-flow-col">
          <p className="text-slate-50 text-base">
            GamerTech
            <br />
            Todos los derechos reservados | GamerTech.com
          </p>
        </div>
      
        <div className="flex items-end justify-end w-full">
        <div className="flex flex-col">
       <div>
          <Link to="/about">
            <span className="text-slate-50 text-base">Nosotros</span>
          </Link>
        </div>
        <div>
          <Link to="/preguntas-frecuentes">
            <span className="text-slate-50 text-base">Preguntas</span>
          </Link>
        </div>
        <div>
          <span className="text-slate-50 text-base">Contáctanos</span>
        </div>
       </div>
          <div className="grid grid-flow-col gap-4">
            <a href="" target="_blank">
              <img src="https://img.icons8.com/fluency-systems-regular/48/ffffff/instagram-new--v1.png" />
            </a>
            <a>
              <img src="https://img.icons8.com/fluency-systems-regular/48/ffffff/facebook.png" />
            </a>
            <a>
              <img src="https://img.icons8.com/fluency-systems-regular/48/ffffff/linkedin.png" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
