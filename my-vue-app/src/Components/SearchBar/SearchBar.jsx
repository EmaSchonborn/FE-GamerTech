import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../Redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchProduct, setSearchProduct] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchProduct(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getProductByName(searchProduct));
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        className="px-4 py-2 border border-gray-300 rounded"
        placeholder="Buscar producto..."
        onChange={handleChange}
      />
      <button
        className="ml-2 bg-gray-500 hover:bg-[#0061FB] text-white font-bold py-2 px-4 rounded"
        type="submit"
        onClick={handleClick}
      >
        Buscar
      </button>
    </div>
  );
}
