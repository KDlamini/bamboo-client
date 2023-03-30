import ReactPaginate from 'react-paginate';
import './paginate.css';

function Paginate({ pageCount, handlePageClick }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName="pagination-container"
      pageClassName="pagination-page"
      pageLinkClassName="pagination-page-link"
      previousClassName="pagination-previous"
      nextClassName="pagination-next"
      activeClassName="active-page"
      activeLinkClassName="active-page-link"
      disabledClassName="pagination-disabled"
    />
  );
}

export default Paginate;
