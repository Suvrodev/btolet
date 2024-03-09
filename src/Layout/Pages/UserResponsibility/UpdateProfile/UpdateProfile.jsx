import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const UpdateProfile = () => {
    const {currentUser,successfullMessage,baseUrl}=useContext(AuthContext)

    console.log("Current User: ",currentUser);

    const phoneCountryCodes = ['+93', '+880', '+355', '+213', '+1-684', '+376', '+244', '+1-264', '+672', '+1-268', '+54', '+374', '+297', '+61', '+43', '+994', '+1-242', '+973', '+880', '+1-246', '+375', '+32', '+501', '+229', '+1-441', '+975', '+591', '+387', '+267', '+55', '+246', '+1-284', '+673', '+359', '+226', '+257', '+855', '+237', '+1', '+238', '+1-345', '+236', '+235', '+56', '+86', '+61', '+61', '+57', '+269', '+682', '+506', '+385', '+53', '+599', '+357', '+420', '+243', '+45', '+253', '+1-767', '+1-809 and 1-829', '+670', '+593', '+20', '+503', '+240', '+291', '+372', '+251', '+500', '+298', '+679', '+358', '+33', '+689', '+241', '+220', '+995', '+49', '+233', '+350', '+30', '+299', '+1-473', '+1-671', '+502', '+44-1481', '+224', '+245', '+592', '+509', '+504', '+852', '+36', '+354', '+91', '+62', '+98', '+964', '+353', '+44-1624', '+972', '+39', '+225', '+1-876', '+81', '+44-1534', '+962', '+7', '+254', '+686', '+383', '+965', '+996', '+856', '+371', '+961', '+266', '+231', '+218', '+423', '+370', '+352', '+853', '+389', '+261', '+265', '+60', '+960', '+223', '+356', '+692', '+222', '+230', '+262', '+52', '+691', '+373', '+377', '+976', '+382', '+1-664', '+212', '+258', '+95', '+264', '+674', '+977', '+31', '+599', '+687', '+64', '+505', '+227', '+234', '+683', '+850', '+1-670', '+47', '+968', '+92', '+680', '+970', '+507', '+675', '+595', '+51', '+63', '+64', '+48', '+351', '+1-787 and 1-939', '+974', '+242', '+262', '+40', '+7', '+250', '+590', '+290', '+1-869', '+1-758', '+590', '+508', '+1-784', '+685', '+378', '+239', '+966', '+221', '+381', '+248', '+232'];
    const wapCountryCodes = ['+93', '+880', '+355', '+213', '+1-684', '+376', '+244', '+1-264', '+672', '+1-268', '+54', '+374', '+297', '+61', '+43', '+994', '+1-242', '+973', '+880', '+1-246', '+375', '+32', '+501', '+229', '+1-441', '+975', '+591', '+387', '+267', '+55', '+246', '+1-284', '+673', '+359', '+226', '+257', '+855', '+237', '+1', '+238', '+1-345', '+236', '+235', '+56', '+86', '+61', '+61', '+57', '+269', '+682', '+506', '+385', '+53', '+599', '+357', '+420', '+243', '+45', '+253', '+1-767', '+1-809 and 1-829', '+670', '+593', '+20', '+503', '+240', '+291', '+372', '+251', '+500', '+298', '+679', '+358', '+33', '+689', '+241', '+220', '+995', '+49', '+233', '+350', '+30', '+299', '+1-473', '+1-671', '+502', '+44-1481', '+224', '+245', '+592', '+509', '+504', '+852', '+36', '+354', '+91', '+62', '+98', '+964', '+353', '+44-1624', '+972', '+39', '+225', '+1-876', '+81', '+44-1534', '+962', '+7', '+254', '+686', '+383', '+965', '+996', '+856', '+371', '+961', '+266', '+231', '+218', '+423', '+370', '+352', '+853', '+389', '+261', '+265', '+60', '+960', '+223', '+356', '+692', '+222', '+230', '+262', '+52', '+691', '+373', '+377', '+976', '+382', '+1-664', '+212', '+258', '+95', '+264', '+674', '+977', '+31', '+599', '+687', '+64', '+505', '+227', '+234', '+683', '+850', '+1-670', '+47', '+968', '+92', '+680', '+970', '+507', '+675', '+595', '+51', '+63', '+64', '+48', '+351', '+1-787 and 1-939', '+974', '+242', '+262', '+40', '+7', '+250', '+590', '+290', '+1-869', '+1-758', '+590', '+508', '+1-784', '+685', '+378', '+239', '+966', '+221', '+381', '+248', '+232'];

    const [selectPhoneCountryCode,setSelectPhoneCountryCode]=useState('+880')
    const [selectWappCountryCode,setSelectWappCountryCode]=useState('+880')

    const handlePhoneCountryCode = (event) => {
        setSelectPhoneCountryCode(event.target.value);
        console.log("Phone Country Code: ",event.target.value);
    };

    const handleWappCountryCode = (event) => {
        setSelectWappCountryCode(event.target.value);
        console.log("Whatsapp Country Code: ",event.target.value);
    };
    

    const handleUpdateProfile=(event)=>{
        event.preventDefault()

        console.log("Update Profile");

        const Form=event.target;
        const name=Form.name.value;
        const phone=Form.phone.value;
        const wapp=Form.wapp.value;

        const userProfile={uid:currentUser?.uid ,name,phone,wapp}
        console.log(userProfile);

        fetch(`${baseUrl}/api/user/profile/update`,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(userProfile)
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("Update Data: ",data);
            if(data){
                successfullMessage("Update Successfully")
            }
        })

    }

   


    return (
        <div>
           <div className='w-full md:w-4/12 border-2 rounded-md p-5 flex flex-col items-center mx-auto'>
               <img className='w-[150px] h-[150px] rounded-full' src={currentUser?.image} alt="" />
               <h1 className='text-2xl font-bol'>{currentUser?.name} ({currentUser?.uid}) </h1>
               <h1 className='text-xl '>{currentUser?.email}</h1>
               <h1 className='h-[1px] w-full bg-black'></h1>

               <form action="" onSubmit={handleUpdateProfile} className='my-4 w-full'>
                  <h1 className='my-2'>Name</h1>
                  <input type="text" name="name" id="" className='input input-bordered w-full text-white' defaultValue={currentUser?.name} />

                  <h1 className='my-2'>Phone</h1>
                <div className='flex gap-2'>
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
                  <input type="number" name="phone" id="" className='input input-bordered w-full text-white' defaultValue={currentUser?.phone}/>
                </div>

                  <h1 className='my-2'>Whatsapp</h1>
                  <div className='flex gap-2'>
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
                     <input type="number" name="wapp" id="" className='input input-bordered w-full text-white' defaultValue={currentUser?.wapp} />
                  </div>

                 <input className='btn btn-warning w-full my-4 text-xl' type="submit" value="Update Profile" />
               </form>

              
           </div>
        </div>
    );
};

export default UpdateProfile;