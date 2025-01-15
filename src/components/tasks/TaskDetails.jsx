import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../../styles/TaskDetails.css';

function TaskDetails() {
	const { taskId } = useParams();
	const task = useSelector((state) =>
		state.tasks.list.find((t) => t.id === taskId)
	);

	if (!task) {
		return <div className="detail-container">Task not found</div>;
	}

	return (
		<div className="detail-container">
			<h2 className="detail-title">{task.title}</h2>
			<p className="detail-description">{task.description}</p>
		</div>
	);
}

export default TaskDetails;
