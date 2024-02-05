import React, { useState } from 'react';

const Price = () => {

    const [priceBox,setPriceBox]=useState(false)
    const prices=["Price","Price On Call"]
    const [selectedPrice, setSelectedPrice] = useState(null);
    const handlePriceChange = (index) => {
        setSelectedPrice(prices[index]);
        console.log("Selected Price: ", prices[index]);
        if(prices[index]==="Price"){
            setPriceBox(true)
        }else{
            setPriceBox(false)
        }
    };

    return (
        <div>
             <h1>Price Mode</h1>
             <div className='flex gap-5 my-5'>
                  {prices.map((price, index) => (
                    <button
                        key={index}
                        onClick={() => handlePriceChange(index)}
                        className={`btn ${selectedPrice === price ? 'btn-primary' : 'btn-outline btn-info'}`}
                    >
                        {price}
                    </button>
                ))}
            </div>


              {/* Price box start */}
            <div className={`${priceBox?'':'hidden'}`}>
                <h1 className='my-4'>Price*</h1>
                <input type="number"  className='input input-bordered ' min={0} name="" id="" placeholder='Price' />
            </div>
      

             {/* Price box end */}
            
        </div>
    );
};

export default Price;