import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getProducts } from "../../../Redux/actions";

export default function CreateProduct({ initialData, onSubmit, onCancel }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const validate = (form) => {
    let errors = {};
    form.name.length > 0 && !letters.test(form.name)
      ? (errors.name = "Only letters allowed")
      : (errors.name = "");

    form.height.length > 0 && !(form.height >= 5)
      ? (errors.height = "The minimum height is 5 cm")
      : (errors.height = "");

    form.minWeight.length > 0 && !(form.minWeight >= 1)
      ? (errors.minWeight = "The minimum weight is 1 kg")
      : (errors.minWeight = "");

    form.maxWeight.length > 0 && !(form.maxWeight - form.minWeight >= 1)
      ? (errors.maxWeight = "Must be greater than min weight")
      : (errors.maxWeight = "");

    form.life_span.length > 0 && !(form.life_span >= 1)
      ? (errors.life_span = "Minimum life span is 1 year")
      : (errors.life_span = "");
    return errors;
  };

  const [form, setForm] = useState({
    category: "",
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    stock: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(form));
    dispatch(getProducts());
    console.log("Producto agregado con éxito");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-200 bg-opacity-90 p-4 rounded shadow-lg max-w-400"
    >
      <label className="block mb-2">
        <span className="text-black text-lg">Agregar nuevo producto</span>
      </label>
      <label className="block mb-2">
        <span className="text-black">Categoría: </span>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          className="block text-black text-center w-full mt-1 bg-gray-400 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </label>
      <label className="block mb-2">
        <span className="text-black">Nombre:</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="block text-black text-center w-full mt-1 bg-gray-400 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </label>
      <label className="block mb-2">
        <span className="text-black">Descripción:</span>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="block text-black text-center w-full mt-1 bg-gray-400 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
        ></textarea>
      </label>
      <label className="block mb-2">
        <span className="text-black">Precio:</span>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="block text-black text-center w-full mt-1 bg-gray-400 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </label>
      <label className="block mb-2">
        <span className="text-black">URL de Imágen:</span>
        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          className="block text-black text-left w-full mt-1 bg-gray-400 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </label>
      <label className="block mb-2">
        <span className="text-black">Stock:</span>
        <input
          type="number"
          name="stock"
          value={form.stock}
          onChange={handleChange}
          className="block text-black text-center w-full mt-1 bg-gray-400 rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </label>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => onCancel()}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Cancelar
        </button>
        <button
          type="submit"
          onClick={() => onCancel()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Confirmar
        </button>
      </div>
    </form>
  );
}
