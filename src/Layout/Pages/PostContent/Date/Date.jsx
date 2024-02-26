import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';



///////////////////////////////////////
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const Date = () => {


    const { selectedDate, setSelectedDate } = useContext(AuthContext);

  
    const handleDateChange = (date) => {
        // Adjusting date to Bangladeshi time zone
        const adjustedDate = new window.Date(date.setHours(date.getHours() + 6)); // Using window.Date to ensure it's the built-in Date constructor
        setSelectedDate(adjustedDate);
        console.log("Date+++++++++++++++++++", adjustedDate);
    };

    console.log("Selected date: ", selectedDate);

    return (

        <div className="w-full">
            <DatePicker
                className='input input-bordered w-full text-white'
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                placeholderText="Select Date"
                // value={selectedDate ? selectedDate : new Date()}
            />
            
    </div>
    );
};

export default Date;