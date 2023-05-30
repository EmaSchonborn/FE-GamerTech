import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions";
import { useEffect} from "react";
import SearchBar from "./SearchBar/SearchBar";
import CardsContainer from "./CardsContainer";

export default function Home(){
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const allProducts = useSelector((state) => state.products);

  if (!allProducts.length) {
    return (
      <div>
        <h1>No hay productos para mostrar!</h1>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-200">
        <SearchBar />
        <CardsContainer />
      </div>
    );
  }
}
