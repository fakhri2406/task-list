import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slice';

function saveToLocalStorage(state) {
	try {
		const serialized = JSON.stringify(state);
		localStorage.setItem('tasks', serialized);
	}
	catch (e) {
		console.warn('Error: could not save to localStorage', e);
	}
}

function loadFromLocalStorage() {
	try {
		const serialized = localStorage.getItem('tasks');
		if (serialized === null) {
			return [];
		}
		return JSON.parse(serialized);
	}
	catch (e) {
		console.warn('Error: could not load from localStorage', e);
		return [];
	}
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

store.subscribe(() => {
	const { list } = store.getState().tasks;
	saveToLocalStorage(list);
});
