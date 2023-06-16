import React from "react";
import { useDispatch } from "react-redux";
import { deleteReview } from "../../../Redux/actions";

export default function Review(props) {
  const { id, name, reseñas, reviewId } = props;

  const dispatch = useDispatch();

  const handleDeleteReview = () => {
    const deleteData = {
      productId: id,
      reviewId: `${reviewId}`,
    };

    dispatch(deleteReview(deleteData))
    // .then(window.location.reload());
  };

  return (
    <tr className="text-white">
      <td className="relative py-10 w-1/12">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"></div>
      </td>
      <td className="relative py-10 w-1/5 text-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          Autor: {name}
        </div>
      </td>
      <td className="relative py-10 w-1/5">
        <div className="absolute justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          "{reseñas}"
        </div>
      </td>
      <td className="relative justify-center text-center w-2/5">
        <div className="relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3 rounded"
            onClick={handleDeleteReview}
          >
            Eliminar Reseña
          </button>
        </div>
      </td>
    </tr>
  );
}
