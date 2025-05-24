import React from "react";
const Pagination = ({ currentPage, totalPages, setCurrentPage }) => (
  <div className="flex justify-between items-center mt-6">
    <span className="text-sm text-gray-600">
      Page {currentPage} of {totalPages}
    </span>
    <div className="flex gap-2">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-white border rounded hover:bg-gray-100 disabled:opacity-50"
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-white border rounded hover:bg-gray-100 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
);
export default Pagination;
