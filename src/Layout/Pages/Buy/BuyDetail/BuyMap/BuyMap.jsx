import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMarker } from 'react-icons/fa';
import { FmdGood } from '@mui/icons-material';

const BuyMap = ({geolat,geolon}) => {

    // console.log("geolat: ",geolat);
    // console.log("geolon: ",geolon);

    let defaultProps = {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 16
    };

    if(geolat){
        defaultProps = {
            center: {
              lat: parseFloat(geolat),
              lng: parseFloat(geolon)
            },
            zoom: 16
        };
    }
    else{
        return <span className="loading loading-spinner text-error"></span>;
    }

    return (
        <div className='w-full h-full'>
             {
                geolat ?
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBvMWY8-16dqG7km0DEHFFKh39sD7tSw0g" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                text="My Marker"
                >
                    <p><FmdGood className='text-red-600'/></p>
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