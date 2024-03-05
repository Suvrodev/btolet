import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMarker } from 'react-icons/fa';
import { FmdGood } from '@mui/icons-material';
import Marker from './Marker/Marker';


///////////////from documentration
import GoogleMap from 'google-map-react';
// import MyGreatPlace  from'./MyGreatPlace/My_great_place.jsx'



const BuyMap = ({geolat,geolon}) => {

    // console.log("geolat: ",geolat);
    // console.log("geolon: ",geolon);


    const YOUR_GOOGLE_MAP_API_KEY ="AIzaSyBvMWY8-16dqG7km0DEHFFKh39sD7tSw0g"
    const [loading, setLoading] = useState(true);
    const [center, setCenter] = useState({ lat: 0, lng: 0 });

    // let defaultCenter = {
    //     lat: 0, 
    //     lng: 0  
    // };

    // if (geolat && geolon) {
    //     defaultCenter = {
    //         lat: parseFloat(geolat),
    //         lng: parseFloat(geolon)
    //     };
    // } else {
    //     return <span className="loading loading-spinner text-error">Loading...</span>;
    // }
    
    useEffect(() => {
        if (geolat && geolon) {
            setCenter({
                lat: parseFloat(geolat),
                lng: parseFloat(geolon)
            });
            setLoading(false);
        } else {
                return <span className="loading loading-spinner text-error">Loading...</span>;
            }
    }, [geolat, geolon]);



    const [mapCenter, setMapCenter] = useState({ lat: center?.lat, lng: center.lon });
    const [mapZoom, setMapZoom] = useState(16);
    const handleMapChange = ({ center, zoom }) => {
        setMapCenter(center);
        setMapZoom(zoom);
        console.log("Centerrrrrrrrrrrrrrrrrrrrrrrrr: ",center);
      };


     
    return (
        
        <div className='w-full h-full rounded-xl bg-yellow-400 overflow-hidden'>
             {
                !loading ?
                <GoogleMapReact
                    className='rounded-xl'
                    bootstrapURLKeys={{ key: "AIzaSyBvMWY8-16dqG7km0DEHFFKh39sD7tSw0g" }}
                    center={center}
                    zoom={mapZoom}
                    draggable={false}
                    // onChange={handleMapChange} 
                >
                <Marker
                    lat={center.lat}
                    lng={center.lng}
                    text="My Marker"
                />
                
                </GoogleMapReact>:
                <span className="loading loading-spinner text-error"></span>
            }
        </div>



    //    <div className='w-full h-full rounded-xl bg-yellow-400 overflow-hidden'>
    //         {geolat ? (
    //             <GoogleMap
    //             apiKey={YOUR_GOOGLE_MAP_API_KEY}
    //             center={defaultCenter}
    //             zoom={14}
    //             >
    //             {/* Render your markers here */}
    //             </GoogleMap>
    //         ) : (
    //             <span className="loading loading-spinner text-error"></span>
    //         )}
    //  </div>
    );
};

export default BuyMap;

/**Link:
 * https://www.npmjs.com/package/google-map-react
 */