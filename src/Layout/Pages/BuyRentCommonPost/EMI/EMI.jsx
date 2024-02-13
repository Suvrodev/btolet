import React, { useState } from 'react';

const EMI = () => {

    const emis=["Yes","No"]
    const [selectedEmi, setSelectedEmi] = useState(null);
    const handleEmiChange = (index) => {
        setSelectedEmi(emis[index]);
        console.log("Selected EMI: ", emis[index]);
    };

    return (
        <div>
          <div className='flex gap-5 my-5'>
                  {emis.map((emi, index) => (
                          <button
                              key={index}
                              onClick={() => handleEmiChange(index)}
                              className={`btn    ${selectedEmi===emi?'btn-primary':'btn-outline btn-info'}`}
                              >
                          {emi}
                          </button>
                      ))}
              </div>

        </div>
    );
};

export default EMI;