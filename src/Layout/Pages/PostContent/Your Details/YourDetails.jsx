import React, { useContext, useEffect, useRef, useState } from 'react';
import anImage from '../../../../assets/Image/Suvrodev.jpg'
import { AuthContext } from '../../../../Providers/AuthProvider';
import axios from 'axios';

const YourDetails = ({ur}) => {

    
   


    const {currentUser,setName,setPhone,setWapp,selectedYouAres,setSelectedYouAres,lattitude,longitude,  address,setAddress,name,phone,wapp,
        setSelectPhoneCountryCode,selectPhoneCountryCode,setSelectWappCountryCode,selectWappCountryCode}=useContext(AuthContext)
    // console.log("Your Detais: ",currentUser);

    useEffect(()=>{
        axios.get(`http://154.26.130.64/nominatim/reverse.php?lat=22.7967712&lon=89.551625&format=jsonv2&accept-language=bn`)
        .then(res=>setAddress(res.data.display_name))
    },[])
    // console.log("Addressss: ",address);


    // const nameRef=useRef('')
    // const phnRef=useRef('')
    // const wappRef=useRef('')
    // setName(currentUser?.name)
    // setPhone(currentUser?.phone)
    // setWapp(currentUser?.wapp)

    const handleName=(event)=>{
         setName(event.target.value)
    }
    const handlePhone=(event)=>{
        setPhone(event.target.value)
    }
    const handleWapp=(event)=>{
        setWapp(event.target.value)
    }
       
    

    // setName(nameRef.current.value)

    

     // You Are Start
     const youAres=["Owner","Agent","Developer"]
    //  const [selectedYouAres,setSelectedYouAres]=useState('')
     const handleYouAre=(index)=>{
          setSelectedYouAres(youAres[index])
          console.log("You Are: ",youAres[index]);
     }
     // You Are End


    const phoneCountryCodes = ['+93', '+880', '+355', '+213', '+1-684', '+376', '+244', '+1-264', '+672', '+1-268', '+54', '+374', '+297', '+61', '+43', '+994', '+1-242', '+973', '+880', '+1-246', '+375', '+32', '+501', '+229', '+1-441', '+975', '+591', '+387', '+267', '+55', '+246', '+1-284', '+673', '+359', '+226', '+257', '+855', '+237', '+1', '+238', '+1-345', '+236', '+235', '+56', '+86', '+61', '+61', '+57', '+269', '+682', '+506', '+385', '+53', '+599', '+357', '+420', '+243', '+45', '+253', '+1-767', '+1-809 and 1-829', '+670', '+593', '+20', '+503', '+240', '+291', '+372', '+251', '+500', '+298', '+679', '+358', '+33', '+689', '+241', '+220', '+995', '+49', '+233', '+350', '+30', '+299', '+1-473', '+1-671', '+502', '+44-1481', '+224', '+245', '+592', '+509', '+504', '+852', '+36', '+354', '+91', '+62', '+98', '+964', '+353', '+44-1624', '+972', '+39', '+225', '+1-876', '+81', '+44-1534', '+962', '+7', '+254', '+686', '+383', '+965', '+996', '+856', '+371', '+961', '+266', '+231', '+218', '+423', '+370', '+352', '+853', '+389', '+261', '+265', '+60', '+960', '+223', '+356', '+692', '+222', '+230', '+262', '+52', '+691', '+373', '+377', '+976', '+382', '+1-664', '+212', '+258', '+95', '+264', '+674', '+977', '+31', '+599', '+687', '+64', '+505', '+227', '+234', '+683', '+850', '+1-670', '+47', '+968', '+92', '+680', '+970', '+507', '+675', '+595', '+51', '+63', '+64', '+48', '+351', '+1-787 and 1-939', '+974', '+242', '+262', '+40', '+7', '+250', '+590', '+290', '+1-869', '+1-758', '+590', '+508', '+1-784', '+685', '+378', '+239', '+966', '+221', '+381', '+248', '+232'];
    const wapCountryCodes = ['+93', '+880', '+355', '+213', '+1-684', '+376', '+244', '+1-264', '+672', '+1-268', '+54', '+374', '+297', '+61', '+43', '+994', '+1-242', '+973', '+880', '+1-246', '+375', '+32', '+501', '+229', '+1-441', '+975', '+591', '+387', '+267', '+55', '+246', '+1-284', '+673', '+359', '+226', '+257', '+855', '+237', '+1', '+238', '+1-345', '+236', '+235', '+56', '+86', '+61', '+61', '+57', '+269', '+682', '+506', '+385', '+53', '+599', '+357', '+420', '+243', '+45', '+253', '+1-767', '+1-809 and 1-829', '+670', '+593', '+20', '+503', '+240', '+291', '+372', '+251', '+500', '+298', '+679', '+358', '+33', '+689', '+241', '+220', '+995', '+49', '+233', '+350', '+30', '+299', '+1-473', '+1-671', '+502', '+44-1481', '+224', '+245', '+592', '+509', '+504', '+852', '+36', '+354', '+91', '+62', '+98', '+964', '+353', '+44-1624', '+972', '+39', '+225', '+1-876', '+81', '+44-1534', '+962', '+7', '+254', '+686', '+383', '+965', '+996', '+856', '+371', '+961', '+266', '+231', '+218', '+423', '+370', '+352', '+853', '+389', '+261', '+265', '+60', '+960', '+223', '+356', '+692', '+222', '+230', '+262', '+52', '+691', '+373', '+377', '+976', '+382', '+1-664', '+212', '+258', '+95', '+264', '+674', '+977', '+31', '+599', '+687', '+64', '+505', '+227', '+234', '+683', '+850', '+1-670', '+47', '+968', '+92', '+680', '+970', '+507', '+675', '+595', '+51', '+63', '+64', '+48', '+351', '+1-787 and 1-939', '+974', '+242', '+262', '+40', '+7', '+250', '+590', '+290', '+1-869', '+1-758', '+590', '+508', '+1-784', '+685', '+378', '+239', '+966', '+221', '+381', '+248', '+232'];

    // const [selectPhoneCountryCode,setSelectPhoneCountryCode]=useState('+880')
    // const [selectWappCountryCode,setSelectWappCountryCode]=useState('+880')

    const handlePhoneCountryCode = (event) => {
        setSelectPhoneCountryCode(event.target.value);
        console.log("Phone Country Code: ",event.target.value);
    };

    const handleWappCountryCode = (event) => {
        setSelectWappCountryCode(event.target.value);
        console.log("Whatsapp Country Code: ",event.target.value);
    };

    return (
        <div>
            <p>Your Details</p>
            <p className='w-full h-[1px] bg-gray-400 my-2'></p>


            <div className='flex gap-5 items-center'>
                <div className='w-[50%] flex flex-col justify-center items-center bg-red-500 gap-4'>
                    <div className='flex gap-10'>
                        <div className='w-full md:w-[50%] flex items-center justify-end'>
                        {
                            currentUser?.image &&
                        <img className='w-[180px] h-[200px] rounded-full' src={currentUser?.image} alt="" />
                        }
                        </div>
                        <div className='w-full md:w-[50%] flex flex-col gap-1 justify-center '>
                            <h1>Name</h1>
                            {
                                currentUser?.name &&
                                <input type="text" onChange={handleName}  name="" id="" className='input input-bordered text-white' placeholder='Name' defaultValue={currentUser?.name}  />
                            }
                        
                        </div>
                    </div>

                    <div>
                        {address}
                    </div>
                    
                </div>

                <div className='w-[50%] bg-green-600'>
                    <div>
                        {
                           ur &&
                           <>
                            <h1>You Are</h1>
                            <div className='flex gap-5 my-5'>
                                {youAres.map((youAre, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleYouAre(index)}
                                            className={`btn    ${selectedYouAres===youAre?'btn-primary':'btn-outline btn-info'}`}
                                            >
                                        {youAre}
                                        </button>
                                    ))}
                            </div>
                           </> 
                        }
                    </div>
                

                    <div>
                        <h1>Phone</h1>
                        <div className='flex gap-4'>
                        <div className="w-[20%] text-white">
                            <select 
                                value={selectPhoneCountryCode} 
                                onChange={handlePhoneCountryCode}
                                className=" w-full p-2 input input-bordered"
                            >
                                <option value="" disabled>Select</option>
                                {phoneCountryCodes.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                                ))}
                            </select>
                            </div>
                            <div className='w-[80%]'>
                            <input type="number" onChange={handlePhone} name="" className='input input-bordered text-white' id="" placeholder='013XXX' defaultValue={currentUser?.phone} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1>Whatsapp</h1>
                        <div className='flex gap-4'>
                        <div className="w-[20%] text-white">
                            <select 
                                value={selectWappCountryCode} 
                                onChange={handleWappCountryCode}
                                className=" w-full p-2 input input-bordered"
                            >
                                <option value="" disabled>Select</option>
                                {wapCountryCodes.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                                ))}
                            </select>
                            </div>
                            <div className='w-[80%]'>
                            <input type="number" onChange={handleWapp} name="" className='input input-bordered text-white' id="" placeholder='017XXX' defaultValue={currentUser?.wapp} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourDetails;