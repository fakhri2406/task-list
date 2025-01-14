import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './tasksSlice';

function NewTaskForm() {
	const dispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const handleAddTask = (e) => {
		e.preventDefault();
		if (!title.trim()) return;
		dispatch(addTask(title, description));
		setTitle('');
		setDescription('');
	};

	return (
		<form className="new-task-form" onSubmit={handleAddTask}>
			<h3 className="section-title">Add a task</h3>
			<div className="form-group">
				<label>Title</label>
				<textarea
					placeholder="Enter title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>

			<div className="form-group">
				<label>Description</label>
				<textarea
					placeholder="Enter description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					rows={3}
				/>
			</div>

			<button type="submit" className="primary-btn">
				Add
			</button>
		</form>
	);
}

export default NewTaskForm;
