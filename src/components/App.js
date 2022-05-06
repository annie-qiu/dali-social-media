/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  BrowserRouter, Route, Routes, NavLink,
} from 'react-router-dom';
import People from './People/People';
import UserView from './People/UserView';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/people">People</NavLink></li>
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
          <Route path="/:userID" element={<UserView />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
