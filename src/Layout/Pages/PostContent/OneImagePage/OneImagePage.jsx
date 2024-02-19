import React, { useContext, useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { AuthContext } from '../../../../Providers/AuthProvider';

const OneImagePage = () => {
    // const {imageSrc,setImageSrc}=useContext(AuthContext)

    // const handleImageChange = (event) => {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();

    //     reader.onload = () => {
    //         // setImageSrc(reader.result);
    //         setImageSrc(reader.result.replace(/^data:image\/[a-z]+;base64,/, ''));
    //     };

    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }
    // };

    // const handleRemoveImage = () => {
    //     setImageSrc('');
    // };

    // console.log("Image: ",imageSrc);


    ////After

    const { imageSrc, setImageSrc } = useContext(AuthContext);

        const handleImageChange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                const image = new Image();
                image.src = reader.result;

                image.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const maxWidth = 200; // Set your desired maximum width
                    const maxHeight = 200; // Set your desired maximum height

                    let width = image.width;
                    let height = image.height;

                    if (width > height) {
                        if (width > maxWidth) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;

                    ctx.drawImage(image, 0, 0, width, height);

                    const compressedImageDataUrl = canvas.toDataURL('image/jpeg', 0.9); // 90% quality JPEG compression
                    const compressedBase64Image = compressedImageDataUrl.replace(/^data:image\/[a-z]+;base64,/, ''); // Remove the prefix

                    setImageSrc(compressedBase64Image);
                };
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
  

    // <div className='flex flex-col gap-4 items-start my-4 '>
    //     {imageSrc && (
    //         <div className="relative">
    //             {/* <img src={imageSrc} alt="Selected" className='w-[250px] h-[250px] border rounded-md' /> */}
    //             <img className='w-[200px] h-[200px] object-cover'  src={`data:image/png;base64,${imageSrc}`} alt="" />
    //             <button onClick={handleRemoveImage} className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1">
    //                 <FaRegTrashAlt />
    //             </button>
    //         </div>
    //     )}

    //     <input
    //         type="file"
    //         accept="image/*"
    //         onChange={handleImageChange}
    //         style={{ display: 'none' }}
    //         id="fileInput"
    //         className='my-2'
    //     />
    //     <label htmlFor="fileInput" className="btn btn-warning ">
    //         Select An Image
    //     </label>
    // </div>



    <div className='flex flex-col gap-4 items-start my-4'>
            {imageSrc && (
                <div className="relative">
                    <img className='w-[200px] h-[200px] object-cover'  src={`data:image/png;base64,${imageSrc}`} alt="" />
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
                className='my-2'
            />
            <label htmlFor="fileInput" className="btn btn-warning">
                Select An Image
            </label>
        </div>
    );
};

export default OneImagePage;