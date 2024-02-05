import React from 'react';
import Header from '../Pages/SharedPage/Header/Header';
import { Outlet } from 'react-router-dom';

import './Font.css'

const Main = () => {
    return (
        <div className='roboto'>
           <Header></Header>
            <h1 className='rb_rg text-2xl'> This is Main</h1>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;