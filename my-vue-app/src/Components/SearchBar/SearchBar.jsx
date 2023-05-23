import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../Redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setProduct(e.target.value)
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getProductByName(product));
  }
console.log(product);
  return (
    <div className="flex justify-center bg-indigo-600">
      <form className="text-white">
        <input type="text" placeholder="Buscar..." onChange={handleChange} className="bg-white mr-2 rounded-sm p-2" />
        <button type="submit" onClick={handleClick} className="bg-black rounded-md text-white py-2 hover:scale-105 duration-300" >Find</button>
      </form>
    </div>
  );
}
