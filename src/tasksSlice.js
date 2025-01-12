import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		list: [],
	},
	reducers: {
		addTask: {
			reducer(state, action) {
				state.list.push(action.payload);
			},
			prepare(title, description) {
				return {
					payload: {
						id: nanoid(),
						title,
						description,
						completed: false,
					},
				};
			},
		},
		updateTask(state, action) {
			const { id, title, description } = action.payload;
			const task = state.list.find((t) => t.id === id);
			if (task) {
				task.title = title;
				task.description = description;
			}
		},
		deleteTask(state, action) {
			const taskId = action.payload;
			state.list = state.list.filter((t) => t.id !== taskId);
		},
	},
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
