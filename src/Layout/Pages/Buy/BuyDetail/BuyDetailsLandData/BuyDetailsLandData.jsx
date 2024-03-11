import React from 'react';
import { FaBed } from 'react-icons/fa';

import roadSizeIcon from '../../../../../assets/icons/property/road.svg'
import areaIcon from '../../../../../assets/icons/property/area.svg'
import emiIcon from '../../../../../assets/icons/property/emi.svg'


const BuyDetailsLandData = ({b,num,area}) => {
    console.log("BBBBBBBBBBB: ",b);
    // console.log("Area: ",area);
    let itemName,itemNumber,Image;
    if(num==0){
        Image=areaIcon
        itemName=area
        itemNumber=b
    }
    if(num==1){
        Image=roadSizeIcon
        itemName="Road Size"
        itemNumber=b
    }
    if(num==2){
        Image=emiIcon
        itemName="EMI"
        itemNumber=b
       
    }
    
    return (
        <div className='flex flex-col items-center gap-4 w-[125px] p-5 prText'>
              
                <div className='w-[40px] h-[40px] p-2 bg-[#edf0ef] rounded-full flex items-center justify-center'>
                    <img src={Image} alt="" />                   
                </div>

                <div className='flex flex-col items-center justify-center w-[40px] h-[40px]'>
                    <p className='w-[125px] text-center font-bold'>{itemName}</p>
                    <p>{itemNumber}</p>
                </div>
            </div>
    );
};

export default BuyDetailsLandData;