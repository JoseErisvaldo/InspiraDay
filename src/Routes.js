import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Profile from './Pages/Profile/Profile';
import Auth from './Pages/Auth/Auth';

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
      <Route path="/Auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}