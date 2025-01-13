import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NewTaskForm from "./tasks/NewTaskForm";
import TaskList from './tasks/TaskList';

function MainLayout() {
	const [filter, setFilter] = useState('all');

	const handleFilter = (newFilter) => {
		setFilter(newFilter);
	};

	return (
		<div>
			<header>
				<h1>Task List</h1>
			</header>

			<div>
				<div>
					<div>
						<button onClick={() => handleFilter('all')}>Show all</button>
						<button onClick={() => handleFilter('completed')}>Completed</button>
						<button onClick={() => handleFilter('remaining')}>Remaining</button>
					</div>

					<NewTaskForm />

					<h2>Tasks</h2>
					<TaskList filter={filter} />
				</div>

				<div>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default MainLayout;
