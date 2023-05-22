import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions";
import { useEffect } from "react";
import CardsContainer from "./CardsContainer";
import NavBar from "../NavBar";
import SearchBar from "./SearchBar/SearchBar";
// import Filter from "../../components/Filter/Filter";
// import Paginado from "../../components/Paginado/Paginado";
// import SearchBar from "../../components/SearchBar/SearchBar";

export default function Home() {
  let dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  console.log(allProducts);

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
      <div>
        <NavBar/>
        <SearchBar/>
        <CardsContainer />
        {/* <ul>
          {allProducts.map((p) => (
            <ProductDetail
              key={p.id}
              id={p.id}
              name={p.name}
              description={p.description}
              price={p.price}
              imgUrl={p.imgUrl}
            />
          ))}
        </ul> */}
      </div>
    );
  }
}
