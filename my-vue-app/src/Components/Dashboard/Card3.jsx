import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers, modifyProducts, modifyUsers } from "../../Redux/actions";

const Card3 = (props) => {
  const { id, name, email, isActive, createdAt, isAdmin } = props;

  const dispatch = useDispatch();

  const [data, setData] = useState({
    id,
    name,
    email,
    isActive,
    createdAt,
    isAdmin,
  });

  const handleToggleActivation = () => {
    const updatedProductData = {
      id: data.id,
      name: data.name,
      email: data.email,
      isActive: !data.isActive,
      createdAt: data.createdAt,
      isAdmin: data.isAdmin,
    };
    dispatch(modifyUsers(updatedProductData))
      .then(() => {
        console.log("Producto modificado");
        setData(updatedProductData);
        dispatch(getUsers());
      })
      .catch((error) => {
        console.log("Error al modificar el producto:", error);
      });
  };

  const handleToggleAdmin = () => {
    const updatedProductData = {
      id: data.id,
      name: data.name,
      email: data.email,
      isActive: data.isActive,
      createdAt: data.createdAt,
      isAdmin: !data.isAdmin,
    };
    dispatch(modifyUsers(updatedProductData))
      .then(() => {
        console.log("Producto modificado");
        setData(updatedProductData);
        dispatch(getUsers());
      })
      .catch((error) => {
        console.log("Error al modificar el producto:", error);
      });
  };

  return (
    <tr className="text-white">
      <td className="relative py-10 w-1/12">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {id}
        </div>
      </td>
      <td className="relative py-10 w-1/6 text-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {name}
        </div>
      </td>
      <td className="relative w-1/5 text-left">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {email}
        </div>
      </td>

      <td className="relative w-1/5 text-left">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {createdAt}
        </div>
      </td>
      <td className="relative py-10 w-1/5 text-left">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {isAdmin === false ? (
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-5"
              onClick={handleToggleAdmin}
            >
              Normal
            </button>
          ) : (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-5"
              onClick={handleToggleAdmin}
            >
              Admin
            </button>
          )}
        </div>
      </td>
      <td className="relative justify-center text-center w-1/5">
        <div className="relative">
          {data.isActive ? (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-3"
              onClick={handleToggleActivation}
            >
              Desactivar
            </button>
          ) : (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-3"
              onClick={handleToggleActivation}
            >
              Activar
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default Card3;
