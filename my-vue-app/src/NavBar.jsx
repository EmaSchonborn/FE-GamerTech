import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleClick = () => {
    setClick(!click);
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

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
          {!hideDashBoardButton && user && (
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
            <div className="relative ml-3">
              <div>
                <button onClick={handleClick} type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="sr-only">Abrir menu usuario</span>
                <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/484848/user--v1.png"
                    alt="user--v1"
                  />
                </button>
              </div>
            {click && (
            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
             role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
              <Link to="/perfil" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Perfil</Link>
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Configuraciones</Link>
              <div className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">
                {user ? (
                  <>
                    <button onClick={userSignOut}>Desloguearse</button>
                  </>
                ) : (
                  <Link to="/login">
                    Logueo
                  </Link>
                )}
              </div>
            </div>
            )}
          </div>
          )}
        </div>
      </div>
    );
  }
};

export default NavBar;
