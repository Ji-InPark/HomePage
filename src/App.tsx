import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Career from './pages/Career';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Navigate to={'/home'} />} />
            <Route path={'/home'} element={<Home />} />
            <Route path={'/projects'} element={<Projects />} />
            <Route path={'/career'} element={<Career />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
