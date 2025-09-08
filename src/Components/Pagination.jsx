import React, { useState } from "react";
import Heading from "./Heading";
import Container from "./Container";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Dummy data
  const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="py-[40px]">
      <Container>
        <div className="text-center font-medium text-4xl mb-6">
          <Heading text={"React Pagination"} as={"h3"} />
        </div>

        {/* Show current page items */}
        <ul className="text-center mb-6">
          {currentItems.map((item, index) => (
            <li key={index} className="py-1">{item}</li>
          ))}
        </ul>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2">
          {/* Prev Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-black text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Pagination;
