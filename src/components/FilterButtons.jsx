import React from 'react';

function FilterButtons({ filter, onFilterChange }) {
	return (
		<div className="filter-buttons">
			<button
				className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
				onClick={() => onFilterChange('all')}
			>
				Show all
			</button>
			<button
				className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
				onClick={() => onFilterChange('completed')}
			>
				Completed
			</button>
			<button
				className={`filter-btn ${filter === 'remaining' ? 'active' : ''}`}
				onClick={() => onFilterChange('remaining')}
			>
				Remaining
			</button>
		</div>
	);
}

export default FilterButtons;
