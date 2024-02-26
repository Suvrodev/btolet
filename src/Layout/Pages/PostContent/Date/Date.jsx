import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';



///////////////////////////////////////
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const Date = () => {

    

    // const {selectedDate,setSelectedDate}=useContext(AuthContext)

    // const handleDateChange = (event) => {
    //     setSelectedDate(event.target.value);
    //     console.log("Date: ",event.target.value);
    // };

   

    // console.log("Selected date: ",selectedDate);

    const { selectedDate, setSelectedDate } = useContext(AuthContext);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log("Date: ", date);
    };

    console.log("Selected date: ", selectedDate);

    return (
        // <div className="w-full">
        //     {/* <input className='input input-bordered w-full text-white' type="date"  defaultValue={selectedDate?.selectedDate} onChange={handleDateChange} name="" id="" /> */}
        //     <DatePicker
        //         className='input input-bordered w-full text-white'
        //         selected={selectedDate}
        //         onChange={handleDateChange}
        //         dateFormat="MM/dd/yyyy"
        //         placeholderText="Select Date"
        //     />
        // </div>

        <div className="w-full">
            <DatePicker
                className='input input-bordered w-full text-white'
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                placeholderText="Select Date"
            />
    </div>
    );
};

export default Date;