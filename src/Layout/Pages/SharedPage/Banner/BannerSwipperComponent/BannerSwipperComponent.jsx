import React, { useEffect, useRef, useState } from 'react';

const BannerSwipperComponent = ({ images }) => {

    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //   }, 3000); 
  
    //   return () => clearInterval(interval);
    // }, [images.length, currentIndex]);





    //After Code
    const [currentIndex, setCurrentIndex] = useState(0);
    const startX = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change the interval time as needed

        return () => clearInterval(interval);
    }, [images.length, currentIndex]); // Reset interval when currentIndex changes

    const handleStart = (e) => {
        startX.current = e.clientX || e.touches[0].clientX;
    };

    const handleMove = (e) => {
        if (startX.current === null) return;

        const x = e.clientX || e.touches[0].clientX;
        const deltaX = x - startX.current;

        if (deltaX > 50) {
            // Swipe right
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            startX.current = null;
        } else if (deltaX < -50) {
            // Swipe left
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            startX.current = null;
        }
    };

    const handleEnd = () => {
        startX.current = null;
    };

    return (
      //   <div className='relative w-full h-full overflow-hidden'>
      //   {images.map((image, index) => (
      //     <div
      //       key={index}
      //       style={{
      //         position: 'absolute',
      //         top: '0',
      //         left: `${index * 100}%`,
      //         width: '100%',
      //         height: '100%',
      //         transition: 'transform 0.5s ease', 
      //         transform: `translateX(-${currentIndex * 100}%)`, 
      //       }}
      //       className=''
      //     >
      //       <img
      //         src={`data:image/jpeg;base64,${image}`} 
      //         alt={`Image ${index}`}
      //         style={{ width: '100%', height: '100%', }}
      //         className='rounded-xl h-full'
      //       />
      //     </div>
      //   ))}

      //       <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 rounded-xl'>
        
      //         {images.map((_, index) => (
      //         <p
      //             key={index}
      //             className={`w-[10px] h-[10px] bg-white rounded-full transition-width duration-500 ease-in-out ${currentIndex === index ? 'w-[35px]' : 'w-[10px]'} `}
      //         ></p>
      //         ))}
      //       </div>
      // </div>


      <div
      className='relative w-full h-full overflow-hidden'
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
  >
      {images.map((image, index) => (
          <div
              key={index}
              style={{
                  position: 'absolute',
                  top: '0',
                  left: `${index * 100}%`,
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.5s ease',
                  transform: `translateX(-${currentIndex * 100}%)`,
              }}
          >
              <img
                  src={`data:image/jpeg;base64,${image}`}
                  alt={`Image ${index}`}
                  style={{ width: '100%', height: '100%' }}
                  className='rounded-xl h-full'
              />
          </div>
      ))}
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 rounded-xl'>
          {images.map((_, index) => (
              <p
                  key={index}
                  className={`w-[10px] h-[10px] bg-white rounded-full transition-width duration-500 ease-in-out ${
                      currentIndex === index ? 'w-[35px]' : 'w-[10px]'
                  } `}
              ></p>
          ))}
      </div>
  </div>
    );
};

export default BannerSwipperComponent;