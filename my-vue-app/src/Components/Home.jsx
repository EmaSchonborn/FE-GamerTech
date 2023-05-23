import { useDispatch, useSelector } from "react-redux";
import { getProducts, sortProducts, getProductByName } from "../Redux/actions";
import { useEffect, useState } from "react";
import ProductDetail from "./ProductDetail";

export default function Home(){
    const [options, setOptions] = useState({
        search : '',
        sort : '',
        option : '',
        page : 0,
        isSort : 0,
        isSearch : 0
      });
    let dispatch = useDispatch()
    const allProducts = useSelector((state) => state.products)

    const handleChange = (e) =>{
        e.preventDefault();
        setOptions({...options,[e.target.name] : e.target.value});
      }

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])

    const handleFilter = async (e) =>{
        e.preventDefault();
        dispatch(sortProducts({
          array : allProducts,
          sort : options.sort,
          type: options.option
        }))
        options.isSort++;
      }

    const handleSearch = (e) =>{
        e.preventDefault();
        if(options.search === ''){
          dispatch(getProducts());
        }else{
          dispatch(getProductByName(options.search));
        }
        options.isSearch++;
      }
        
    if(!allProducts.length){
            return(
                <div>
                    <h1>No hay productos para mostrar!</h1>
                </div>
            )
    }else {
            return(
                    <div>
                        <form onSubmit={(e) => handleFilter(e)}>
                            <select name='option' onChange={handleChange} >
                            <option value='name'>Orden alfabético</option>
                            <option value='weight'>Peso</option>
                        </select>
                        <select name='sort' onChange={handleChange} >
                            <option value='ascendente'>Ascendente</option>
                            <option value='descendente'>Descendente</option>
                        </select>
                        <button type='submit' >Filtrar</button>
                        </form>
                        <input type='search' name='search' value={options.search} onChange={handleChange}></input>
                        <button type='submit' onClick={handleSearch}>Buscar</button>
                        <ul>
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
            </ul>
        </div>
    )
}}
