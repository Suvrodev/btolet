import React, { useEffect, useState } from 'react';
import locationColorImage from '../../../../../assets/icons/home/map.svg'

const LocAndDays = ({time}) => {


    console.log("Baal er time: ",time);

     //Time Start
     const [difference, setDifference] = useState('');

        useEffect(() => {
            const calculateDifference = () => {
                try {
                    const currentTime = new Date();
                    const postedTime = new Date(time);
                    const differenceInMilliseconds = currentTime - postedTime;
                    const seconds = Math.floor(differenceInMilliseconds / 1000);
                    const minutes = Math.floor(seconds / 60);
                    const hours = Math.floor(minutes / 60);
                    const days = Math.floor(hours / 24);

                    if (days > 0) {
                        setDifference(`${days} day${days !== 1 ? 's' : ''} ago`);
                    } else if (hours > 0) {
                        setDifference(`${hours} hour${hours !== 1 ? 's' : ''} ago`);
                    } else if (minutes > 0) {
                        setDifference(`${minutes} minute${minutes !== 1 ? 's' : ''} ago`);
                    } else {
                        setDifference(`Just now`);
                    }
                } catch (error) {
                    console.error('Error calculating difference:', error);
                    setDifference('Error calculating difference');
                }
            };

            calculateDifference();

            // Refresh difference every minute
            const interval = setInterval(calculateDifference, 60000);

            return () => clearInterval(interval);
        }, [time]);
      ////Time End


      console.log("Difference: ",difference);

    return (
        <div className='flex justify-between items-center'>
            <div className='my-4 flex items-center gap-10'>
                <div className='w-[50px] h-[50px] border-2 rounded-full p-2 border-blue-500 '>
                    <img className='' src={locationColorImage} alt="" />
                </div>
                <p className='text-xl font-bold'>{location}</p>
            </div>
            <div className='font-bold text-xl'>
                {difference}
            </div>
    </div>
    );
};

export default LocAndDays;