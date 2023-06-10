import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductById } from "../../Redux/actions";

export default function Reviews() {
	let params = useParams();
	const productoDetail = useSelector((state) => state.productDetail);
	const dispatch = useDispatch();
	useEffect(() => {
		params.id ? dispatch(getProductById(params.id)) : null;
	}, [params.id, dispatch]);
	console.log(productoDetail);
	return <div>Reviews</div>;
}
