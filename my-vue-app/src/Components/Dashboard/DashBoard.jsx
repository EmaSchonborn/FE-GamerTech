import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getUsers } from "../../Redux/actions";
import Card2 from "./Card2";
import Paginate from "../Paginate";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "./Pagination";
import Card3 from "./Card3";
import SearchBarDash from "./SearchBarDash";
import { RepeatIcon } from "@chakra-ui/icons";

const DashboardAdmin = () => {
  const dispatch = useDispatch();

  //Paginación productos
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

  const handlelastCellProducts = () => {
    setCurrentPage(lastCellProducts);
  };

  const handlelastCellUsers = () => {
    setCurrentPage(lastCellUsers);
  };

  const allProducts = useSelector((state) => state.dashFilteredProducts);
  const allUsers = useSelector((state) => state.filteredUsers);

  //número de elementos en paginación
  const displayedProducts = 5;
  const displayedUsers = 5; // Cambiar según tus necesidades para los usuarios

  //calculos paginación productos
  const finalReference = currentPage * displayedProducts;
  const initialReference = finalReference - displayedProducts;

  const paginationProducts = allProducts?.slice(
    initialReference,
    finalReference
  );
  const lastCellProducts = Math.ceil(allProducts?.length / displayedProducts);

  //calculos paginación usuarios
  const finalReferenceUsers = currentPage * displayedUsers;
  const initialReferenceUsers = finalReferenceUsers - displayedUsers;

  const paginationUsers = allUsers?.slice(
    initialReferenceUsers,
    finalReferenceUsers
  );
  const lastCellUsers = Math.ceil(allUsers?.length / displayedUsers);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
  }, [dispatch]);

  //lógica para sección de reviews y puntuaciones
  const [selectedOption, setSelectedOption] = useState(true);

  const handleOptionChange = () => {
    setSelectedOption(true);
  };
  const handleOptionChange2 = () => {
    setSelectedOption(false);
  };
  //----------------------------------------------

  if (!paginationProducts.length) {
    return (
      <div>
        <h1></h1>
      </div>
    );
  } else {
    return (
      <Tabs size="lg" align="center" variant="enclosed-colored">
        <TabList mb="3em">
          <Tab>Productos</Tab>
          <Tab>Clientes</Tab>
          <Tab>Reseñas</Tab>
          <Tab>Estadísticas</Tab>
          <Tab>Órdenes de compra</Tab>
        </TabList>

        <TabPanels className="bg-gray-200">
          <TabPanel>
            <SearchBar setCurrentPage={setCurrentPage} />
            <div className="flex justify-center">
              <div className="w-3/4 mx-auto bg-gray-400">
                <div className="table-container ">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="sticky top-0 bg-white z-10 w-1/12">
                          ID
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/4">
                          Nombre
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/5">
                          Precio
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/5">
                          Stock
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/5">
                          Acciones
                        </th>
                      </tr>
                    </thead>

                    <tbody className="">
                      {paginationProducts?.map((p) => (
                        <Card2
                          key={p.id}
                          id={p.id}
                          name={p.name}
                          description={p.description}
                          price={p.price}
                          imageUrl={p.imageUrl}
                          isActive={p.isActive}
                          stock={p.stock}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <Pagination
              currentPage={currentPage}
              handleFirstCell={() => handleFirstCell()}
              handlePrevPagination={() => handlePrevPagination()}
              handleNextPagination={() => handleNextPagination()}
              lastCellProducts={lastCellProducts}
              handlelastCellProducts={() => handlelastCellProducts()}
              pagination={pagination}
            />
          </TabPanel>

          <TabPanel>
            <SearchBarDash setCurrentPage={setCurrentPage} />
            <div className="flex justify-center">
              <div className="w-3/4 mx-auto bg-gray-400">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="sticky top-0 bg-white z-10 w-1/12 px-4">
                        ID
                      </th>
                      <th className="sticky top-0 bg-white z-10 w-1/8 px-4">
                        Nombre
                      </th>
                      <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                        Correo
                      </th>
                      <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                        Creación de Cuenta
                      </th>
                      <th className="sticky top-0 bg-white z-10 w-1/6 pr-10 px-4">
                        Rol
                      </th>
                      <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                        Acciones
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {paginationUsers?.map((p) => (
                      <Card3
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        email={p.email}
                        isActive={p.isActive}
                        createdAt={p.createdAt}
                        isAdmin={p.isAdmin}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Pagination
              currentPage={currentPage}
              handleFirstCell={() => handleFirstCell()}
              handlePrevPagination={() => handlePrevPagination()}
              handleNextPagination={() => handleNextPagination()}
              lastCellProducts={lastCellUsers}
              handlelastCellProducts={() => handlelastCellUsers()}
              pagination={pagination}
            />
          </TabPanel>

          <TabPanel>
            <div className="flex flex-grow justify-center gap-5 mb-3">
              <button
                onClick={handleOptionChange}
                className="btn btn-5 bg-gray-500"
              >
                Reseñas
              </button>
              <button
                onClick={handleOptionChange2}
                className="btn btn-5 bg-gray-500"
              >
                Puntuaciones
              </button>
            </div>

            <div className="flex justify-center">
              <div className="w-3/4 mx-auto bg-gray-400">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="sticky top-0 bg-white z-10 w-1/12 px-4">
                        ID
                      </th>
                      <th className="sticky top-0 bg-white z-10 w-1/8 px-4">
                        Nombre
                      </th>
                      <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                        Producto
                      </th>
                      {selectedOption === true ? (
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Reseña
                        </th>
                      ) : (
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Puntuación
                        </th>
                      )}
                    </tr>
                  </thead>

                  <tbody>
                    
                  </tbody>
                </table>
              </div>
            </div>

            <Pagination
              currentPage={currentPage}
              handleFirstCell={() => handleFirstCell()}
              handlePrevPagination={() => handlePrevPagination()}
              handleNextPagination={() => handleNextPagination()}
              lastCellProducts={lastCellUsers}
              handlelastCellProducts={() => handlelastCellUsers()}
              pagination={pagination}
            />
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    );
  }
};

export default DashboardAdmin;
