/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  BrowserRouter, Route, Routes, NavLink,
} from 'react-router-dom';
import People from './People/People';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
      </ul>
    </nav>
  );
};

const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<People />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
