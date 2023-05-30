import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../Redux/actions";


export default function SearchBar(){
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
    <div className="">
      <form>
        <input
          className=""
          type="text"
          placeholder="Buscar producto..."
          onChange={handleChange}
        />
        <button
          className=""
          type="submit"
          onClick={handleClick}
        >
          Buscar
        </button>
      </form>
    </div>
  );
}