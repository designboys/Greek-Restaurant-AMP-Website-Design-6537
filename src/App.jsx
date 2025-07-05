import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import SwipeContainer from './components/SwipeContainer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SwipeContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;