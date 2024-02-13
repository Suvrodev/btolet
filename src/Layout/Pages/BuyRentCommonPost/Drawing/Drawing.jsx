import React, { useState } from 'react';

const Drawing = () => {

    const drawings=["1","2","3","4","5","6","7+"]
    const [selectedDrawing,setSelectedDrawing]=useState(null)
    const handleDrawing=(index)=>{
        setSelectedDrawing(drawings[index])
        console.log("Drawing: ",drawings[index]);
    }

    return (
        <div>
             <div className='flex gap-5 my-5'>
                    {drawings.map((drawing, index) => (
                            <button
                                key={index}
                                onClick={() => handleDrawing(index)}
                                className={`btn    ${selectedDrawing===drawing?'btn-primary':'btn-outline btn-info'}`}
                                >
                            {drawing}
                            </button>
                        ))}
                </div>
        </div>
    );
};

export default Drawing;