import Paginate from "../Paginate";

const Pagination = ({
  currentPage,
  handleFirstCell,
  handlePrevPagination,
  handleNextPagination,
  lastCellProducts,
  handlelastCellProducts,
  pagination,
}) => {
  const pageCalculation = (currentPage, lastCell) => {
    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(currentPage + 4, lastCell);
    if (endPage - startPage < 6) {
      startPage = Math.max(endPage - 4, 1);
    }

    const totalPages = [];
    for (let i = startPage; i <= endPage; i++) {
      totalPages.push(i);
    }

    return totalPages;
  };

  return (
    <div className="flex justify-center items-end mt-4 gap-x-5">
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
          totalPages={pageCalculation(currentPage, lastCellProducts)}
          paginate={pagination}
          currentPage={currentPage}
        />
      </div>

      <div className="flex space-x-2">
        <button
          disabled={currentPage === lastCellProducts}
          onClick={handleNextPagination}
          className={`px-4 py-2 rounded ${
            currentPage === lastCellProducts
              ? "bg-gray-300 text-gray-500"
              : "bg-white text-gray-500 hover:bg-gray-200"
          }`}
        >
          ⇢
        </button>
        <button
          disabled={currentPage === lastCellProducts}
          onClick={handlelastCellProducts}
          className={`px-4 py-2 rounded ${
            currentPage === lastCellProducts
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

export default Pagination;
