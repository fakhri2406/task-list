import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TaskList from '../components/tasks/TaskList';
import NewTaskForm from '../components/tasks/NewTaskForm';

function MainLayout() {
	const [filter, setFilter] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');

	const handleFilter = (newFilter) => {
		setFilter(newFilter);
	};

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div className="main-layout">
			<header className="header-bar">
				<h1 className="header-title">Task List</h1>
			</header>

			<div className="layout-content">
				<div className="left-column">
					<div className="search-bar-container">
						<input
							type="text"
							className="search-bar"
							placeholder="Search tasks..."
							value={searchQuery}
							onChange={handleSearchChange}
						/>
					</div>

					<div className="filter-buttons">
						<button
							className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
							onClick={() => handleFilter('all')}
						>
							Show all
						</button>
						<button
							className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
							onClick={() => handleFilter('completed')}
						>
							Completed
						</button>
						<button
							className={`filter-btn ${filter === 'notCompleted' ? 'active' : ''}`}
							onClick={() => handleFilter('notCompleted')}
						>
							Not completed
						</button>
					</div>

					<h2 className="section-title">Tasks</h2>
					<TaskList filter={filter} searchQuery={searchQuery} />

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
