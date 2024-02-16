import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaCheck, FaCheckCircle, FaCircle } from 'react-icons/fa';

const PropertyTypes = () => {

    const {selectedTypeProperty,setSelectedTypeProperty}=useContext(AuthContext)
     // Property Type Start
     const propertiesType=["New","Used","Under Development"]
    //  const [selectedTypeProperty, setSelectedTypeProperty] = useState(null);
 
     const handlePropertyType=(index)=>{
        setSelectedTypeProperty(propertiesType[index])
        console.log("Bedroom: ",propertiesType[index]);
     }
     // Property Type End

    return (
        <div>
              {/* Property Type Start */}
           <div className='flex gap-5'>
                        {propertiesType.map((property, index) => (
                                            <button
                                key={index}
                                onClick={() => handlePropertyType(index)}
                                className={`btn  btn-outline  ${selectedTypeProperty===property?'border-blue-500':''}`}
                                >
                                {/* {property} */}
                                <span className='flex items-center gap-2 text-black'> {selectedTypeProperty===property?<FaCheck  className='text-blue-600' />:'' }  {property} </span>

                                </button>
                        ))}
                </div>
            {/* Property Type End */}
        </div>
    );
};

export default PropertyTypes;