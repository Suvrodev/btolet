import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaCheck } from 'react-icons/fa';

const EMI = () => {

    const {selectedEmi,setSelectedEmi}=useContext(AuthContext)
    const emis=["Yes","No"]
    // const [selectedEmi, setSelectedEmi] = useState("Yes");
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
                              className={`btn  btn-outline  ${selectedEmi===emi?'border-blue-500':' '}`}
                              >
                          {/* {emi} */}
                          <span className='flex items-center gap-2 text-black'> {selectedEmi===emi?<FaCheck  className='text-blue-600' />:'' }  {emi} </span>
                          </button>
                      ))}
              </div>

        </div>
    );
};

export default EMI;