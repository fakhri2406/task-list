import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TaskList from '../components/tasks/TaskList';
import NewTaskForm from '../components/tasks/NewTaskForm';
import SearchBar from './SearchBar';
import FilterButtons from './FilterButtons';

function MainLayout() {
	const [filter, setFilter] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');

	const handleFilterChange = (newFilter) => {
		setFilter(newFilter);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div className="main-layout">
			<div className="layout-content">
				<div className="left-column">
					<SearchBar
						searchQuery={searchQuery}
						onSearchChange={handleSearchChange}
					/>

					<FilterButtons
						filter={filter}
						onFilterChange={handleFilterChange}
					/>

					<TaskList
						filter={filter}
						searchQuery={searchQuery}
					/>

					<NewTaskForm />
				</div>

				<div className="right-column">
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
