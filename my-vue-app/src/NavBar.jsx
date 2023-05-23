import {Link, useLocation} from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const hideGameStoreButton = location.pathname === "/home";
  const hideBuyButton = location.pathname === "/carrito-de-compras" || location.pathname === "/register"
  const hidePerfilButton = location.pathname === "/perfil" || location.pathname === "/register"
  const hideNavBar = location.pathname === "/";
if(!hideNavBar) {
  return (
    <div> 
      {!hideGameStoreButton && (
        <div>
          <Link to="/home">
            <button>
              Home
            </button>
          </Link>
        </div>
      )}
      {!hideBuyButton && (
        <div>
          <Link to="/carrito-de-compras">
            <button>
              Carrito De Compras
            </button>
          </Link>
        </div>
      )}
      {!hidePerfilButton && (
        <div>
          <Link to="/perfil">
            <button>
              Mi Cuenta
            </button>
          </Link>
        </div>
      )}
    </div> 
     );
}};

export default NavBar