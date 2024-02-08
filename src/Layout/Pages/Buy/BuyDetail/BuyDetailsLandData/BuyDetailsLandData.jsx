import React from 'react';
import { FaBed } from 'react-icons/fa';

const BuyDetailsLandData = ({b,num,area}) => {
    // console.log("B: ",b);
    let itemName,itemNumber;
    if(num==0){
        itemName=area
        itemNumber=b
    }
    if(num==1){
            itemName="Road Size"
            itemNumber=b
    }
    return (
        <div className='flex flex-col items-center gap-4 w-[125px] p-5'>
              
                <div className='w-[40px] h-[40px] bg-gray-400 rounded-full flex items-center justify-center'>
                    <FaBed/>
                </div>

                <div className='flex flex-col items-center justify-center w-[40px] h-[40px]'>
                    <p className='w-[125px] text-center font-bold'>{itemName}</p>
                    <p>{itemNumber}</p>
                </div>
            </div>
    );
};

export default BuyDetailsLandData;