import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center">
      <nav className="flex">
        <button
          className={`mx-1 text-black w-[24.5px] h-[24.5px] flex items-center justify-center text-[13px] border border-[1px solid #E9EBEC] rounded ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <RiArrowLeftLine />
        </button>
        {getPages().map(page => (
          <button
            key={page}
            className={`mx-1 text-black w-[24.5px] h-[24.5px] flex items-center justify-center text-[13px] border border-[1px solid #E9EBEC] rounded ${currentPage === page ? 'bg-blue-700 text-white' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={`mx-1 text-black w-[24.5px] h-[24.5px] flex items-center justify-center text-[13px] border border-[1px solid #E9EBEC] rounded ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <RiArrowRightLine />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
