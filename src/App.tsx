import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import UserCreate from './pages/users/UserCreate';
import Users from './pages/users/Users';
import UserEdit from './pages/users/UserEdit';
import Roles from './pages/roles/Roles';
import RoleCreate from './pages/roles/RoleCreate';
import RoleEdit from './pages/roles/RoleEdit';

// import logo from './logo.svg';
// import Menu from './components/Menu';
// import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/users"} element={<Users />} />
          <Route path={"/users/create"} element={<UserCreate />} />
          <Route path={"/users/:id/edit"} element={<UserEdit />} />
          <Route path={"/roles"} element={<Roles />} />
          <Route path={"/roles/create"} element={<RoleCreate />} />
          <Route path={"/roles/:id/edit"} element={<RoleEdit />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
