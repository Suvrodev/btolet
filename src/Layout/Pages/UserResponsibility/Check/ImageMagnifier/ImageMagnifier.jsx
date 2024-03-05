import React, { useState } from 'react';
import './ImageMagnifier.css'

const ImageMagnifier = ({ smallImage, largeImage }) => {

    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [showMagnifier, setShowMagnifier] = useState(false);
  
    const handleMouseMove = e => {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const offsetX = e.clientX - left;
      const offsetY = e.clientY - top;
  
      const ratioX = width / smallImage.width;
      const ratioY = height / smallImage.height;
  
      setOffset({
        x: offsetX - (largeImage.width * ratioX) / 2,
        y: offsetY - (largeImage.height * ratioY) / 2,
      });
    };


    return (
        <div
        style={{
          position: 'relative',
          display: 'inline-block',
          cursor: 'zoom-in',
          width: 270,
          height: 350,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
      >
        <img
          src={smallImage.src}
          alt="Small"
          style={{ maxWidth: '100%' }}
          width={270}
          height={350}
        />
        {showMagnifier && (
          <div
            className="magnifier-container"
            style={{
              position: 'absolute',
              top: 0,
              left: 'calc(100% + 10px)',
              width: 300,
              height: 400,
              overflow: 'hidden',
              border: '1px solid #ccc',
            }}
          >
            <img
              src={largeImage.src}
              alt="Large"
              style={{
                position: 'absolute',
                top: -2 * offset.y,
                left: -2 * offset.x,
                maxWidth: 'none',
                width:  700, // Adjust zoom factor as needed
                height:  900, // Adjust zoom factor as needed
              }}
            />
          </div>
        )}
      </div>

    );
};

export default ImageMagnifier;