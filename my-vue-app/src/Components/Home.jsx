import { useDispatch } from "react-redux";
import { getProducts } from "../Redux/actions";
import { useEffect} from "react";

export default function Home(){
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [])

  const allProducts = useSelector((state) => state.products);

  if (!allProducts.length) {
    return (
      <div>
        <h1>No hay productos para mostrar!</h1>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center bg-white">
        <SearchBar />
        <br />
        <CardsContainer />
      </div>
    );
  }
}
