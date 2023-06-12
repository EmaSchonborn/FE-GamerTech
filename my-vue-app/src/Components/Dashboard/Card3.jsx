import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementValue, getUsers, modifyUsers } from "../../Redux/actions";
const superAdminKey = import.meta.env.VITE_DESACTIVE_ADMIN;

const Card3 = (props) => {
  const { id, name, email, isActive, createdAt, isAdmin } = props;
  const intentos = useSelector((state) => state.changeRolAttempts);

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
    if (data.isAdmin === true) {
      alert("No es posible desactivar administradores");
    } else {
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
    }
  };

  const handleToggleAdmin = () => {
    if (intentos === 0) {
      alert("Funcionalidad bloqueada");
    } else {
      const contraseña = prompt("Clave superAdmin: ");
      if (contraseña === superAdminKey) {
        alert("Cambio correcto");
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
            console.log("Usuario modificado");
            setData(updatedProductData);
            dispatch(getUsers());
          })
          .catch((error) => {
            console.log("Error al modificar el usuario:", error);
          });
      } else {
        dispatch(decrementValue());
        if (intentos - 1 === 0) {
          alert("Funcionalidad bloqueada");
        } else {
          alert(
            `No fue posible modificar el rol. Quedan ${
              intentos - 1
            } intentos para que se bloquee funcionalidad`
          );
        }
      }
    }
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
          {createdAt.substring(0,10)}
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
