import ReactPaginate from 'react-paginate';

function Paginate({ pageCount, handlePageClick }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  );
}

export default Paginate;
