export const Pagination = ({
  pagesList,
  setCurrentPage,
  prevPage,
  nextPage,
}) => {
  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <ul className="flex flex-row gap-2 items-center">
      <li
        className="px-2 border-2 border-sky-400 text-sky-900 rounded-md cursor-pointer"
        onClick={prevPage}
      >
        {"<"}
      </li>
      {pagesList.map((page) => (
        <li
          className="px-2 border-2 border-sky-400 rounded-md text-sky-900 cursor-pointer"
          onClick={() => changePage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
      <li
        className="px-2 border-2 border-sky-400 text-sky-900 rounded-md cursor-pointer"
        onClick={nextPage}
      >
        {">"}
      </li>
    </ul>
  );
};
