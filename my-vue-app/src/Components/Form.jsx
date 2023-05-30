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
    <div className="bg-gray-800 bg-opacity-75 fixed inset-0 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow-lg"
      >
        <label className="block mb-2">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="block w-full mt-1 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Description:</span>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            className="block w-full mt-1 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          ></textarea>
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Price:</span>
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleChange}
            className="block w-full mt-1 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Image URL:</span>
          <input
            type="text"
            name="imageUrl"
            value={data.imageUrl}
            onChange={handleChange}
            className="block w-full mt-1 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Stock:</span>
          <input
            type="number"
            name="stock"
            value={data.stock}
            onChange={handleChange}
            className="block w-full mt-1 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
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
    </div>
  );
}
