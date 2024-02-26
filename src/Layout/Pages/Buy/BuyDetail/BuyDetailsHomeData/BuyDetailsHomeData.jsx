import React from 'react';
import { FaBed } from 'react-icons/fa';

import bedIcon from '../../../../../assets/icons/property/bed.svg'
import bathIcon from '../../../../../assets/icons/property/bath.svg'
import kitchenIcon from '../../../../../assets/icons/property/kitchen.svg'
import diningIcon from '../../../../../assets/icons/property//dining.svg'
import drawingIcon from '../../../../../assets/icons/property/drawing.svg'
import balconyIcon from '../../../../../assets/icons/property/balcony.svg'
import sizeIcon from '../../../../../assets/icons/property/size.svg'
import fachingIcon from '../../../../../assets/icons/property/window.svg'
import totalFloorIcon from '../../../../../assets/icons/property/floor.svg'
import floorNoIcon from '../../../../../assets/icons/property/floorno.svg'
import totalUnitIcon from '../../../../../assets/icons/property/totalUnit.svg'
import emiIcon from '../../../../../assets/icons/property/emi.svg'

const BuyDetailsHomeData = ({b,num}) => {

    
 

    let itemName,itemNumber,iconName;
    if(num==0){
        iconName=bedIcon
        itemName="Beds"
        itemNumber=b
    }
    if(num==1){
        iconName=bathIcon
            itemName="Baths"
            itemNumber=b
        }
    if(num==2){
        iconName=kitchenIcon
            itemName="Kitchen"
            itemNumber=b
        }
    if(num==3){
         iconName=diningIcon
            itemName="Dining"
            itemNumber=b
        }
    if(num==4){
         iconName=drawingIcon
            itemName="Drawing"
            itemNumber=b
        }
    if(num==5){
         iconName=balconyIcon
            itemName="Balcony"
            itemNumber=b
        }
    if(num==6){
         iconName=sizeIcon
            itemName="Size"
            itemNumber=b
        }
    if(num==7){
         iconName=fachingIcon
            itemName="Faching"
            itemNumber=b
        }
        if(num==8){
             iconName=totalFloorIcon
            itemName="Total Floor"
            itemNumber=b
        }
    if(num==9){
         iconName=floorNoIcon
        itemName="Floor No."
        itemNumber=b
    }
    if(num==10){
         iconName=totalUnitIcon
        itemName="Total Unit"
        itemNumber=b
    }
    if(num==11){
         iconName=emiIcon
        itemName="EMI"
        itemNumber=b
    }

    // console.log("Item Name: ",itemName);
    // console.log("Item Number: ",itemNumber);
    return (
             <div className='flex flex-col justify-center items-center gap-4'>
                {/* w-[40px] h-[40px] bg-gray-400 rounded-full flex items-center justify-center */}
                <div className='w-[40px] h-[40px] bg-gray-400 rounded-full flex items-center justify-center p-3'>
                    <img className='w-[25px]' src={iconName} alt="" />
                </div>
                {/* flex flex-col items-center justify-center w-[40px] h-[40px] */}
                <div className='flex flex-col items-center justify-center w-[80px] h-[40px]  '>
                    <p className='text-sm '>{itemName}</p>
                    <p className=' text-sm text-center'>{itemNumber}</p>
                </div>
            </div>
    );
};

export default BuyDetailsHomeData;