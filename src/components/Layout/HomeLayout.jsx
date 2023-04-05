import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
 return (
  <div>
    <Header></Header>
    <Outlet></Outlet>
  </div>
 );
};

export default HomeLayout;