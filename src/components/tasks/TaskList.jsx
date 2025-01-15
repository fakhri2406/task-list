import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toggleTask, deleteTask } from '../../redux/slice';
import '../../styles/TaskList.css';

function TaskList({ filter, searchQuery }) {
	const tasks = useSelector((state) => state.tasks.list);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	let filteredTasks = tasks;
	if (filter === 'completed') {
		filteredTasks = tasks.filter((t) => t.completed);
	}
	else if (filter === 'remaining') {
		filteredTasks = tasks.filter((t) => !t.completed);
	}

	const query = searchQuery.trim().toLowerCase();
	if (query) {
		filteredTasks = filteredTasks.filter((t) =>
			t.title.toLowerCase().includes(query)
		);
	}

	const handleTaskClick = (taskId) => {
		navigate(`/${taskId}`);
	};

	return (
		<div className="task-list">
			<h2 className="section-title">Tasks</h2>

			{filteredTasks.map((task) => (
				<div
					key={task.id}
					className={`task-item ${task.completed ? 'completed' : ''}`}
				>
					<div className="task-left">
						<input
							type="checkbox"
							checked={task.completed}
							onChange={() => dispatch(toggleTask(task.id))}
						/>
						<span
							className="task-title"
							onClick={() => handleTaskClick(task.id)}
						>
              {task.title}
            </span>
					</div>

					<div className="task-right">
						<Link to={`/${task.id}/edit`}>
							<button className="edit-btn">✎</button>
						</Link>
						<button
							className="delete-btn"
							onClick={() => dispatch(deleteTask(task.id))}
						>
							✕
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default TaskList;
