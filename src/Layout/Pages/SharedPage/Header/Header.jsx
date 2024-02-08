import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import headerLogo from '../../../../assets/Logo/logo.png'
import { AuthContext } from '../../../../Providers/AuthProvider';

const Header = () => {

  const {currentUser}=useContext(AuthContext)

  console.log("Current User Header: ",currentUser);
  // const {image}=currentUser


  const [profileBox,setProfileBox]=useState(false)
  const handleProfileBox=()=>{
    setProfileBox(!profileBox)
  }
   
  
  
      const NavItems=<div className='lg:flex items-center justify-center text-white'>
          <li><NavLink className={({isActive})=> isActive? 'text-green-600 rb_rg font-extrabold ':'rb_rg'}  to='/home'>Home</NavLink ></li>
          <li><NavLink className={({isActive})=> isActive? 'text-green-600 rb_rg font-extrabold ':'rb_rg'}  to='/buy'>Buy</NavLink ></li>
     </div>

    return (
       <div className='w-full h-[75px] border-4 p-5 flex items-center justify-end '>
         <div className='w-[70%] flex justify-start items-center gap-10'>
            <div className='flex gap-5 items-center '>
              <img className='w-[50px] h-[50px]' src={headerLogo} alt="" />
              <h1 className='h-[50px] text-4xl font-bold my-auto'>B2Let</h1>
            </div>
            <div className='text-lg flex gap-5 items-center'>
                 <NavLink className={({isActive})=> isActive? 'text-green-600 ':'rb_rg'}  to='/home'>Home</NavLink >
                 <NavLink className={({isActive})=> isActive? 'text-green-600 ':'rb_rg'}  to='/buy'>Buy</NavLink >
               
             </div>
         </div>
         <div className='w-[30%] flex items-center justify-end'>
            {
              currentUser?
              <div className='relative'>
                <img className='w-[45px] h-[45px] rounded-full' onClick={handleProfileBox} src={currentUser?.image} alt="" />

                <div className={`w-[250px] border-2 absolute top-14 right-0 bg-green-500 rounded-md p-5 z-10 ${profileBox?'':'hidden'}`}>
                  <div className='flex flex-col gap-4'>
                      <Link to=''>Profile</Link>
                      <Link to=''>Saved</Link>
                      <Link to=''>My Post</Link>
                      <Link to=''>FeedBack</Link>
                      <p className='h-[1px] bg-black mt-4 mb-2'></p>
                      <Link to=''>Terms And Condition</Link>
                      <Link to=''>Contuct</Link>
                      <Link to=''>About US</Link>
                  </div>
                  
                </div>
              </div>:
              <Link to='/login'><button className="btn btn-outline btn-accent text-xl font-bold">Login</button></Link>
            }
           
         </div>
       </div>
    );
};

export default Header;