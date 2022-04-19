import ReactPaginate from 'react-paginate'
import './pagination.scss'

// for pagination https://www.npmjs.com/package/react-paginate
const Pagination=({pageCount,changePage})=>{
return(
    <ReactPaginate 
    pageCount={pageCount}
    breakLabel="..."
    containerClassName={"paginationBttns"}
    previousLinkClassName={"previousBttns"}
    nextLinkClassName={"nextBttns"}
    activeClassName={"paginationActive"}
    onPageChange={changePage}
    
    />
)
}
export default Pagination