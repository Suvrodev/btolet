import React from 'react';
import GoogleMapReact from 'google-map-react';

const BuyMap = ({lat,lon}) => {

    console.log("Lat: ",lat);
    console.log("Lon: ",lon);

    const defaultProps = {
        center: {
          lat: 22.8023633,
          lng: 89.55443
        },
        zoom: 11
    };

    if (!lat) {
        if(!defaultProps){
            return <span className="loading loading-spinner text-error"></span>;
        }
       
    }

    return (
        <div>
             {
                lat ?
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