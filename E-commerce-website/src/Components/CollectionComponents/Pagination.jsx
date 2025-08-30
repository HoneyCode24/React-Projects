import React from "react";

const Pagination = ({ totalProducts, productsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-3 mt-12">
      <button
        onClick={handlePrev}
        className="px-4 py-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition"
        disabled={currentPage === 1}
      >
        ← Prev
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`px-4 py-2 rounded-full transition ${
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-blue-600 hover:text-white"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={handleNext}
        className="px-4 py-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition"
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
