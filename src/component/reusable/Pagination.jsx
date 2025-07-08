// Pagination.js
import React from 'react'

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  

  return (
    <div className='flex gap-2 w-full justify-center mt-5'>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-3 py-1 rounded ${
            currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;