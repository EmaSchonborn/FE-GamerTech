import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const productsByName=useSelector(state=>state.productsByName)
  console.log(productsByName);

  return (
    <div className="flex justify-center bg-slate-100 w-full p-2">
      <form className="text-black flex">
        <input type="text" placeholder="Buscar..."  name='search' onChange={handleChange} className="bg-white mr-2 rounded-sm p-2" />
        <button type="submit" onClick={handleSearch}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/484848/search--v1.png" alt="search--v1"/></button>
      </form>
    </div>
  );
}
