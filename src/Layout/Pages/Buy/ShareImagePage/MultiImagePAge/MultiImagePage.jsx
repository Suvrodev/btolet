import React, { useState } from 'react';

const MultiImagePage = () => {
    const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files).slice(0, 12); // Limit to 12 images
    const convertedImages = selectedFiles.map((file) => URL.createObjectURL(file));
    setImages([...images, ...convertedImages]);
  };

    return (
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
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
            />
          ))}
        </div>
      </div>
    );
};

export default MultiImagePage;