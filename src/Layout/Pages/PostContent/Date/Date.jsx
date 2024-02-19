import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';



///////////////////////////////////////
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Date = () => {

    

    const {selectedDate,setSelectedDate}=useContext(AuthContext)

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        console.log("Date: ",event.target.value);
    };

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    console.log("Selected date: ",selectedDate);
    return (
        <div className="w-full">
            <input className='input input-bordered w-full text-white' type="date"  defaultValue={selectedDate} onChange={handleDateChange} name="" id="" />
            {/* <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy" // Customize date format if needed
                isClearable
                placeholderText="Select a date"
                className='bg-white p-5 border-2'
            /> */}
        </div>
    );
};

export default Date;