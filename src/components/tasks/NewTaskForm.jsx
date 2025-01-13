import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';

function NewTaskForm() {
	const dispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleAddTask = (e) => {
		e.preventDefault();
		if (!title.trim()) {
			return;
		}
		dispatch(addTask(title, description));
		setTitle('');
		setDescription('');
	};

	return (
		<form onSubmit={handleAddTask}>
			<h3>Add a task</h3>
			<div>
				<label>Title</label>
				<textarea
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

			<button type="submit">Add</button>
		</form>
	);
}

export default NewTaskForm;
