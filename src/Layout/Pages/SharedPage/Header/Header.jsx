import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import headerLogo from '../../../../assets/Logo/logo.png'
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaBaby, FaBars, FaCross, FaReply } from 'react-icons/fa';

const Header = () => {

  const {currentUser}=useContext(AuthContext)

  console.log("Current User Header: ",currentUser);
  // const {image}=currentUser


  const [profileBox,setProfileBox]=useState(false)
  const [leftNav,setLeftNav]=useState(false)
 
  const handleProfileBox=()=>{
    setProfileBox(!profileBox)
  }

  const handleLeftNav=()=>{
    setLeftNav(!leftNav)
  }
  
  console.log("Left Nav: ",leftNav);
  
  
      const NavItems=<div className='lg:flex items-center justify-center text-white'>
          <li><NavLink className={({isActive})=> isActive? 'text-green-600 rb_rg font-extrabold ':'rb_rg'}  to='/home'>Home</NavLink ></li>
          <li><NavLink className={({isActive})=> isActive? 'text-green-600 rb_rg font-extrabold ':'rb_rg'}  to='/buy'>Buy</NavLink ></li>
     </div>

    return (
      <div>

            <div className='hidden  w-full h-[75px] border-4 p-5 md:flex items-center justify-end '>
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
                                  <Link to='/updateprofile'>Profile</Link>
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




              

              {/* For Mobile Device */}



              <div className='w-full h-[75px] border-4 p-5 flex items-center justify-between md:hidden'>

                 <div onClick={handleLeftNav} className=' relative'>
                    <FaBars />

                    
                    <div className={`w-[300px] h-[100vh] border-2 absolute   bg-green-500 rounded-md p-5 z-10 -top-7 transition duration-700 ease-in-out ${leftNav?'-left-6 duration-700':'left-[500px]'}`}>
                        <div className='mb-10'>
                           <FaReply />
                        </div>
                        <div className='mb-5'>
                          {
                             currentUser &&
                             <div>
                                <img src={currentUser?.image} alt="" className='w-[50px] h-[50px] rounded-full' />
                                <h1>{currentUser?.name}</h1>
                                <h1>{currentUser?.email}</h1>
                             </div>
                          }
                        </div>
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
                 </div>
                 <div>
                    <img className='w-[50px] h-[50px]' src={headerLogo} alt="" />
                 </div>
                 <div>
                 {
                          currentUser?
                          <div className='relative'>
                            <img className='w-[45px] h-[45px] rounded-full'  src={currentUser?.image} alt="" />

                           
                          </div>:
                          <Link to='/login'><button className="btn btn-outline btn-accent text-xl font-bold">Login</button></Link>
                        }
                 </div>

              </div>


      </div>
    );
};

export default Header;