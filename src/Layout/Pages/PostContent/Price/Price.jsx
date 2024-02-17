import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaCheck } from 'react-icons/fa';

const Price = () => {

    const {setPrice,errorPrice,  priceMode,setPriceMode}=useContext(AuthContext)

    const prices=["Price","Price On Call"]
    const [selectedPrice, setSelectedPrice] = useState('Price');
    const handlePriceChange = (index) => {
        setSelectedPrice(prices[index]);
        console.log("Selected Price: ", prices[index]);
        if(prices[index]==="Price"){
            setPriceMode(true)
        }else{
            setPriceMode(false)
        }
    };


    const handlePrice=(evet)=>{
        setPrice(evet.target.value)
    }

    return (
        <div>
             <h1>Price Mode</h1>
             <div className='flex gap-5 my-5'>
                  {prices.map((price, index) => (
                    <button
                        key={index}
                        onClick={() => handlePriceChange(index)}
                        className={`btn btn-outline ${selectedPrice === price ? 'border-blue-500' : ''}`}
                    >
                        {/* {price} */}
                        <span className='flex items-center gap-2 text-black'> {selectedPrice===price?<FaCheck  className='text-blue-600' />:'' }  {price} </span>
                    </button>
                ))}
            </div>


              {/* Price box start */}
            <div className={`${priceMode?'':'hidden'}`}>
                <h1 className='my-4'>Price*</h1>
                <input type="number" onChange={handlePrice}  className={`input input-bordered text-white ${errorPrice?'errorBorder':''}`} min={0} name="" id="" placeholder='Price' defaultValue={500} />
            </div>
      

             {/* Price box end */}
            
        </div>
    );
};

export default Price;