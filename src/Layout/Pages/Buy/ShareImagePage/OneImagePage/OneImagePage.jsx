import React, { useState } from 'react';

const OneImagePage = () => {
    const [imageSrc, setImageSrc] = useState('');

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
        setImageSrc(reader.result);
        };

        if (file) {
        reader.readAsDataURL(file);
        }
    };
    // console.log("Image: ",imageSrc);


    return (
        <div className='flex flex-col gap-4 items-start my-4 '>

        {imageSrc && (
                <div>
                 <img src={imageSrc} alt="Selected" className='w-[250px] h-[250px] border rounded-md' />
                </div>
            )}

        <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="fileInput"
            className='my-4'
          
        />
        <label htmlFor="fileInput" className="btn btn-warning">
            Select An Image
        </label>

     
    </div>
    );
};

export default OneImagePage;