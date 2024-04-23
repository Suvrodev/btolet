import React, { useRef, useState } from "react";

const FeedBackImage = () => {
  //   const [selectedImages, setSelectedImages] = useState([]);
  //   const handleImageSelection = (event) => {
  //     const files = event.target.files;
  //     const imageArray = [];

  //     for (let i = 0; i < Math.min(files.length, 2); i++) {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(files[i]);
  //       reader.onload = () => {
  //         imageArray.push(reader.result);
  //         if (imageArray.length === Math.min(files.length, 2)) {
  //           setSelectedImages((prevImages) => [...prevImages, ...imageArray]);
  //         }
  //       };
  //     }
  //   };

  //   const removeImage = (index) => {
  //     const updatedImages = [...selectedImages];
  //     updatedImages.splice(index, 1);
  //     setSelectedImages(updatedImages);
  //   };

  const [selectedImages, setSelectedImages] = useState([]);
  const inputRef = useRef(null);

  const handleImageSelection = (event) => {
    const files = event.target.files;
    const imageArray = [];

    for (let i = 0; i < Math.min(files.length, 2); i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        imageArray.push(reader.result);
        if (imageArray.length === Math.min(files.length, 2)) {
          setSelectedImages((prevImages) => [...prevImages, ...imageArray]);
        }
      };
    }
  };

  const removeImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  console.log("Selected Image: ", selectedImages);
  return (
    // <div>
    //   <input
    //     type="file"
    //     accept="image/*"
    //     onChange={handleImageSelection}
    //     multiple
    //   />
    //   <div>
    //     {selectedImages.map((image, index) => (
    //       <div
    //         key={index}
    //         style={{ position: "relative", display: "inline-block" }}
    //       >
    //         <img
    //           src={image}
    //           alt="Selected"
    //           style={{ maxWidth: "200px", maxHeight: "200px" }}
    //         />
    //         <button
    //           style={{ position: "absolute", top: "5px", right: "5px" }}
    //           onClick={() => removeImage(index)}
    //         >
    //           X
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div>
      <button
        onClick={handleButtonClick}
        className={`btn btn-primary ${
          selectedImages.length > 1 ? "hidden" : ""
        }`}
      >
        Select Image
      </button>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageSelection}
        ref={inputRef}
        style={{ display: "none" }}
        multiple
      />
      <div>
        {selectedImages.map((image, index) => (
          <div
            key={index}
            style={{ position: "relative", display: "inline-block" }}
          >
            <img
              src={image}
              alt="Selected"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
            <button
              style={{ position: "absolute", top: "5px", right: "5px" }}
              onClick={() => removeImage(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBackImage;
