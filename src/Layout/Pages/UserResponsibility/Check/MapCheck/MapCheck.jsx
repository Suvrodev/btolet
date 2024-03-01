import React from 'react';
import { GoogleMap, Marker } from "react-google-maps"

const MapCheck = () => {
///AIzaSyBvMWY8-16dqG7km0DEHFFKh39sD7tSw0g
///lat:22.818422299999998
///lon:89.5521144



    return (
        <div>
            <h1>Map Check Programming Hero</h1>

            <div>
            <GoogleMap
                    defaultZoom={8}
                    defaultCenter={{ lat: -34.397, lng: 150.644 }}
                >
                
                 <Marker position={{ lat: -34.397, lng: 150.644 }} />
            </GoogleMap>
            </div>
        </div>
    );
};

export default MapCheck;