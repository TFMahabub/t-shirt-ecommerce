import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer-Section/Footer';
import Header from './Components/Header-Section/Header';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;