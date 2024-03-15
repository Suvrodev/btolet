import React, { useEffect, useState } from 'react';
import convertDate from '../../../../../../Function/DateConvert';

const RentDetailsNumber = ({ad}) => {

    // console.log("Detail Number: ",ad);

    let color=false
    const help=ad?.itemNumber
    let itemNumbers;
    if(Array.isArray(help)){
        itemNumbers=help.join(',');
        color=true
    }else{
        itemNumbers=ad?.itemNumber
        color=false
    }


    // console.log("Item Numbers: ",itemNumbers);
    // console.log("Data type of Item Number: ",typeof(itemNumbers));

    const isNumber = typeof itemNumbers === 'number';
    const isString = typeof itemNumbers === 'string';



   


    const [myDate,setMyDate]=useState("")
    useEffect(()=>{
        if(ad?.itemName=="Rent From"){
            setMyDate(convertDate(itemNumbers))
         }
    },[])
   
   
    
    return (
        <div className='w-full grid grid-cols-2 items-start mb-3'>
           <div className='flex items-center gap-2'>
               <span className='prText'>{ad?.iconName}</span>
               <h1 className='prText'> {ad?.itemName} </h1>
           </div>
            <div>
                {/* {itemNumbers} */}
                {/* {color && <p className='text-green-500'>{itemNumbers}</p>}
                {color || <p className=' text-black'>{itemNumbers}</p>} */}
                {
                    ad?.itemName=='Facilities' &&
                    <p className=' text-green-500'>{itemNumbers}</p>
                }
                {
                    ad?.itemName=='Rent From' &&
                    <p className=' text-black'>{myDate}</p>
                   
                }
                {
                  ad?.itemName !== 'Facilities' && ad?.itemName !== 'Rent From' ?
                  <p className='text-black'>{itemNumbers}</p> :
                  <p className='text-black'></p>  
                }
            </div>
        </div>
    );
};

export default RentDetailsNumber;