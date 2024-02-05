import React, { useState } from 'react';

const Facilities = () => {
    const facilities=["Balcony","Parking","CCTV","GAS","Giser","Elevator","Free Alerm","Wasa Connection","Fire Exit","Security Guard","Garden",
    "Power Backup","Waste Disposal","Earthquack Resistant","Swiming Pool","Telephone","Water Supply","Internet","Cable TV"]

    const [selectedFacilities, setSelectedFacilities] = useState([]);

  const handleCheckboxChange = (facility) => {
    if (selectedFacilities.includes(facility)) {
      setSelectedFacilities(selectedFacilities.filter(item => item !== facility));
    } else {
      setSelectedFacilities([...selectedFacilities, facility]);
    }
  };


  console.log("Selected Facilities: ",selectedFacilities);

    return (
        <div>
               
                    <h1 className='my-5'>Facilities</h1>
                    
                    {/* <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
                    <label className="cursor-pointer label  w-[200px] text-left border rounded-md py-2 px-5 flex gap-1 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Balcony</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Parking</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">CCTV</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">GAS</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Giser</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Elevator</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Free Alerm</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Wasa Connection</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Fire Exit</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Security Guard</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Garden</span>
                    </label>
                    <label className="cursor-pointer label  w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Power Backup</span>
                    </label>
                    <label className="cursor-pointer label w-[200px] text-left border rounded-md py-2 px-5 flex gap-2 ">
                        <input type="checkbox"  className="checkbox checkbox-accent" />
                        <span className="label-text">Waste Disposal</span>
                    </label>
                </div> */}


            <div className="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center border p-5 rounded-md">
                    <input
                        type="checkbox"
                        id={facility}
                        checked={selectedFacilities.includes(facility)}
                        onChange={() => handleCheckboxChange(facility)}
                        className="checkbox checkbox-accent mr-5"
                    />
                    <label htmlFor={facility} className="text-sm">{facility}</label>
                    </div>
                ))}
                <div className="mt-4 md:col-span-4">
                    Selected facilities: {selectedFacilities.join(', ')}
                </div>
            </div>

        

           
        </div>
    );
};

export default Facilities;