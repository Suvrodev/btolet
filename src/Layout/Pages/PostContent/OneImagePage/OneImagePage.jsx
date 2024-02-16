import React, { useContext, useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { AuthContext } from '../../../../Providers/AuthProvider';

const OneImagePage = () => {
    const {imageSrc,setImageSrc}=useContext(AuthContext)

    // const [imageSrc, setImageSrc] = useState('');

    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();

    //     reader.onload = () => {
    //     setImageSrc(reader.result);
    //     };

    //     if (file) {
    //     reader.readAsDataURL(file);
    //     }
    // };
    // console.log("Image: ",imageSrc);



    ///After Code
    // const [imageSrc, setImageSrc] = useState('');

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

    const handleRemoveImage = () => {
        setImageSrc('');
    };

    // console.log("Image: ",imageSrc);

    return (
    //     <div className='flex flex-col gap-4 items-start my-4 '>

    //     {imageSrc && (
    //             <div>
    //              <img src={imageSrc} alt="Selected" className='w-[250px] h-[250px] border rounded-md' />
    //             </div>
    //         )}

    //     <input
    //         type="file"
    //         accept="image/*"
    //         onChange={handleImageChange}
    //         style={{ display: 'none' }}
    //         id="fileInput"
    //         className='my-4'
          
    //     />
    //     <label htmlFor="fileInput" className="btn btn-warning">
    //         Select An Image
    //     </label>

     
    // </div>



    <div className='flex flex-col gap-4 items-start my-4 '>
        {imageSrc && (
            <div className="relative">
                <img src={imageSrc} alt="Selected" className='w-[250px] h-[250px] border rounded-md' />
                <button onClick={handleRemoveImage} className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
                    <FaRegTrashAlt />
                </button>
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