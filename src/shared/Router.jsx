import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import { FanLettersProvider } from '../context/FanLettersContext';

export default function Router() {
  return (
    <BrowserRouter>
      <FanLettersProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </FanLettersProvider>
    </BrowserRouter>
  );
}