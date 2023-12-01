const Paginations = ({ itemsCount, pageSize, currentPage, lastPage, setCurrentPage }) => {
    const handlePrevious = () => {
        if (currentPage === 1) return;
        setCurrentPage((prevState) => prevState - 1);
    };
    const handleNext = () => {
        if (currentPage === Math.ceil(itemsCount / pageSize)) return;
        setCurrentPage((prevState) => prevState + 1);
    };
    return (
        <div className="flex justify-center items-center gap-2 my-5">
            <button id="prev" disabled={currentPage === 1} onClick={handlePrevious} color="primary" size="small" shadow auto>
                Previous
            </button>
            <p className="text-white text-lg">
                {currentPage} of {lastPage}
            </p>
            <button disabled={currentPage === Math.ceil(itemsCount / pageSize)} onClick={handleNext} color="primary" size="small" shadow auto>
                Next
            </button>
        </div>
    );
};
export default Paginations;
