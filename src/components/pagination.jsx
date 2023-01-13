export const Pagination = ({ pagesList, setCurrentPage }) => {
	const changePage = (page) => {
		setCurrentPage(page);
	};

	return (
		<ul className="flex flex-row gap-2 ">
			<li className="cursor-pointer"> {"<"} </li>
			{pagesList.map((page) => (
				<li
					className="px-2 border-2 border-sky-500 rounded-md cursor-pointer"
					onClick={() => changePage(page)}
					key={page}
				>
					{page}
				</li>
			))}
			<li className="cursor-pointer">{">"}</li>
		</ul>
	);
};
