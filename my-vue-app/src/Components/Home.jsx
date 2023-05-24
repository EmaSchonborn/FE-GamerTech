import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions";
import { useEffect } from "react";
import CardsContainer from "./CardsContainer";
import SearchBar from "./SearchBar/SearchBar";
// import Filter from "../../components/Filter/Filter";
// import Paginado from "../../components/Paginado/Paginado";
// import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home() {
  let dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!allProducts.length) {
    return (
      <div>
        <h1>No hay productos para mostrar!</h1>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center bg-white">
        <SearchBar/>
        <br/>
        <CardsContainer />
      </div>
    );
  }
}
