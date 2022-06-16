import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, Formations } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/formations" element={<Formations />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
