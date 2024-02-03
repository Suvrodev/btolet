import React from 'react';
import Header from '../Pages/SharedPage/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           <Header></Header>
           This is Main
           <Outlet></Outlet>
        </div>
    );
};

export default Main;