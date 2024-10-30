// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Convert from './components/convert'; // Ensure the case matches

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to My App</h1>} />
        <Route path="convert" element={<Convert />} />
      </Routes>
    </Router>
  );
}

export default App;
