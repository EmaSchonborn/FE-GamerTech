import React from "react";

export default function Paginate({ paginate, currentPage, totalPages }) {
  return (
    <div className="flex justify-center items-center mt-4">
      <ul className="flex space-x-2 items-center justify-center">
        {totalPages &&
          totalPages.map((No) => (
            <li key={No}>
              <button
                onClick={() => paginate(No)}
                className={`px-4 py-2 rounded ${
                  currentPage === No
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-500 hover:bg-gray-200"
                }`}
              >
                {No}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
