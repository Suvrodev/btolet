import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Amenities = ({small,big}) => {

    const {selectedAmenities,setSelectedAmenities}=useContext(AuthContext)

    let amenities=[];

    if(big){
        amenities=["Parking","CCTV","GAS","Giser","Elevator","Fire Alarm","Wasa Connection","Fire Exit","Security Guard","Garden",
        "Power Backup","Waste Disposal","Earthquack Resistant","Swiming Pool","Telephone","Water Supply","Internet","Cable TV"]
    }
    if(small){
        amenities=["Electricity","Drain"]
    }
    

    const handleCheckboxChange = (amenity) => {
        if (selectedAmenities.includes(amenity)) {
            setSelectedAmenities(selectedAmenities.filter(item => item !== amenity));
        } else {
            setSelectedAmenities([...selectedAmenities, amenity]);
        }
      };
    
    
    //   console.log("Selected Amenities: ",selectedAmenities);

    return (
        <div>
             <div className="max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center border p-5 rounded-md">
                    <input
                        type="checkbox"
                        id={amenity}
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => handleCheckboxChange(amenity)}
                        className="checkbox checkbox-accent mr-5"
                    />
                    <label htmlFor={amenity} className="text-sm">{amenity}</label>
                    </div>
                ))}
                <div className="mt-4 md:col-span-4">
                    Selected Amenities: {selectedAmenities.join(', ')}
                </div>
            </div>
         </div>
    );
};

export default Amenities;