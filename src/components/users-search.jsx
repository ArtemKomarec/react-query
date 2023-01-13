export const UsersSearch = ({ setSearch }) => {
	const handleChange = (e) => {
		setSearch(e.target.value);
	};
	return (
		<div className="flex flex-col items-center">
			<h1>Search users</h1>
			<input
				className="p-2 rounded-md border-2 border-sky-500	 focus-visible: outline-0	"
				type="text"
				onChange={handleChange}
			/>
		</div>
	);
};

// .select-menu-container:focus-visible {
// 	outline: none;
// }
