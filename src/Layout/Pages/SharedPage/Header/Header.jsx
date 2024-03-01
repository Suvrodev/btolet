import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import headerLogo from '../../../../assets/Logo/logo.png'
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaBaby, FaBars, FaCross, FaReply } from 'react-icons/fa';
import { FiAlertCircle, FiEdit, FiHeart, FiPhoneCall, FiRadio, FiSearch, FiUser } from 'react-icons/fi';

const Header = () => {

  const {currentUser,lattitude,longitude,doubleLocation}=useContext(AuthContext)

  // console.log("Current User Header: ",currentUser);
  // const {image}=currentUser


  const [profileBox,setProfileBox]=useState(false)
  const [leftNav,setLeftNav]=useState(false)
 
  const handleProfileBox=()=>{
    setProfileBox(!profileBox)
  }

  const handleLeftNav=()=>{
    setLeftNav(!leftNav)
  }
  
  // console.log("Left Nav: ",leftNav);

  const handleLogout=()=>{
    console.log("Logout");
    localStorage.removeItem('uId')
    localStorage.setItem('uId',"***")
    window.location.reload()
  }
  
  
      const NavItems=<div className='lg:flex items-center justify-center text-white'>
          <li><NavLink className={({isActive})=> isActive? 'text-green-600 rb_rg font-extrabold ':'rb_rg'}  to='/home'>Home</NavLink ></li>
          <li><NavLink className={({isActive})=> isActive? 'text-green-600 rb_rg font-extrabold ':'rb_rg'}  to='/buy'>Buy</NavLink ></li>
          <li className='text-black'>{lattitude}</li>
     </div>

    return (
      <div>

            <div className='hidden  w-full h-[75px] border-4 p-5 md:flex items-center justify-end '>
                    <div className='w-[70%] flex justify-start items-center gap-10'>
                        <div className='flex gap-5 items-center '>
                          <Link to='/'><img className='w-[50px] h-[50px]' src={headerLogo} alt="" /></Link>
                          <h1 className='h-[50px] text-4xl font-bold my-auto'>B2Let</h1>
                        </div>
                        <div className='text-lg flex gap-5 items-center'>
                            <NavLink className={({isActive})=> isActive? 'text-green-600 ':'rb_rg'}  to='/home'>Home</NavLink >
                            <NavLink className={({isActive})=> isActive? 'text-green-600 ':'rb_rg'}  to='/buy'>Buy</NavLink >
                            <li>{lattitude}</li>
                            <li>{longitude}</li>
                            <li>{doubleLocation}</li>
                        </div>
                    </div>
                    <div className='w-[30%] flex items-center justify-end'>
                        {
                          currentUser?
                          <div className='relative'>
                            <img className='w-[45px] h-[45px] rounded-full' onClick={handleProfileBox} src={currentUser?.image} alt="" />

                            <div className={`w-[270px] border-2 absolute top-14 right-0 bg-green-500 rounded-md p-5 z-10 ${profileBox?'':'hidden'}`}>
                              <div className='flex flex-col gap-4'>
                                  <Link to='/updateprofile'> <span className='flex items-center gap-2'> <FiUser /> Profile</span> </Link>
                                  <Link to='/savedpost'><span className='flex items-center gap-2'> <FiHeart /> Saved</span></Link>
                                  <Link to='/mypost'><span className='flex items-center gap-2'> <FiEdit  /> My Post</span></Link>
                                  <Link to=''><span className='flex items-center gap-2'> <FiRadio />Feedback</span></Link>
                                  <p className='h-[1px] bg-black mt-4 mb-2'></p>
                                  <Link to=''><span className='flex items-center gap-2'> <FiSearch />Terms And Condition</span></Link>
                                  <Link to=''><span className='flex items-center gap-2'> <FiPhoneCall />Contact us</span></Link>
                                  <Link to=''><span className='flex items-center gap-2'> <FiAlertCircle />About US</span></Link>
                                  <button onClick={handleLogout} className='btn btn-error'>Logout</button>
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