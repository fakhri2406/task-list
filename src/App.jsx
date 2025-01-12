import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout';

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
          </Route>
        </Routes>
      </div>
  );
}

export default App;
