import React, { useContext } from 'react';
import Header from '../Pages/SharedPage/Header/Header';
import { Outlet } from 'react-router-dom';

import './Font.css'
import './Main.css'
import { AuthContext } from '../../Providers/AuthProvider';


const Main = () => {

    const { screenTouch,setScreenTouch,handleScreenTouch}=useContext(AuthContext)
    
    return (
        <div className='roboto  '>
           <Header></Header>
            {/* <h1 className='rb_rg text-2xl'> This is Main</h1> */}
            <div onClick={handleScreenTouch} className='max-w-[90rem] mx-auto'>
              <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;