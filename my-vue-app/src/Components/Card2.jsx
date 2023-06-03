import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts, modifyProducts } from "../Redux/actions";
import Form from "./Form";

export default function Card2(props) {
  const { id, name, description, price, imageUrl, isActive, stock } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState({
    id,
    name,
    description,
    price,
    imageUrl,
    isActive,
    stock,
  });

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (!isEditing) {
  //     dispatch(getProducts());
  //   }
  // }, [isEditing, dispatch]);

  const handleToggleActivation = (updatedData) => {
    const updatedActive = {
      id: updatedData.id,
      name: updatedData.name,
      description: updatedData.description,
      price: updatedData.price,
      imageUrl: updatedData.imageUrl,
      stock: updatedData.stock,
      isActive: !data.isActive,
    };

    dispatch(modifyProducts(updatedActive));
    setData(updatedActive);
  };

  const handleEditProduct = () => {
    setIsEditing(true);
    setData((prevData) => ({
      ...prevData,
      id,
      name,
      description,
      price,
      imageUrl,
      isActive,
      stock,
    }));
  };

  const handleFormSubmit = (updatedData) => {
    const updatedProductData = {
      id: updatedData.id,
      name: updatedData.name,
      description: updatedData.description,
      price: updatedData.price,
      imageUrl: updatedData.imageUrl,
      stock: updatedData.stock,
      isActive: data.isActive,
    };
    dispatch(getProducts());

    dispatch(modifyProducts(updatedProductData))
      .then(() => {
        console.log("Producto modificado");
        setIsEditing(false);
        setData(updatedProductData);
      })
      .catch((error) => {
        console.log("Error al modificar el producto:", error);
      });

    dispatch(getProducts());
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <tr className="text-white">
      <td className="relative py-10 w-1/5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {id}
        </div>
      </td>
      <td className="relative py-10 w-1/5 text-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {name}
        </div>
      </td>
      <td className="relative py-10 w-1/5 text-left">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {price}
        </div>
      </td>
      <td className="relative py-10 w-1/5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {stock}
        </div>
      </td>
      <td className="relative justify-center text-center w-1/5">
        {isEditing ? (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div
              className="fixed inset-0 bg-black opacity-50"
              style={{ pointerEvents: "none" }}
            ></div>
            <div className="relative bg-white border border-gray-300 p-4 ml-80">
              <Form
                initialData={data}
                onCancel={handleCancel}
                onSubmit={handleFormSubmit}
              />
            </div>
          </div>
        ) : (
          <div className="relative">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
              onClick={handleEditProduct}
              disabled={isEditing}
            >
              Editar
            </button>
            {data.isActive ? (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleToggleActivation}
                disabled={isEditing}
              >
                Desactivar
              </button>
            ) : (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleToggleActivation}
                disabled={isEditing}
              >
                Activar
              </button>
            )}
          </div>
        )}
      </td>
    </tr>
  );
}
