import React from 'react';

function SearchBar({ searchQuery, onSearchChange }) {
	return (
		<div className="search-bar-container">
			<input
				type="text"
				className="search-bar"
				placeholder="Search tasks..."
				value={searchQuery}
				onChange={onSearchChange}
			/>
		</div>
	);
}

export default SearchBar;
