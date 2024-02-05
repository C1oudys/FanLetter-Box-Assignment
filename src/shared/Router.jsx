import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import { Provider } from 'react-redux';
import store from '../redux/config/store';

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter basename='FanLetter-Box-Assignment"'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}