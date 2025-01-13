import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTask } from './tasksSlice';

function TaskEdit() {
	const { taskId } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const task = useSelector((state) =>
		state.tasks.list.find((t) => t.id === taskId)
	);

	const [title, setTitle] = useState(task ? task.title : '');
	const [description, setDescription] = useState(task ? task.description : '');

	const handleSave = (e) => {
		e.preventDefault();
		dispatch(updateTask({ id: taskId, title, description }));
		navigate(`/${taskId}`);
	};

	return (
		<div>
			<h2>Edit the task</h2>
			<form onSubmit={handleSave}>
				<div>
					<label>Title</label>
					<input
						type="text"
						placeholder="Enter title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>

				<div>
					<label>Description</label>
					<textarea
						placeholder="Enter description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>

				<button type="submit">Save</button>
			</form>
		</div>
	);
}

export default TaskEdit;
