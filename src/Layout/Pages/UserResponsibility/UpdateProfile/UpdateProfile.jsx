import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const UpdateProfile = () => {
    const {currentUser}=useContext(AuthContext)


    const handleUpdateProfile=(event)=>{
        event.preventDefault()

        console.log("Update Profile");

        const Form=event.target;
        const name=Form.name.value;
        const phone=Form.phone.value;
        const wapp=Form.wapp.value;

        const userProfile={uid:currentUser?.uid ,name,phone,wapp}
        console.log(userProfile);

        fetch(`http://154.26.135.41:3800/api/user/profile/update`,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(userProfile)
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("Update Data: ",data);
        })

    }

    return (
        <div>
           <div className='w-4/12 border-2 rounded-md p-5 flex flex-col items-center mx-auto'>
               <img className='w-[150px] h-[150px] rounded-full' src={currentUser?.image} alt="" />
               <h1 className='text-2xl font-bol'>{currentUser?.name} ({currentUser?.uid}) </h1>
               <h1 className='text-xl '>{currentUser?.email}</h1>
               <h1 className='h-[1px] w-full bg-black'></h1>

               <form action="" onSubmit={handleUpdateProfile} className='my-4 w-full'>
                  <h1 className='my-2'>Name</h1>
                  <input type="text" name="name" id="" className='input input-bordered w-full text-white' defaultValue={currentUser?.name} />

                  <h1 className='my-2'>Phone</h1>
                  <input type="number" name="phone" id="" className='input input-bordered w-full text-white' defaultValue={currentUser?.phone}/>

                  <h1 className='my-2'>Whatsapp</h1>
                  <input type="number" name="wapp" id="" className='input input-bordered w-full text-white' defaultValue={currentUser?.wapp} />

                 <input className='btn btn-warning w-full my-4 text-xl' type="submit" value="Update Profile" />
               </form>
           </div>
        </div>
    );
};

export default UpdateProfile;