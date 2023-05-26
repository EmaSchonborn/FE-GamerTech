import React from 'react';

const DashboardAdmin = () => {
  return (
    <div>
      {/* Barra de navegación */}
      <nav className="bg-gray-800 py-4">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white">Inicio</a></li>
          <li><a href="#" className="text-white">Productos</a></li>
          <li><a href="#" className="text-white">Clientes</a></li>
          <li><a href="#" className="text-white">Reviews</a></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <main className="container mx-auto py-8">
        <section id="productos">
          <h2 className="text-2xl font-bold mb-4">Productos</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Aquí puedes generar dinámicamente filas con los productos desde tu backend */}
              <tr>
                <td>1</td>
                <td>Producto 1</td>
                <td>$19.99</td>
                <td>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">Editar</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Desactivar</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Producto 2</td>
                <td>$24.99</td>
                <td>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">Editar</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Desactivar</button>
                </td>
              </tr>
              {/* ... */}
            </tbody>
          </table>
        </section>

        <section id="clientes">
          <h2 className="text-2xl font-bold mb-4">Clientes</h2>
          <table className="w-full">
            {/* Tabla de clientes similar a la de productos */}
          </table>
        </section>

        <section id="reviews">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <table className="w-full">
            {/* Tabla de reviews similar a la de productos */}
          </table>
        </section>

        <section id="ventas">
          <h2 className="text-2xl font-bold mb-4">Ventas</h2>
          <div id="grafica-ventas"></div>
          {/* Aquí puedes utilizar una librería de gráficos como Chart.js para mostrar las gráficas de ventas */}
        </section>

        <section id="ordenes">
          <h2 className="text-2xl font-bold mb-4">Órdenes de compra</h2>
          <div id="grafica-ordenes"></div>
          {/* Aquí puedes utilizar una librería de gráficos para mostrar el estado de las órdenes de compra */}
        </section>
      </main>
    </div>
  );
}

export default DashboardAdmin;