import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout';
import TaskDetails from './components/tasks/TaskDetails';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
                index
                element={
                  <div>
                    <h3>Select a task</h3>
                  </div>
                }
            />
            <Route path=":taskId" element={<TaskDetails />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
