import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';



///////////////////////////////////////
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";



const Date = () => {

    // const [startDate, setStartDate] = useState(new Date());


    // const [selectedDate, setSelectedDate] = useState('');

    const {selectedDate,setSelectedDate}=useContext(AuthContext)

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        console.log("Date: ",event.target.value);
    };

    return (
        <div className="w-full">
            <input className='input input-bordered w-full text-white' type="date"  value={selectedDate} onChange={handleDateChange} name="" id="" />
            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
        </div>
    );
};

export default Date;