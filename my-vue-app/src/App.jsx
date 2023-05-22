import { Route, BrowserRouter, Routes } from "react-router-dom";
import Register from "./Components/Register.jsx"
import ProductDetail from "./Components/ProductDetail.jsx";
import Home from "./Components/Home.jsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* COMPONENTES GLOBALES */}
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<h1>Landing</h1>} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />

      {/* COMPONENTES DE INFORMACIÓN DE LA EMPRESA */}
      <Route path="/privacy" element={<h1>Política de privacidad</h1>} />
      <Route path="/terms" element={<h1>Términos y condiciones</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />

      {/* COMPONENTES DE AUTENTICACIÓN DEL USUARIO */}
      <Route path="/login" element={<h1>Login</h1>} />
     

      {/* COMPONENTES DE ENTRADA DEL USUARIO UNA VEZ ESTE AUTENTICADO */}
      <Route path="/shoppingCart" element={<h1>Carrito de compras</h1>} />
      <Route path="/profile" element={<h1>Perfil de usuario</h1>} />

      {/* COMPONENTES PARA EL PROCESO DE PAGO DE LOS PRODUCTOS DEL CARRITO */}
      <Route path="/orders" element={<h1>Ordenes de compra</h1>} />
      <Route path="/order/:id" element={<h1>Detalles de la orden</h1>} />
      <Route path="/order/:id/checkout/payment" element={<h1>Pago</h1>} />
      <Route path="/order/:id/checkout/payment/confirmation" element={<h1>Confirmación</h1>} />
      <Route path="/order/:id/checkout/payment/confirmation/success" element={<h1>Compra exitosa</h1>} />
      <Route path="/order/:id/checkout/payment/confirmation/error" element={<h1>Compra fallida</h1>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;