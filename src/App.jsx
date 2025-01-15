import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout';
import TaskDetails from './components/tasks/TaskDetails';
import TaskEdit from './components/tasks/TaskEdit';

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={`App ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
            <header className="header-bar">
                <h1 className="header-title">Task List</h1>
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? '☾' : '☀'}
                </button>
            </header>

            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route
                        index
                        element={
                            <div className="empty-right-column">
                                <h3>Select a task</h3>
                            </div>
                        }
                    />
                    <Route path=":taskId" element={<TaskDetails />} />
                    <Route path=":taskId/edit" element={<TaskEdit />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
