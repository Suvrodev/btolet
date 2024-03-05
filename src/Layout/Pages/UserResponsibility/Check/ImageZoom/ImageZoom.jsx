import React, { useState } from 'react';
import './ImageZoom.css'

import Image from "../../../../../assets/Image/Suvrodev.jpg";

const ImageZoom = ({comeImage}) => {

    // console.log("Come Image: ",comeImage);
    let myImage;

    if(comeImage){
       myImage=comeImage
    }else{
        myImage=Image
    }
    // myImage=Image

    
    // const [isHovered, setIsHovered] = useState(false);
    // const [position, setPosition] = useState({ x: 0, y: 0 });

    // const handleMouseMove = (e) => {
    //     const imageWrapper = e.currentTarget.getBoundingClientRect();

    //     const x = ((e.clientX - imageWrapper.left) / imageWrapper.width) * 100;
    //     const y = ((e.clientY - imageWrapper.top) / imageWrapper.height) * 100;

    //     setPosition({ x, y });
    // };





    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const imageWrapper = e.currentTarget.getBoundingClientRect();

        const x = ((e.clientX - imageWrapper.left) / imageWrapper.width) * 200;
        const y = ((e.clientY - imageWrapper.top) / imageWrapper.height) * 200;

        setPosition({ x, y });
    };

    
    return (
        <div>
            <div
            className="imageWrapper"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >

                <div 
                    className={`viewport ${isHovered ? 'zoomed' : ''}`} 
                    style={{ 
                            // backgroundImage: `url(${myImage})`, 
                            backgroundImage: `url(data:image/jpeg;base64,${myImage})`,
                            backgroundPosition: `${position.x}% ${position.y}%` ,
                            // backgroundSize: 'cover',
                            // transition: 'transform 0.3s ease',
                            // transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                            // width: '100%',
                            // height: '100%',
                            // position: 'absolute',
                            // top: 0,
                            // left: 0,
                        }}
                    >
                    
                </div>
        
            </div>



            {/* <div
                className="imageWrapper"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}
            >
                <img
                    src={`data:image/jpeg;base64, ${myImage}`} // Adjust the MIME type as per your image type
                    alt="base64 image"
                    className="viewport"
                    style={{ objectFit: 'cover', width: '100%', height: '100%', transition: 'transform 0.3s ease', transform: isHovered ? 'scale(5)' : 'scale(1)' }}
                />
            </div> */}

      </div>

    );
};

export default ImageZoom;