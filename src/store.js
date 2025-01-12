import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

function saveToLocalStorage(state) {
	const serialized = JSON.stringify(state);
	localStorage.setItem('tasks', serialized);
}

function loadFromLocalStorage() {
	const serialized = localStorage.getItem('tasks');
	return JSON.parse(serialized);
}

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
	},
	preloadedState: {
		tasks: {
			list: loadFromLocalStorage(),
		},
	},
});
