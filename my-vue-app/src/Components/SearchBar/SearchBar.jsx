import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts,getProductByName } from "../../Redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [option, setOption] = useState({
    search: '',
    isSearch : 0
    }
  );

  const handleChange = (e) => {
    e.preventDefault();
    setOption({...option,[e.target.name] : e.target.value});
  };

  const handleSearch = (e) =>{
    e.preventDefault();
    if(option.search === ''){
      dispatch(getProducts());
    }else{
      dispatch(getProductByName(option.search));
    }
    option.isSearch++;
  }

  return (

    <div className="flex justify-center bg-slate-100 p-2 w-full">
      <form className="text-white flex">
        <input type="text" placeholder="Buscar..." onChange={handleChange} className="bg-white mr-2 rounded-sm p-2" />
        <button type="submit" onClick={handleClick}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1"/></button>
=======
    <div className="flex justify-center bg-indigo-600">
      <form className="text-white">
        <input type="text" placeholder="Buscar..."  name='search' onChange={handleChange} className="bg-black mr-2 rounded-sm p-2" />
        <button type="submit" onClick={handleSearch} className="bg-black rounded-md text-white py-2 hover:scale-105 duration-300" >Find</button>

      </form>
    </div>
  );
}
