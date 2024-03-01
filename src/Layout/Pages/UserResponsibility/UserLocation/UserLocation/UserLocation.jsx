import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import axios from 'axios';
import { FaMap } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { CloseOutlined, SearchOutlined } from '@mui/icons-material';

const UserLocation = () => {
    const {lattitude,longitude,doubleLocation,setLattitude,setLongitude,setDoubleLocation}=useContext(AuthContext)

    // console.log("*********************************************************************************")
    // console.log("Lattitude: ",lattitude);
    // console.log("Longitude: ",longitude);
    console.log("double Location: ",doubleLocation);



    const [searchDependency,setSearchDependency]=useState(true)
    const [serchBoxText,setSearchBoxText]=useState(`${doubleLocation?doubleLocation:"Search Place"}`)
    const handleSearchText=(event)=>{
        setSearchBoxText(event.target.value)
        setSearchDependency(!searchDependency)
    }
    // console.log("Search Text: ",serchBoxText);

    const handleRemoveText=()=>{
        setSearchBoxText("")
    }


    const [searchPlaces,setSearhPlaces]=useState([])
    useEffect(()=>{
        axios.get(`http://154.26.130.64/nominatim/search.php?q=${serchBoxText}&format=jsonv2&accept-language=bn`)
        .then(res=>{
            setSearhPlaces(res.data)
        })
    },[searchDependency])

    console.log("Suggest Location: ",searchPlaces);


    const handleNewPlace=(placeName,lat,lon)=>{
        // console.log("handle new Place");
        console.log("Place name--------------------------------: ",placeName);
        console.log("Place Lattitude: ",lat);
        console.log("Place Lon: ",lon);

        setLattitude(lat)
        setLongitude(lon)
        setDoubleLocation(placeName)
        setSearchBoxText(placeName)
        setSearhPlaces([])
    }

    return (
        <div>
           <div>
               <h1>Search Location</h1>
               <div>
                     {/* Input Location Start */}
                     <div className='relative w-6/12 rounded-md'>
                         <input type="text"  onChange={handleSearchText} className='input input-bordered w-full px-10' name="" id="" value={serchBoxText?serchBoxText:""} />
                         <SearchOutlined className='absolute top-3 left-4 text-blue-500'/>
                         <span className='bg-[#8E8E8E] rounded-md absolute top-2 right-3'>
                            <CloseOutlined onClick={handleRemoveText} className='text-white'/>
                         </span>
                     </div>
                    {/* Input Location End */}

                    
                     <div className="overflow-x-auto">
                        <table className="table">

                            <tbody>
                             {
                                searchPlaces.map( (place,idx)=> <tr key={idx} onClick={()=>handleNewPlace(place?.display_name,place?.lat,place?.lon)}>
                                    <td><FiMapPin/></td>
                                    <td>{place?.display_name}</td>
                                </tr> )
                             }
                           
                           
                            </tbody>
                        </table>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default UserLocation;