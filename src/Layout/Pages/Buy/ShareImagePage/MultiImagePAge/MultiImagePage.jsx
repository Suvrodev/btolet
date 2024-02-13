import React, { useState } from 'react';
import { FaChevronRight, FaRegTrashAlt } from 'react-icons/fa';

const MultiImagePage = () => {
  //   const [images, setImages] = useState([]);

  // const handleImageChange = (event) => {
  //   const selectedFiles = Array.from(event.target.files).slice(0, 12); // Limit to 12 images
  //   const convertedImages = selectedFiles.map((file) => URL.createObjectURL(file));
  //   setImages([...images, ...convertedImages]);
  // };



      ///After Code
      const [images, setImages] = useState([]);

      const handleImageChange = (event) => {
          const selectedFiles = Array.from(event.target.files).slice(0, 12); // Limit to 12 images
          const convertedImages = selectedFiles.map((file) => URL.createObjectURL(file));
          setImages([...images, ...convertedImages]);
      };

      const handleRemoveImage = (index) => {
          const updatedImages = [...images];
          updatedImages.splice(index, 1);
          setImages(updatedImages);
      };

    return (
      //   <div>
      //   <input
      //     type="file"
      //     accept="image/*"
      //     onChange={handleImageChange}
      //     style={{ display: 'none' }}
      //     id="fileInput_one"
      //     multiple
      //   />
      //   <label htmlFor="fileInput_one" className="btn btn-warning">
      //     Select Images (Max 12)
      //   </label>
      //   <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
      //     {images.map((image, index) => (
      //       <img
      //         key={index}
      //         src={image}
      //         alt={`Image ${index + 1}`}
      //         style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
      //       />
      //     ))}
      //   </div>
      // </div>

      <div>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="fileInput_one"
            multiple
        />
        <label htmlFor="fileInput_one" className="btn btn-warning">
            Select Images (Max 12)
        </label>
        <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
            {images.map((image, index) => (
                <div key={index} style={{ position: 'relative' }}>
                    <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        // style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
                        className='w-[200px] h-[200px] object-cover'
                    />
                    <button onClick={() => handleRemoveImage(index)} style={{ position: 'absolute', top: '5px', right: '5px', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <FaRegTrashAlt />
                    </button>
                </div>
            ))}
            {images.length < 12 && (
                <div className='bg-green-600 justify-center iconDiv w-[200px] h-[200px] object-cover '>
                
                    <FaChevronRight className='text-red-600' />
                </div>
            )}
        </div>
    </div>
    );
};

export default MultiImagePage;