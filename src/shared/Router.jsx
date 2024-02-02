// Router.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import fakeData from '../shared/fakeData.json';

export default function Router() {
  const [fanLetters, setFanLetters] = useState(fakeData);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home fanLetters={fanLetters} setFanLetters={setFanLetters} />}
        />
        <Route path="/detail/:id" element={<Detail fanLetters={fanLetters}  />} />
      </Routes>
    </BrowserRouter>
  );
}


