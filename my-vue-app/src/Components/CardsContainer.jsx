import { useState, useEffect } from "react";
import { sortProducts } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Paginate from "./Paginate";
import CardHome from "./CardHome/CardHome";
import SearchBar from "./SearchBar/SearchBar";

export default function CardsContainer() {
  const [options, setOptions] = useState({
    sort: "",
    option: "",
  });
  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.filteredProducts);

  const handleChange = (e) => {
    e.preventDefault();
    setOptions({ ...options, [e.target.name]: e.target.value });
  };

  const handleFilter = async (e) => {
    e.preventDefault();
    dispatch(
      sortProducts({
        array: products,
        sort: options.sort,
        type: options.option,
      })
    );
  };

  const [currentPage, setCurrentPage] = useState(1);

  const pagination = (indexPage) => {
    setCurrentPage(indexPage);
  };

  const handlePrevPagination = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleNextPagination = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const handleFirstCell = () => {
    setCurrentPage(1);
  };
  const handleLastCell = () => {
    setCurrentPage(lastCell);
  };

  const displayedProducts = 6;
  const finalReference = currentPage * displayedProducts;
  const initialReference = finalReference - displayedProducts;
  const paginationProducts = products?.slice(initialReference, finalReference);
  const lastCell = Math.ceil(products?.length / displayedProducts);

  let startPage = Math.max(currentPage - 1, 1);
  let endPage = Math.min(currentPage + 4, lastCell);
  if (endPage - startPage < 6) {
    startPage = Math.max(endPage - 4, 1);
  }

  const totalPages = [];
  for (let i = startPage; i <= endPage; i++) {
    totalPages.push(i);
  }

  const PaginationSection = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return (
      <div className="flex justify-center items-end mt-4 gap-x-5 mb-5">
        <div className="flex space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={handleFirstCell}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500"
                : "bg-white text-gray-500 hover:bg-gray-200"
            }`}
          >
            Primero
          </button>
          <button
            disabled={currentPage === 1}
            onClick={handlePrevPagination}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500"
                : "bg-white text-gray-500 hover:bg-gray-200"
            }`}
          >
            ⇠
          </button>
        </div>

        <div className="flex items-center">
          <Paginate
            totalPages={totalPages}
            paginate={pagination}
            currentPage={currentPage}
          />
        </div>

        <div className="flex space-x-2">
          <button
            disabled={currentPage === lastCell}
            onClick={handleNextPagination}
            className={`px-4 py-2 rounded ${
              currentPage === lastCell
                ? "bg-gray-300 text-gray-500"
                : "bg-white text-gray-500 hover:bg-gray-200"
            }`}
          >
            ⇢
          </button>
          <button
            disabled={currentPage === lastCell}
            onClick={handleLastCell}
            className={`px-4 py-2 rounded ${
              currentPage === lastCell
                ? "bg-gray-300 text-gray-500"
                : "bg-white text-gray-500 hover:bg-gray-200"
            }`}
          >
            Último
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <SearchBar setCurrentPage={setCurrentPage} />

        <form onSubmit={(e) => handleFilter(e)} className="ml-4 mb-4">
          <div className="flex items-center">
            <select
              name="option"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded mr-2"
            >
              <option value="name">Orden alfabético</option>
              <option value="price">Precio</option>
            </select>

            <select
              name="sort"
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded mr-2"
            >
              <option value="ascendente">Ascendente</option>
              <option value="descendente">Descendente</option>
            </select>

            <button
              type="submit"
              className="ml-2 bg-nintendo hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Filtrar
            </button>
          </div>
        </form>
      </div>
      <PaginationSection />
      <div className="grid grid-cols-3 gap-4">
        {paginationProducts.map((p) => {
          return (
            <CardHome
              key={p.id}
              id={p.id}
              name={p.name}
              description={p.description}
              price={p.price}
              imageUrl={p.imageUrl}
              stock= {p.stock}
            />
          );
        })}
      </div>
      <PaginationSection />
    </>
  );
}
