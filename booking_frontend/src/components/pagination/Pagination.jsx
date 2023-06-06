import ReactPaginate from "react-paginate";



const MyComponent = ({setPageNumber,totalPages}) => {



    return (
        <ReactPaginate
            className="pagination justify-content-center gap-4 my-4 "
            pageCount={totalPages}
            nextLabel="Next"
            previousLabel="Prev"
            nextClassName="btn btn-primary text-bg-light"
            previousClassName="btn btn-primary text-bg-light"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            onPageChange={
                (data) => {
                    setPageNumber(data.selected + 1);
                }
            }
            activeClassName="active"
        />
    );
};


export default MyComponent;

