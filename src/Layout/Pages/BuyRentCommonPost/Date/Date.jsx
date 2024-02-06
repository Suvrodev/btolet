import React, { useState } from 'react';

const Date = () => {

    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        console.log("Date: ",event.target.value);
    };

    return (
        <div className="w-full">
            <input className='input input-bordered w-[80%] text-white' type="date"  value={selectedDate} onChange={handleDateChange} name="" id="" />
        </div>
    );
};

export default Date;