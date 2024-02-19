import React, { useContext, useState } from 'react';
import { FaChevronRight, FaRegTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../../Providers/AuthProvider';

const MultiImagePage = () => {


    //   const {images, setImages,errorImages}=useContext(AuthContext)

    // const handleImageChange = async (event) => {
    //     const selectedFiles = Array.from(event.target.files).slice(0, 12); // Limit to 12 images
    //     const convertedImages = await Promise.all(
    //         selectedFiles.map(async (file) => {
    //             return new Promise((resolve) => {
    //                 const reader = new FileReader();
    //                 reader.readAsDataURL(file);
    //                 reader.onload = () =>{
    //                     //  resolve(reader.result);
    //                     const base64Image = reader.result.replace(/^data:image\/[a-z]+;base64,/, ''); // Remove the prefix
    //                     resolve(base64Image);
    //                 }
    //             });
    //         })
    //     );
    //     setImages([...images, ...convertedImages]);
    // };

    // const handleRemoveImage = (index) => {
    //     const updatedImages = [...images];
    //     updatedImages.splice(index, 1);
    //     setImages(updatedImages);
    // };



    //   console.log("MultiImages: ",images);
    //   console.log("Multime Image-1st Image: ",images[0]);


    ///After Code
    const { images, setImages, errorImages } = useContext(AuthContext);

    const handleImageChange = async (event) => {
        const selectedFiles = Array.from(event.target.files).slice(0, 12); // Limit to 12 images
        const convertedImages = await Promise.all(
            selectedFiles.map(async (file) => {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        const image = new Image();
                        image.src = reader.result;
                        image.onload = () => {
                            const canvas = document.createElement('canvas');
                            const ctx = canvas.getContext('2d');
                            canvas.width = image.width;
                            canvas.height = image.height;
                            ctx.drawImage(image, 0, 0);
                            canvas.toBlob((blob) => {
                                const compressedImage = new Promise((resolveBlob, rejectBlob) => {
                                    const compressedReader = new FileReader();
                                    compressedReader.readAsDataURL(blob);
                                    compressedReader.onloadend = () => {
                                        resolveBlob(compressedReader.result);
                                    };
                                    compressedReader.onerror = rejectBlob;
                                });
                                compressedImage.then((base64Image) => {
                                    base64Image=base64Image.replace(/^data:image\/[a-z]+;base64,/, '');
                                    resolve(base64Image);
                                });
                            }, 'image/jpeg', 0.9); // 90% quality JPEG compression
                        };
                    };
                });
            })
        );
        setImages([...images, ...convertedImages]);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    console.log("MultiImages: ", images);
    console.log("Multime Image-1st Image: ", images[0]);


    return (
 
    // <div>
    //     <input
    //         type="file"
    //         accept="image/*"
    //         onChange={handleImageChange}
    //         style={{ display: 'none' }}
    //         id="fileInput_one"
    //         multiple
    //     />
    //     <label htmlFor="fileInput_one" className={`btn btn-success ${errorImages ? 'bg-red-600' : ''}`}>
    //         Select Images (Max 12)
    //     </label>
    //     <div className='grid grid-cols-6 gap-10'>
    //         {images.map((image, index) => (
    //             <div key={index} style={{ position: 'relative' }}>
    //                 {/* <img
    //                     src={image}
    //                     alt={`Image ${index + 1}`}
    //                     className='w-[200px] h-[200px] object-cover'
    //                 /> */}
    //                  <img className='w-[200px] h-[200px] object-cover'  src={`data:image/png;base64,${image}`} alt="" />

    //                 <button onClick={() => handleRemoveImage(index)} style={{ position: 'absolute', top: '5px', right: '5px', background: 'none', border: 'none', cursor: 'pointer' }}>
    //                   <FaRegTrashAlt />
    //                 </button>
    //             </div>
    //         ))}
    //         <div className='flex items-center'>
    //             {images.length > 0 && images.length < 12 && (
    //                 <div className='bg-green-600 justify-center iconDiv w-[200px] h-[200px] object-cover '>
    //                     <FaChevronRight className='text-red-600' />
    //                 </div>
    //             )}
    //         </div>
    //     </div>
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
        <label htmlFor="fileInput_one" className={`btn btn-success ${errorImages ? 'bg-red-600' : ''}`}>
            Select Images (Max 12)
        </label>
        <div className='grid grid-cols-6 gap-10'>
            {images?.map((image, index) => (
                <div key={index} style={{ position: 'relative' }}>
                    <img className='w-[200px] h-[200px] object-cover' src={`data:image/png;base64,${image}`} alt={`Image ${index + 1}`} />
                    {/* <img className='w-[200px] h-[200px] object-cover'  src={`data:image/png;base64,${image}`} alt="" /> */}
                    <button onClick={() => handleRemoveImage(index)} style={{ position: 'absolute', top: '5px', right: '5px', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <FaRegTrashAlt />
                    </button>
                </div>
            ))}
            <div className='flex items-center'>
                {images.length > 0 && images.length < 12 && (
                    <div className='bg-green-600 justify-center iconDiv w-[200px] h-[200px] object-cover '>
                        <FaChevronRight className='text-red-600' />
                    </div>
                )}
            </div>
        </div>
    </div>
    );
};

export default MultiImagePage;