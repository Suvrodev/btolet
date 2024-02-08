import React from 'react';
import { FaBed } from 'react-icons/fa';

const BuyDetailsHomeData = ({b,num}) => {

    
 

    let itemName,itemNumber;
    if(num==0){
        itemName="Beds"
        itemNumber=b
    }
    if(num==1){
            itemName="Baths"
            itemNumber=b
        }
    if(num==2){
            itemName="Kitchen"
            itemNumber=b
        }
    if(num==3){
            itemName="Dining"
            itemNumber=b
        }
    if(num==4){
            itemName="Drawing"
            itemNumber=b
        }
    if(num==5){
            itemName="Balcony"
            itemNumber=b
        }
    if(num==6){
            itemName="Size"
            itemNumber=b
        }
    if(num==7){
            itemName="Faching"
            itemNumber=b
        }
        if(num==8){
            itemName="Total Floor"
            itemNumber=b
        }
    if(num==9){
        itemName="Floor No."
        itemNumber=b
    }
    if(num==10){
        itemName="Total Unit"
        itemNumber=b
    }
    if(num==11){
        itemName="EMI"
        itemNumber=b
    }

    // console.log("Item Name: ",itemName);
    // console.log("Item Number: ",itemNumber);
    return (
             <div className='flex flex-col gap-4'>
                {/* w-[40px] h-[40px] bg-gray-400 rounded-full flex items-center justify-center */}
                <div className='w-[40px] h-[40px] bg-gray-400 rounded-full flex items-center justify-center'>
                    <FaBed/>
                </div>
                {/* flex flex-col items-center justify-center w-[40px] h-[40px] */}
                <div className='flex flex-col items-center justify-center w-[40px] h-[40px]'>
                    <p>{itemName}</p>
                    <p>{itemNumber}</p>
                </div>
            </div>
    );
};

export default BuyDetailsHomeData;