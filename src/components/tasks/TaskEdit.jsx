import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTask } from '../../redux/slice';

function TaskEdit() {
	const { taskId } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const task = useSelector((state) =>
		state.tasks.list.find((t) => t.id === taskId)
	);

	const [title, setTitle] = useState(task ? task.title : '');
	const [description, setDescription] = useState(task ? task.description : '');

	if (!task) {
		return <div className="detail-container">Task not found</div>;
	}

	const handleSave = (e) => {
		e.preventDefault();
		dispatch(updateTask({ id: taskId, title, description }));
		navigate(`/${taskId}`);
	};

	return (
		<div className="detail-container">
			<h2 className="detail-title">Edit the task</h2>
			<form onSubmit={handleSave} className="edit-form">
				<div className="form-group">
					<label>Title</label>
					<input
						type="text"
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
					Save
				</button>
			</form>
		</div>
	);
}

export default TaskEdit;
