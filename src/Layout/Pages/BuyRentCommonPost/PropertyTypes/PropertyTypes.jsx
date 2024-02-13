import React, { useState } from 'react';

const PropertyTypes = () => {

     // Property Type Start
     const propertiesType=["New","Used","Under Development"]
     const [selectedTypeProperty, setSelectedTypeProperty] = useState(null);
 
     const handlePropertyType=(index)=>{
         setSelectedTypeProperty(index);
         console.log("Property: ",propertiesType[index]);
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
                                className={`btn    ${selectedTypeProperty===index?'btn-primary':'btn-outline btn-info'}`}
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