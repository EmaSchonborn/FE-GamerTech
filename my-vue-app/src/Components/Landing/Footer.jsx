import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer flex items-center justify-center p-10 bg-[#E60011] text-xl font-size: 1.25rem; text-white">
        <div>
          <Link to="/about">
          <span>Nosotros</span>
          </Link>
        </div>
        <div>
        <Link to="/preguntas-frecuentes">
          <span>Preguntas</span>
          </Link>
        </div>
        <div>
          <span>Contáctanos</span>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-[#242424] text-white border-base-300 text-xl font-size: 1.25rem;">
        <div className="items-center grid-flow-col">
          <p>
            GamerStore
            <br />
            Todos los derechos reservados | GamerStore.com
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              href=""
              target="_blank"
            >
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