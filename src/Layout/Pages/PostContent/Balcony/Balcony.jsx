import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Balcony = () => {

    const {selectedBalcony,setSelectedBalcony,errorBalcony}=useContext(AuthContext)



     const balconies=["1","2","3","4","5","6","7+"]
    // const [selectedBalcony, setSelectedBalcony] = useState('');

    const handleBalconyChange = (event) => {
        setSelectedBalcony(event.target.value);
        console.log("Balcony: ",event.target.value);
    };

    return (
             <div className=''>
                    <div className="w-full text-white">
                        <select 
                            value={selectedBalcony} 
                            onChange={handleBalconyChange}
                            className={` w-full p-2 input input-bordered ${errorBalcony?'errorBorder':''}`}
                        >
                            <option value="" disabled>Select</option>
                            {balconies.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>
                    </div>
            </div>
    );
};

export default Balcony;