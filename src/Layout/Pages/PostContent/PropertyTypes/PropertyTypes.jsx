import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

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
                                className={`btn    ${selectedTypeProperty===property?'btn-primary':'btn-outline btn-info'}`}
                                >
                                {property}
                                </button>
                        ))}
                </div>
            {/* Property Type End */}
        </div>
    );
};

export default PropertyTypes;