import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPurchases,
  getAllPurchasesById,
  getProducts,
  getUsers,
} from "../../Redux/actions";
import Card2 from "./Card2";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "./Pagination";
import Card3 from "./Card3";
import SearchBarDash from "./SearchBarDash";
import Reviews from "./Reviews/Reviews";
import Review from "./Reviews/Review";
import Ordenes from "./Ordenes/Ordenes";
import Orden from "./Ordenes/Orden";

const DashboardAdmin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
    dispatch(getAllPurchases());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.dashFilteredProducts);
  const allUsers = useSelector((state) => state.filteredUsers);
  const allPurchases = useSelector((state) => state.purchases);
  const userPurchase = useSelector((state) => state.userPurchases);
  
  //Lógica, handlers y states de componente ordenes

  const [selectedUserOrder, setSelectedUserOrder] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [mostrarOrden, setMostrarOrden] = useState(false);

  const handlerVerOrden = (userOrder, userId) => {
    setSelectedUserOrder(userOrder);
    setSelectedUserId(userId);
    setMostrarOrden(true);
  };

  const handlerOcultarOrden = () => {
    setSelectedUserOrder(null);
    setMostrarOrden(false);
  };

  useEffect(() => {
    if (selectedUserId) {
      dispatch(getAllPurchasesById(selectedUserId));
    }

  }, [selectedUserId, dispatch]);

  //Handlers y States de componente reseñas

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [mostrarReseñas, setMostrarReseñas] = useState(false);

  const handleVerReseñas = (productId) => {
    setSelectedProductId(productId);
    setMostrarReseñas(true);
  };

  const handleOcultarReseñas = () => {
    setSelectedProductId(null);
    setMostrarReseñas(false);
  };

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

  const handlelastCellReviews = () => {
    setCurrentPage(lastCellreviewedProds);
  };

  //número de elementos en paginación
  const displayedProducts = 5;
  const displayedUsers = 5;
  const displayedReviews = 5;

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

  //lógica para sección de reviews y puntuaciones
  const reviewedProducts = allProducts.filter(
    (obj) => obj.reviewsTexts.length > 0
  );

  let dashReviews = reviewedProducts.filter(
    (obj) => obj.id === selectedProductId
  );

  const dashReviewsObj = dashReviews[0];

  const handleUserName = (userId) => {
    const user = allUsers.find((x) => x.id == userId);

    if (user) {
      return user.name;
    }
    return "";
  };

  //calculos paginación usuarios
  const finalReferenceReviews = currentPage * displayedReviews;
  const initialReferenceReviews = finalReferenceUsers - displayedReviews;

  const paginationReviews = reviewedProducts?.slice(
    initialReferenceReviews,
    finalReferenceReviews
  );

  const lastCellreviewedProds = Math.ceil(
    reviewedProducts?.length / displayedReviews
  );

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
            {mostrarReseñas === false ? (
              <div className="flex justify-center">
                <div className="w-3/4 mx-auto bg-gray-400">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="sticky top-0 bg-white z-10 w-1/12 px-4">
                          ID
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Producto
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Número de reseñas
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Puntuación
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Acción
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {paginationReviews?.map((p) => {
                        const promedioArr = p.reviewsScores.map((v) =>
                          typeof v === "number" ? v : v.score
                        );
                        const sum = promedioArr.reduce(
                          (accumulator, currentValue) =>
                            accumulator + currentValue,
                          0
                        );
                        const average = (sum / promedioArr.length).toFixed(1);

                        return (
                          <Reviews
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            reseñas={p.reviewsScores.length}
                            puntuacion={average}
                            onVerReseñas={handleVerReseñas}
                          />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="w-3/4 mx-auto bg-gray-400">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="sticky  top-0 bg-white z-10 w-1/12 px-6">
                          <button
                            className="bg-gray-300 hover:bg-gray-400 w-10 rounded"
                            onClick={handleOcultarReseñas}
                          >
                            <ArrowBackIcon />
                          </button>
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Producto: {dashReviews[0].name}
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Reseña
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Acciones
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {dashReviewsObj.reviewsTexts.map((p) => (
                        <Review
                          key={p.mensaje}
                          id={selectedProductId}
                          name={handleUserName(p.userId)}
                          reseñas={p.mensaje}
                          reviewId={p.userId}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {mostrarReseñas === false && (
              <Pagination
                currentPage={currentPage}
                handleFirstCell={() => handleFirstCell()}
                handlePrevPagination={() => handlePrevPagination()}
                handleNextPagination={() => handleNextPagination()}
                lastCellProducts={lastCellreviewedProds}
                handlelastCellProducts={() => handlelastCellReviews()}
                pagination={pagination}
              />
            )}
          </TabPanel>

          <TabPanel>
            {mostrarOrden === false ? (
              <div className="flex justify-center">
                <div className="w-3/4 mx-auto bg-gray-400">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Nº Orden
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-3/6 px-4">
                          Comprador
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-2/6 px-4">
                          Acciones
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {allPurchases?.map((p) => (
                        <Ordenes
                          key={p.id}
                          id={p.id}
                          userId={p.userId}
                          name={handleUserName(p.userId)}
                          onVerOrden={handlerVerOrden}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="w-3/4 mx-auto bg-gray-400">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="sticky  top-0 bg-white z-10 w-1/12 px-6">
                          <button
                            className="bg-gray-300 hover:bg-gray-400 w-10 rounded"
                            onClick={handlerOcultarOrden}
                          >
                            <ArrowBackIcon />
                          </button>
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/8 px-4">
                          Comprador: {selectedUserOrder}
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/12 px-4">
                          Nº Orden
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Productos
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Precio Unitario
                        </th>
                        <th className="sticky top-0 bg-white z-10 w-1/6 px-4">
                          Total Abonado
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      
                      {
                      userPurchase.map((p) => (
                        <Orden key={p.id} id={p.id} name={p.productsId} products={allProducts}/>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {mostrarOrden === false && (
              <Pagination
                currentPage={currentPage}
                handleFirstCell={() => handleFirstCell()}
                handlePrevPagination={() => handlePrevPagination()}
                handleNextPagination={() => handleNextPagination()}
                lastCellProducts={lastCellUsers}
                handlelastCellProducts={() => handlelastCellUsers()}
                pagination={pagination}
              />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  }
};

export default DashboardAdmin;
