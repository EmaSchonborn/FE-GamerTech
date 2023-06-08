import { Route, BrowserRouter, Routes } from "react-router-dom";
import Register from "./Components/Register.jsx";
import ProductDetail from "./Components/ProductDetail.jsx";
import Home from "./Components/Home.jsx";
import { About } from "./Components/About/About.jsx";
import NavBar from "./NavBar.jsx";
import "./Styles/Styles.css";
import { Landing } from "./Pages/Landing.jsx";
import Login from "./Components/Login/Login.jsx";
import Preguntas from "./Components/Preguntas/Preguntas.jsx";
import Perfil from "./Components/Perfil/Perfil.jsx";
import Cart from "./Components/Carrito/Cart.jsx";
import DashboardAdmin from "./Components/Dashboard/DashBoard.jsx";
import CartProductDetail from "./Components/CartProductDetail/CartProductDetail.jsx";
import CartPayment from "./Components/CartPayment/CartPayment.jsx";
import NotFound from "./Components/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        {/* MANEJO DE RUTAS NO CREADAS */}
        <Route path="*" element={<NotFound/>}/>

        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/productCart/:id" element={<CartProductDetail />} />

        {/* COMPONENTES DE INFORMACIÓN DE LA EMPRESA */}
        <Route path="/privacy" element={<h1>Política de privacidad</h1>} />
        <Route path="/terms" element={<h1>Términos y condiciones</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/preguntas-frecuentes" element={<Preguntas />} />
        <Route path="/contact" element={<h1>Contact</h1>} />

        {/* COMPONENTES DE AUTENTICACIÓN DEL USUARIO */}
        <Route path="/login" element={<Login />} />

        {/* COMPONENTES DE ENTRADA DEL USUARIO UNA VEZ ESTE AUTENTICADO */}
        <Route path="/shoppingCart" element={<Cart />} />
        <Route path="/perfil" element={<Perfil />} />

        {/* COMPONENTES PARA EL PROCESO DE PAGO DE LOS PRODUCTOS DEL CARRITO */}
        <Route path="/orders" element={<h1>Ordenes de compra</h1>} />
        <Route path="/order/:id" element={<h1>Detalles de la orden</h1>} />
        <Route path="/order/:id/checkout/payment" element={<h1>Pago</h1>} />
        <Route
          path="/order/:id/checkout/payment/confirmation"
          element={<h1>Confirmación</h1>}
        />

        {/* COMPONENTE PARA USUARIO VERIFICADO COMO ADMIN */}
        <Route path="/controlPanel" element={<DashboardAdmin />} />

        {/* COMPONENTES PARA EL PROCESO DE PAGO DE LOS PRODUCTOS DEL CARRITO */}
        <Route path="/orders" element={<h1>Ordenes de compra</h1>} />
        <Route path="/order/:id" element={<h1>Detalles de la orden</h1>} />
        <Route path="/order/:id/checkout/payment" element={<h1>Pago</h1>} />
        <Route
          path="/order/:id/checkout/payment/confirmation"
          element={<h1>Confirmación</h1>}
        />
        <Route path="/payment/success" element={<CartPayment />} />
        <Route path="/payment/failure" element={<h1>Compra fallida</h1>} />

        <Route
          path="/order/:id/checkout/payment/confirmation/success"
          element={<h1>Compra exitosa</h1>}
        />
        <Route
          path="/order/:id/checkout/payment/confirmation/error"
          element={<h1>Compra fallida</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
