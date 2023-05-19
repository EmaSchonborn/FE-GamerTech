import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../Redux/actions";

const ProductDetail = () => {
	const [loading, setLoading] = useState(true);
	let dispatch = useDispatch();
	let params = useParams();

	useEffect(() => {
		params? dispatch(getProductById(params.id)) : null
	}, [params.id, dispatch]);
	const productoDetail = useSelector((state) => state.productDetail);
	console.log(productoDetail);

	if (loading) {
		setLoading(false);
		return <div>Cargando...</div>; // Indicador de carga
	}
	return (
		<div className="flex items-center justify-center h-screen w-full bg-gray-800">
		<div className="container mx-auto p-4">
			<div className="w-6/12 h-96 rounded-md shadow-2xl bg-indigo-700 text-white p-5 flex flex-col justify-around">
			{productoDetail?.name !== undefined ? (
				<h1>
				Nombre: {" "}
					{productoDetail.name.charAt(0).toUpperCase() +
						productoDetail.name.slice(1)}
				</h1>
			) : (
				setTimeout(0)
			)}
			{productoDetail?.description !== undefined ? (
				<h1>Description: {productoDetail.description}</h1>
			) : (
				setTimeout(0)
			)}
      	    {productoDetail?.price!== undefined ? (
				<h1>Price: {productoDetail.price}</h1>
			) : (
				setTimeout(0)
            )}
        	{productoDetail?.imageUrl!== undefined ? (
				<h1>Image: {productoDetail.imageUrl}</h1>
			) : (
				setTimeout(0)
            )}
		<div className="flex justify-center items-center h-24">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Comprar</button>
        <br />
        <Link to="/home">
        <button className="flex-none rounded-md bg-black px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
         Volver
        </button>
        </Link>
		</div>
		</div>
		</div>
		</div>
	);
};

export default ProductDetail;