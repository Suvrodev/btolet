import React, { useState } from 'react';


import { GoogleMap, Marker, LoadScript, Autocomplete } from '@react-google-maps/api';
import { FaBeer } from 'react-icons/fa';


const ZCheck = () => {

  

   const [map, setMap] = useState(null);
  const [location, setLocation] = useState({ lat: 22.818422299999998, lng: 89.5521144 });

  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const handleMapClick = (event) => {
    const newLocation = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    setLocation(newLocation);
  };

  const handleAutocomplete = (place) => {
    if (place && place.geometry && place.geometry.location) {
      const newLocation = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };
      setLocation(newLocation);
      if (map) {
        map.panTo(newLocation);
      }
    }
  };

  const getCurrentLocation = () => {
  
    console.log("Get Current Location");
    const newLocation = {
      lat: 22.818422299999998,
      lng: 89.5521144
    };
    setLocation(newLocation);
  };
  



    return (
      


        <div>
        <h1>Google Map Example</h1>

        <div style={{ marginBottom: '10px' }}>
          <button className='btn btn-primary' onClick={getCurrentLocation}>Get Current Location</button>
          <p>Latitude: {location.lat}, Longitude: {location.lng}</p>
        </div>
        
        <LoadScript
          googleMapsApiKey="AIzaSyBvMWY8-16dqG7km0DEHFFKh39sD7tSw0g"
          libraries={["places"]}
        >

            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={location}
                onClick={handleMapClick}
                onLoad={(map) => setMap(map)}
              >
              <Marker position={location} ><p>sdfuihhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p> </Marker>
          </GoogleMap>
        </LoadScript>
      </div>
    );
};

export default ZCheck;


/**
 * AIzaSyBvMWY8-16dqG7km0DEHFFKh39sD7tSw0g
 */