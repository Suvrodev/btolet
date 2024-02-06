import React from 'react';
import GoogleMapReact from 'google-map-react';

const BuyMap = ({geolat,geolon}) => {

    console.log("geolat: ",geolat);
    console.log("geolon: ",geolon);

    let defaultProps = {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 11
    };

    if(geolat){
        defaultProps = {
            center: {
              lat: parseFloat(geolat),
              lng: parseFloat(geolon)
            },
            zoom: 11
        };
    }
    else{
        return <span className="loading loading-spinner text-error"></span>;
    }

    return (
        <div className='w-full h-[390px]'>
             {
                geolat ?
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBvMWY8-16dqG7km0DEHFFKh39sD7tSw0g" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                text="My Marker"
                >
                </GoogleMapReact>:
                <span className="loading loading-spinner text-error"></span>
            }
        </div>
    );
};

export default BuyMap;