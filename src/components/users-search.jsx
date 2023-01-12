export const UsersSearch = ({search, setSearch}) => {
	const handleChange = (e) => {
		setSearch(e.target.value)
	}
	return (
		<div
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<h1>Search users</h1>
			<input type="text" onChange={handleChange}/>
		</div>
	);
};
