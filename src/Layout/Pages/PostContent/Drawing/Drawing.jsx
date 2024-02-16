import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Drawing = () => {

    const {selectedDrawing,setSelectedDrawing}=useContext(AuthContext)

    const drawings=["1","2","3","4","5","6","7+"]
    // const [selectedDrawing,setSelectedDrawing]=useState('1')
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