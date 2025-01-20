import React from 'react';
import { Pagination } from 'react-bootstrap';
import './Pagination.css';
const PaginationComp = ({ totalPages, currentPage, onPageChange }) => {
  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
       
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
       
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <Pagination>
        <Pagination.Prev
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        
        {generatePageNumbers().map((page, index) => (
          page === '...' ? (
            <Pagination.Ellipsis key={index} disabled />
          ) : (
            <Pagination.Item
              key={index}
              active={page === currentPage}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Pagination.Item>
          )
        ))}

        <Pagination.Next
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default PaginationComp;
