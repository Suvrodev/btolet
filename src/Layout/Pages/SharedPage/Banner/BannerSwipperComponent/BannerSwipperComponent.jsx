import React, { useEffect, useState } from 'react';

const BannerSwipperComponent = ({ images }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change the interval time as needed
  
      return () => clearInterval(interval);
    }, [images.length, currentIndex]); // Reset interval when currentIndex changes

    return (
        // <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
        <div className='relative w-full h-full overflow-hidden'>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: '0',
              left: `${index * 100}%`,
              width: '100%',
              height: '100%',
              transition: 'transform 0.5s ease', // Adjusted for transform
              transform: `translateX(-${currentIndex * 100}%)`, // Adjusted for currentIndex
            }}
            className=''
          >
            <img
              src={`data:image/jpeg;base64,${image}`} // Assuming images are in JPEG format
              alt={`Image ${index}`}
              style={{ width: '100%', height: '100%', }}
              className='rounded-xl h-full'
            />
          </div>
        ))}

            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 rounded-xl'>
        
              {images.map((_, index) => (
              <p
                  key={index}
                  className={`w-[10px] h-[10px] bg-white rounded-full transition-width duration-500 ease-in-out ${currentIndex === index ? 'w-[35px]' : 'w-[10px]'} `}
              ></p>
              ))}
            </div>
      </div>
    );
};

export default BannerSwipperComponent;