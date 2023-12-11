import React from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
    setCurrentPage: (selected: number) => void;
    currentPage: number;
    totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({
    setCurrentPage,
    currentPage,
    totalPages,
}) => {
    const handlePageClick = ({ selected }: { selected: number }) => {
        setCurrentPage(selected + 1);
    };
    
    const showNextButton = currentPage !== totalPages;
    const showPrevButton = currentPage !== 1;

    return (
        <div>
            <ReactPaginate
                breakLabel={<span className="mr-4">...</span>}
                nextLabel={
                showNextButton ? (
                    <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 border border-gray-700 rounded-r-lg hover:text-gray-700">
                        Next
                    </span>
                ) : null
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={totalPages}
                previousLabel={
                showPrevButton ? (
                    <span className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-700 border border-gray-700 rounded-l-lg hover:text-gray-700">
                        Previous
                    </span>
                ) : null
                }
                containerClassName="inline-flex -space-x-px text-sm h-8"
                pageClassName="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 border border-gray-700 hover:text-gray-700"
                activeClassName="bg-gray-300 text-gray-700"
            />
        </div>
    );
}

export default Pagination;