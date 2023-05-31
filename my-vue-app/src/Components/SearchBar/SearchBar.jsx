import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../Redux/actions";




export default function SearchBar({setCurrentPage}){

    let dispatch = useDispatch()

    // const [name, setName] = useState("")
    const [searchProduct, setSearchProduct] = useState("");

    const handleInput = (e) => {
        e.preventDefault()
        setSearchProduct(e.target.value)
    };

    const handleClick = (e) => {
        e.preventDefault()
        setCurrentPage(1)
        dispatch(getProductByName(searchProduct))
        setSearchProduct("")
    };

    return(
        <div>
            <div>
            <input type="text" placeholder="Buscar Producto..." value={searchProduct} 
            onChange={(e) => handleInput(e)}
            onKeyPress={(e) => {
                if(e.key === "Enter") {
                    handleClick(e)}
            }}
            />
            <button type="submit" className="bg-nintendo p-1 text-white rounded-sm font-medium" 
            onClick={(e) => handleClick(e)}
            > Buscar
            </button>
            </div>
        </div>
    )
};


