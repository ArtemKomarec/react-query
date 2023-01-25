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
			<li className="pagination-item" onClick={prevPage}>
				{"<"}
			</li>
			{pagesList.map((page) => (
				<li
					className="pagination-item"
					onClick={() => changePage(page)}
					key={page}
				>
					{page}
				</li>
			))}
			<li className="pagination-item" onClick={nextPage}>
				{">"}
			</li>
		</ul>
	);
};
