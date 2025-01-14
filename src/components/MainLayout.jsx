import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TaskList from './tasks/TaskList';
import NewTaskForm from './tasks/NewTaskForm';

function MainLayout() {
	const [filter, setFilter] = useState('all');

	const handleFilter = (newFilter) => {
		setFilter(newFilter);
	};

	return (
		<div className="main-layout">
			<header className="header-bar">
				<h1 className="header-title">Task List</h1>
			</header>

			<div className="layout-content">
				<div className="left-column">
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
							className={`filter-btn ${filter === 'remaining' ? 'active' : ''}`}
							onClick={() => handleFilter('remaining')}
						>
							Not completed
						</button>
					</div>

					<h2 className="section-title">Tasks</h2>
					<TaskList filter={filter} />

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
