import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function TaskDetails() {
	const { taskId } = useParams();
	const task = useSelector((state) =>
		state.tasks.list.find((t) => t.id === taskId)
	);

	return (
		<div>
			<h2>{task.title}</h2>
			<p>{task.description}</p>
		</div>
	);
}

export default TaskDetails;
