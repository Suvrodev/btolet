import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaCheck, FaCheckCircle } from 'react-icons/fa';

const LPType = () => {

   
   const {selectedLPTypeItems,setSelectedILPTypeItems}=useContext(AuthContext)
   let lpTypes=['Residential','Commercial','Agricultural'];

    // const handleCheckboxChange = (event) => {
    //     const itemValue = event.target.value;
    //     if (event.target.checked) {
    //         // If checkbox is checked, add the value to the array
    //         setSelectedILPTypeItems([...selectedLPTypeItems, itemValue]);
    //     } else {
    //         // If checkbox is unchecked, remove the value from the array
    //         if (selectedLPTypeItems.length > 1) {
    //             setSelectedILPTypeItems(selectedLPTypeItems.filter(item => item !== itemValue));
    //         }
    //     }
    // };

    const handleButtonClick = (lp) => {
        
        if (selectedLPTypeItems.includes(lp)) {
            if(selectedLPTypeItems.length==1){return}
            setSelectedILPTypeItems(selectedLPTypeItems.filter(item => item !== lp));
        } else {
            setSelectedILPTypeItems([...selectedLPTypeItems, lp]);
        }
    };

    console.log("LP Type: ",selectedLPTypeItems);

    return (
        <div>
        {/* <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
            <label className="cursor-pointer label w-[100px] text-left border rounded-md py-2 px-5 flex gap-1 ">
                <input
                    type="checkbox"
                    className="checkbox checkbox-accent"
                    value="Residential"
                    onChange={handleCheckboxChange}
                    checked={selectedLPTypeItems.includes("Residential")}
                    disabled={selectedLPTypeItems.length === 1 && selectedLPTypeItems.includes("Residential")}
                />
                <span className="label-text">Residential</span>
            </label>
            <label className="cursor-pointer label w-[100px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                <input
                    type="checkbox"
                    className="checkbox checkbox-accent"
                    value="Commercial"
                    onChange={handleCheckboxChange}
                    checked={selectedLPTypeItems.includes("Commercial")}
                    disabled={selectedLPTypeItems.length === 1 && selectedLPTypeItems.includes("Commercial")}
                />
                <span className="label-text">Commercial</span>
            </label>
            <label className="cursor-pointer label w-[100px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                <input
                    type="checkbox"
                    className="checkbox checkbox-accent"
                    value="Agricultural"
                    onChange={handleCheckboxChange}
                    checked={selectedLPTypeItems.includes("Agricultural")}
                    disabled={selectedLPTypeItems.length === 1 && selectedLPTypeItems.includes("Agricultural")}
                />
                <span className="label-text">Agricultural</span>
            </label>
        </div>
        <div>
            <p>Selected Items: {selectedLPTypeItems.join(', ')}</p>
        </div> */}

         <div className="flex flex-wrap  w-8/12 gap-1">
                {lpTypes.map((lp, index) => (
                    <div key={index} className="flex items-center  p-2 rounded-md">
                        <button
                            onClick={() => handleButtonClick(lp)}
                            className={`btn btn-outline text-black ${selectedLPTypeItems.includes(lp) ? 'border-4 border-blue-600' : ''}`}
                        >
                            {selectedLPTypeItems.includes(lp) ? (
                                <FaCheck className="text-blue-500" />
                            ) : (
                               <p></p>
                            )}
                           
                            <span className="ml-2">{lp}</span>
                        </button>
                    </div>
                ))}
                {/* <div className="mt-4 md:col-span-4 bg-red-400">
                    Selected LpTypes: {selectedLPTypeItems.join(', ')}
                </div> */}
            </div>
    </div>
    );
};

export default LPType;