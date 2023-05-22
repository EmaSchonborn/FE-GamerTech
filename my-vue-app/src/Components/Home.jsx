import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getProducts } from "../Redux/actions";
import { useEffect } from "react";
<<<<<<< HEAD
import ProductDetail from "./ProductDetail"
import NavBar from "../NavBar";
=======
import ProductDetail from "./ProductDetail";
import CardsContainer from "./CardsContainer";
>>>>>>> f78da3538dc40328879f812b7f20aaedde0e6913
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

<<<<<<< HEAD
    
        if(!allProducts.length){
                return(
                        <div>
                            <h1>No hay productos para mostrar!</h1>
                      </div>
                    )
                }else {
                        return(
                                <div>
                                    <NavBar/>
                                {/* <ul>
                                {allProducts.map((p) => (
                                <ProductDetail
                                id = {p.id}
                                name = {p.name}
                                description = {p.description}
                                price = {p.price}
                                imgUrl = {p.imgUrl}
                                />
                        ))
                    }
                </ul> */}
            </div>
        )
    }}
=======
  if (!allProducts.length) {
    return (
      <div>
        <h1>No hay productos para mostrar!</h1>
      </div>
    );
  } else {
    return (
      <div>
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
>>>>>>> f78da3538dc40328879f812b7f20aaedde0e6913
