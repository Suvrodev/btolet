import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMarker } from 'react-icons/fa';
import { FmdGood } from '@mui/icons-material';
import Marker from './Marker/Marker';

const BuyMap = ({geolat,geolon}) => {

    // console.log("geolat: ",geolat);
    // console.log("geolon: ",geolon);

    let defaultCenter = {
        lat: 0, // Default latitude
        lng: 0  // Default longitude
    };

    if (geolat && geolon) {
        defaultCenter = {
            lat: parseFloat(geolat),
            lng: parseFloat(geolon)
        };
    } else {
        return <span className="loading loading-spinner text-error">Loading...</span>;
    }

    return (
        <div className='w-full h-full rounded-xl bg-yellow-400 overflow-hidden'>
             {
                geolat ?
                <GoogleMapReact
                    className='rounded-xl'
                    bootstrapURLKeys={{ key: "AIzaSyBvMWY8-16dqG7km0DEHFFKh39sD7tSw0g" }}
                    defaultCenter={defaultCenter}
                    defaultZoom={16}
                    draggable={false}
                    onChange={() => {}} 
                >
                <Marker
                    lat={defaultCenter.lat}
                    lng={defaultCenter.lng}
                    text="My Marker"
                />
                
                </GoogleMapReact>:
                <span className="loading loading-spinner text-error"></span>
            }
        </div>
    );
};

export default BuyMap;

/**Link:
 * https://www.npmjs.com/package/google-map-react
 */