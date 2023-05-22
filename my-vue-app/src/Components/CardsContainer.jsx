import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Card from "./Card";

export default function CardsContainer() {
  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const products = useSelector((state) => state.products);

  const handlePageClick = (data) => {
    let currentPage = data.selected;
    setItems(products.slice(currentPage * 3, 3 * (currentPage + 1)));
  };

  useEffect(() => {
    setItems(products.slice(0, 3));
    setpageCount(Math.ceil(products.length / 3));
  }, [products]);

  return (
    <>
      {items.map((p) => {
        return (
          <Card
            key={p.id}
            id={p.id}
            name={p.name}
            description={p.description}
            price={p.price}
            imgUrl={p.imgUrl}
          />
        );
      })}
      <div className="flex items-center justify-center">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"inline-flex -space-x-px"}
          pageClassName={
            "px-3 py-2 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
          pageLinkClassName={"page-link"}
          previousClassName={
            "px-3 py-2 ml-0 leading-tight text-blue-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
          previousLinkClassName={"page-link"}
          nextClassName={
            "px-3 py-2 leading-tight text-blue-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
          nextLinkClassName={"page-link"}
          breakClassName={
            "px-3 py-2 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
          breakLinkClassName={"page-link"}
          activeClassName={
            "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          }
        />
      </div>
    </>
  );
}
