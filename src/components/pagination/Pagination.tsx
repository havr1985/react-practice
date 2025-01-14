import { FC } from 'react';

type props = {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: FC<props> = ({ currentPage, totalPage, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className="flex gap-10 mb-4 text-2xl text-green-600">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`${currentPage === 1 ? 'text-gray-400' : ' '}`}>
        Prev
      </button>
      <div className="text-neutral-700">
        Page {currentPage} of {totalPage}
      </div>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPage}
        className={`${currentPage === totalPage ? 'text-gray-400' : ' '}`}>
        Next
      </button>
    </div>
  );
};
