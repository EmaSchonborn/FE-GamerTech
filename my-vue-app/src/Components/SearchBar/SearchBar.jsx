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
    <div className="flex justify-center bg-indigo-600">
      <form className="text-white">
        <input type="text" placeholder="Buscar..."  name='search' onChange={handleChange} className="bg-black mr-2 rounded-sm p-2" />
        <button type="submit" onClick={handleSearch} className="bg-black rounded-md text-white py-2 hover:scale-105 duration-300" >Find</button>
      </form>
    </div>
  );
}
