import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Career from './pages/Career';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/career'} element={<Career />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
