import React from 'react';
import Root from '../components/Root';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        
      </Routes>
    </Router>
  );
}

export default App;
