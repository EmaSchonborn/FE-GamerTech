import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions";
import Card2 from "./Card2";
import Paginate from "./Paginate";

const DashboardAdmin = () => {
  const dispatch = useDispatch();

  //Paginación
  const [currentPage, setCurrentPage] = useState(1);

  const pagination = (indexPage) => {
    setCurrentPage(indexPage);
  };

  const handlePrevPagination = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleNextPagination = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handleFirstCell = () => {
    setCurrentPage(1);
  };
  const handleLastCell = () => {
    setCurrentPage(lastCell);
  };

  const allProducts = useSelector((state) => state.products);

  const displayedProducts = 5;
  const finalReference = currentPage * displayedProducts;
  const initialReference = finalReference - displayedProducts;
  const paginationProducts = allProducts?.slice(
    initialReference,
    finalReference
  );
  const lastCell = Math.ceil(allProducts?.length / displayedProducts);

  let startPage = Math.max(currentPage - 1, 1);
  let endPage = Math.min(currentPage + 4, lastCell);
  if (endPage - startPage < 6) {
    startPage = Math.max(endPage - 4, 1);
  }

  const totalPages = [];
  for (let i = startPage; i <= endPage; i++) {
    totalPages.push(i);
  }
  //----

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!paginationProducts.length) {
    return (
      <div>
        <h1>Cargando contenido...</h1>
      </div>
    );
  } else {
    return (
      <Tabs size="lg" align="center" variant="enclosed-colored">
        <TabList mb="3em">
          <Tab>Productos</Tab>
          <Tab>Clientes</Tab>
          <Tab>Reviews</Tab>
          <Tab>Ventas</Tab>
          <Tab>Órdenes de compra</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div className="flex justify-center mb-4">
              <input
                type="text"
                placeholder="Buscar por nombre"
                className="px-4 py-2 border border-gray-300 rounded"
              />
              <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buscar
              </button>
            </div>

            <div className="flex justify-center">
              <div className="w-3/4 mx-auto">
                <div className="table-container ">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="sticky top-0 bg-white z-10">ID</th>
                        <th className="sticky top-0 bg-white z-10">Nombre</th>
                        <th className="sticky top-0 bg-white z-10">Precio</th>
                        <th className="sticky top-0 bg-white z-10">Stock</th>
                        <th className="sticky top-0 bg-white z-10">Acciones</th>
                      </tr>
                    </thead>

                    <tbody className="">
                      {paginationProducts?.map((p) => (
                        <Card2
                          key={p.id}
                          id={p.id}
                          name={p.name}
                          price={`$ ${p.price}`}
                          isActive={p.isActive}
                          stock={p.stock}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-end mt-4 gap-x-5">
              <div className="flex space-x-2">
                <button
                  disabled={currentPage === 1}
                  onClick={handleFirstCell}
                  className={`px-4 py-2 rounded ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-500"
                      : "bg-white text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  First
                </button>
                <button
                  disabled={currentPage === 1}
                  onClick={handlePrevPagination}
                  className={`px-4 py-2 rounded ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-500"
                      : "bg-white text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  ⇠
                </button>
              </div>

              <div className="flex items-center">
                <Paginate
                  totalPages={totalPages}
                  paginate={pagination}
                  currentPage={currentPage}
                />
              </div>

              <div className="flex space-x-2">
                <button
                  disabled={currentPage === lastCell}
                  onClick={handleNextPagination}
                  className={`px-4 py-2 rounded ${
                    currentPage === lastCell
                      ? "bg-gray-300 text-gray-500"
                      : "bg-white text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  ⇢
                </button>
                <button
                  disabled={currentPage === lastCell}
                  onClick={handleLastCell}
                  className={`px-4 py-2 rounded ${
                    currentPage === lastCell
                      ? "bg-gray-300 text-gray-500"
                      : "bg-white text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  Last
                </button>
              </div>
            </div>
          </TabPanel>

          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    );
  }
};

export default DashboardAdmin;
