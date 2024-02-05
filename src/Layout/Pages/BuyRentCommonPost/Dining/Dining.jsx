import React, { useState } from 'react';

const Dining = () => {
   

    const dinings=["1","2","3","4","5","6","7+"]
    const [selectedDining,setSelectedDining]=useState(null)
    const handleDining=(index)=>{
        setSelectedDining(dinings[index])
        console.log("Dinings: ",dinings[index]);
    }

    return (
   
    <div>
        <h1>Dining*</h1>
        <div className='flex gap-5 my-5'>
                {dinings.map((dining, index) => (
                        <button
                            key={index}
                            onClick={() => handleDining(index)}
                            className={`btn    ${selectedDining===dining?'btn-primary':'btn-outline btn-info'}`}
                            >
                        {dining}
                        </button>
                    ))}
            </div>
    </div>
    );
};

export default Dining;