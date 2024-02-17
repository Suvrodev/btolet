import React, { useContext, useState } from 'react';
import { FaChevronRight, FaRegTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../../Providers/AuthProvider';

const MultiImagePage = () => {


      const {images, setImages,errorImages}=useContext(AuthContext)


    //   const handleImageChange = (event) => {
    //       const selectedFiles = Array.from(event.target.files).slice(0, 12); // Limit to 12 images
    //       const convertedImages = selectedFiles.map((file) => URL.createObjectURL(file));
    //       setImages([...images, ...convertedImages]);
    //   };

    //   const handleRemoveImage = (index) => {
    //       const updatedImages = [...images];
    //       updatedImages.splice(index, 1);
    //       setImages(updatedImages);
    //   };


    ///After code
    const handleImageChange = async (event) => {
        const selectedFiles = Array.from(event.target.files).slice(0, 12); // Limit to 12 images
        const convertedImages = await Promise.all(
            selectedFiles.map(async (file) => {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () =>{
                        //  resolve(reader.result);
                        const base64Image = reader.result.replace(/^data:image\/[a-z]+;base64,/, ''); // Remove the prefix
                        resolve(base64Image);
                    }
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



      console.log("MultiImages: ",images);
      console.log("Multime Image-1st Image: ",images[0]);

    return (
 

    //   <div>
    //     <input
    //         type="file"
    //         accept="image/*"
    //         onChange={handleImageChange}
    //         style={{ display: 'none' }}
    //         id="fileInput_one"
    //         multiple
    //     />
    //     <label htmlFor="fileInput_one" className={`btn btn-success ${errorImages?'bg-red-600':''}`}>
    //         Select Images (Max 12)
    //     </label>
    //     {/* style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}  */}
    //     <div className='grid grid-cols-6 gap-10'>
    //         {images.map((image, index) => (
    //             <div key={index} style={{ position: 'relative' }}>
    //                 <img
    //                     src={image}
    //                     alt={`Image ${index + 1}`}
    //                     // style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
    //                     className='w-[200px] h-[200px] object-cover'
    //                 />
    //                 <button onClick={() => handleRemoveImage(index)} style={{ position: 'absolute', top: '5px', right: '5px', background: 'none', border: 'none', cursor: 'pointer' }}>
    //                     <FaRegTrashAlt />
    //                 </button>
    //             </div>
    //         ))}
    //       <div className='flex items-center'>
    //           {images.length > 0 && images.length < 12 && (
    //             <div className='bg-green-600 justify-center iconDiv w-[200px] h-[200px] object-cover '>
    //                 <FaChevronRight className='text-red-600' />
    //             </div>
    //         )}
    //       </div>
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
            {images.map((image, index) => (
                <div key={index} style={{ position: 'relative' }}>
                    {/* <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className='w-[200px] h-[200px] object-cover'
                    /> */}
                     <img className='w-[200px] h-[200px] object-cover'  src={`data:image/png;base64,${image}`} alt="" />

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