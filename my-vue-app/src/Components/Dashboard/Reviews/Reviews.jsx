import React from "react";

export default function Ordenes(props) {
  const { id, name, reseñas, puntuacion, onVerReseñas } = props;

  return (
    <tr className="text-white">
      <td className="relative py-10 w-1/12">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {id}
        </div>
      </td>
      <td className="relative py-10 w-1/5 text-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {name}
        </div>
      </td>
      <td className="relative py-10 w-1/5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {reseñas}
        </div>
      </td>
      <td className="relative py-10 w-1/5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {puntuacion}
        </div>
      </td>
      <td className="relative justify-center text-center w-2/5">
        <div className="relative">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3 rounded"
            onClick={() => onVerReseñas(id)}
          >
            Ver reseñas
          </button>
        </div>
      </td>
    </tr>
  );
}
