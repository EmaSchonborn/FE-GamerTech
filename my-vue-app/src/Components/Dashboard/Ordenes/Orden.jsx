import React from "react";
import { useSelector } from "react-redux";

export default function Orden(props) {
  const { id, name, products } = props;

  const userPurchases = useSelector((state) => state.userPurchases);
  
  return (
    <tr className="text-white">
      <td className="relative py-10 w-1/12">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"></div>
      </td>
      <td className="relative py-10 w-1/12">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"></div>
      </td>
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
      <td className="relative justify-center text-center w-2/5">
        <div className="relative"></div>
      </td>
    </tr>
  );
}
