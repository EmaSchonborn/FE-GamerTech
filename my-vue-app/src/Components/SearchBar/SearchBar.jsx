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
    <div className="flex justify-center bg-slate-100 p-2 w-full">
      <form className="text-white flex">
        <input type="text" placeholder="Buscar..." onChange={handleChange} className="bg-white mr-2 rounded-sm p-2" />
        <button type="submit" onClick={handleClick}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1"/></button>
      </form>
    </div>
  );
}
