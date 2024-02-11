import React, { useState } from 'react';
import BedRooms from '../../BuyRentCommonPost/BedRoom/BedRooms';
import BathRoom from '../../BuyRentCommonPost/Bathroom/BathRoom';
import Facilities from '../../BuyRentCommonPost/Facilities/Facilities';
import ReactSlider from 'react-slider';
import './Filter.css'

const Filter = () => {


    const [maxPrice,setMaxPrice]=useState("")
    const [minPrice,setMinPrice]=useState("")

    const handleSliderChange = (value, index) => {
        // Your logic goes here

        let checkValue=JSON.stringify({ value })
        console.log("Check Value: ",checkValue);


        let parsedValue = JSON.parse(checkValue);
        let min = parsedValue.value[0]; // 45
        let max = parsedValue.value[1]; // 2023

        console.log("Min Value: ", min); // 45
        console.log("Max Value: ", max); // 2023

        setMinPrice(min)
        setMaxPrice(max)


        // console.log(`Min to Max: ${JSON.stringify({ value })}`);
    };
    
    console.log("Min Value-------: ",minPrice);

    return (
        <div className='border-4 p-5 flex flex-col justify-center rounded-md'>
           <div>Location</div>

            <p className='bg-yellow-600 w-2/12 text-center font-bold text-xl text-white mx-auto rounded-md mb-20 p-2'>BDT {minPrice} to {maxPrice} +/month </p>
            <div className='  mb-10 p-5'>
                {/* <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    defaultValue={[0, 2023]}
                    max={2023}
                    min={0}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    pearling
                    minDistance={5}
                    onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
                /> */}

                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        defaultValue={[0, 100000]}
                        max={100000}
                        min={0}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        pearling
                        minDistance={5}
                        onChange={handleSliderChange}
                   />
            </div>




           <div className='flex flex-col gap-5  w-[80%] mx-auto border-2 justify-evenly'>
                <div className='flex gap-5 items-center '>
                    <div>
                        <p>Min</p>
                            <input type="number" name="" id="" className='input input-bordered  border-red-500 bg-gray-500' defaultValue={minPrice} />
                    </div>

                    <div>
                        <p>Max</p>
                            <input type="number" name="" id="" className='input input-bordered  border-red-500 bg-gray-500' defaultValue={maxPrice} />
                    </div>
                </div>

                <div className='flex gap-20'>
                    <BedRooms></BedRooms>
                    <BathRoom></BathRoom>
                </div>
                <div>
                     <Facilities></Facilities>
                    <button className='btn btn-warning text-xl'>Show Property</button>
                </div>
           </div>
          

           

          

        </div>
    );
};

export default Filter;