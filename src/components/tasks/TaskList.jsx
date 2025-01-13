import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toggleTask, deleteTask } from './tasksSlice';

function TaskList({ filter }) {
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

	const handleTaskClick = (taskId) => {
		navigate(`/${taskId}`);
	};

	return (
		<div>
			{filteredTasks.map((task) => (
				<div key={task.id}>
					<div>
						<input
							type="checkbox"
							checked={task.completed}
							onChange={() => dispatch(toggleTask(task.id))}
						/>
						<span onClick={() => handleTaskClick(task.id)}>
                            {task.title}
                        </span>
					</div>

					<div>
						<Link to={`/${task.id}/edit`}>
							<button>Edit</button>
						</Link>
						<button onClick={() => dispatch(deleteTask(task.id))}>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default TaskList;
