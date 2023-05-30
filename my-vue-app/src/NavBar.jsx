import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [verified, setVerified] = useState(true);

  const location = useLocation();
  const hideGameStoreButton =
    location.pathname === "/home" ||
    location.pathname === "/register" ||
    location.pathname === "/login";

  const hideBuyButton =
    location.pathname === "/shoppingCart" ||
    location.pathname === "/register" ||
    location.pathname === "/login";

  const hideDashBoardButton =
    location.pathname === "/register" ||
    location.pathname === "/login" ||
    location.pathname === "/controlPanel";

  const hidePerfilButton =
    location.pathname === "/perfil" ||
    location.pathname === "/register" ||
    location.pathname === "/login";

  const hideNavBar = location.pathname === "/";

  if (!hideNavBar) {
    return (
      <div className="flex items-center justify-between bg-white p-2 sticky top-0 z-10">
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="p-2 bg-[#E60011] text-white font-semibold rounded-sm"
          >
            <span className="sr-only">Your Company</span>
            <h1>GamerStore</h1>
          </a>
        </div>
        <div className="flex items-center justify-end bg-white p-2">
          {!hideDashBoardButton && verified && (
            <div>
              <Link to="/controlPanel">
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold h-10 py-2 px-4 rounded mr-10">
                  Panel de Control
                </button>
              </Link>
            </div>
          )}
          {!hideGameStoreButton && (
            <div>
              <Link to="/home">
                <button className="mr-5">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/484848/home.png"
                    alt="home"
                  />
                </button>
              </Link>
            </div>
          )}
          {!hideBuyButton && (
            <div>
              <Link to="/shoppingCart">
                <button className="mr-5">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/484848/add-shopping-cart.png"
                    alt="add-shopping-cart"
                  />
                </button>
              </Link>
            </div>
          )}
          {!hidePerfilButton && (
            <div>
              <Link to="/perfil">
                <button>
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/484848/user--v1.png"
                    alt="user--v1"
                  />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default NavBar;
