import React, { useState } from "react";

export default function Form({ initialData, onSubmit, onCancel }) {
  const [data, setData] = useState(initialData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(data);
  };

  return (
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 bg-opacity-90 p-4 rounded shadow-lg max-w-400"
      >
        <label className="block mb-2">
          <span className="text-black">Categoría: </span>
          <input
            type="text"
            name="category"
            value={data.category}
            onChange={handleChange}
            className="block text-black text-center w-full mt-1 bg-gray-400 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <label className="block mb-2">
          <span className="text-black">Nombre:</span>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="block text-black text-center w-full mt-1 bg-gray-400 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <label className="block mb-2">
          <span className="text-black">Descripción:</span>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            className="block text-black text-center w-full mt-1 bg-gray-400 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          ></textarea>
        </label>
        <label className="block mb-2">
          <span className="text-black">Precio:</span>
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
            className="block text-black text-center w-full mt-1 bg-gray-400 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <label className="block mb-2">
          <span className="text-black">URL de Imágen:</span>
          <input
            type="text"
            name="imageUrl"
            value={data.imageUrl}
            onChange={handleChange}
            className="block text-black text-left w-full mt-1 bg-gray-400 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <label className="block mb-2">
          <span className="text-black">Stock:</span>
          <input
            type="number"
            name="stock"
            value={data.stock}
            onChange={handleChange}
            className="block text-black text-center w-full mt-1 bg-gray-400 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Confirmar
          </button>
        </div>
      </form>
  );
}
