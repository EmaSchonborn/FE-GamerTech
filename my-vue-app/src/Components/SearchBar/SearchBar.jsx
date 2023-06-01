import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../Redux/actions";

export default function SearchBar({ setCurrentPage }) {
  let dispatch = useDispatch();

  // const [name, setName] = useState("")
  const [searchProduct, setSearchProduct] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setSearchProduct(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getProductByName(searchProduct));
    setSearchProduct("");
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        className="px-4 py-2 border border-gray-300 rounded"
        type="text"
        placeholder="Buscar Producto..."
        value={searchProduct}
        onChange={(e) => handleInput(e)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleClick(e);
          }
        }}
      />
      <button
        type="submit"
        className="ml-2 bg-nintendo hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={(e) => handleClick(e)}
      >
        {" "}
        Buscar
      </button>
    </div>
  );
}
