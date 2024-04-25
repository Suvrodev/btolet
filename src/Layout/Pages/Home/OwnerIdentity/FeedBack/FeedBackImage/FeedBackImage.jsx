import React, { useRef, useState } from "react";

const FeedBackImage = ({ selectedImages, setSelectedImages }) => {
  /**
   * Code-1
   */

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

  /**
   * Code-1 End
   */

  /**
   * Code-2
   */

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

  /**
   * Code-2 End
   */

  /**
   * Code-3 Start
   */

  // const [selectedImages, setSelectedImages] = useState([]);
  // const [errorMessage, setErrorMessage] = useState("");
  // const inputRef = useRef(null);

  // const handleImageSelection = (event) => {
  //   const files = event.target.files;
  //   const imageArray = [];

  //   if (selectedImages.length + files.length > 2) {
  //     setErrorMessage("You can only select up to 2 images.");
  //     return;
  //   }

  //   for (let i = 0; i < files.length; i++) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(files[i]);
  //     reader.onload = () => {
  //       imageArray.push(reader.result);
  //       if (imageArray.length === files.length) {
  //         setSelectedImages((prevImages) => [...prevImages, ...imageArray]);
  //       }
  //     };
  //   }
  // };

  // const removeImage = (index) => {
  //   const updatedImages = [...selectedImages];
  //   updatedImages.splice(index, 1);
  //   setSelectedImages(updatedImages);
  //   setErrorMessage(""); // Clear error message when removing an image
  // };

  // const handleButtonClick = () => {
  //   inputRef.current.click();
  // };
  /**
   * Code-3 End
   */
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

    <div className="mt-4">
      <button
        onClick={handleButtonClick}
        className={`btn btn-primary text-white ${
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
            className="flex gap-6 items-center "
          >
            <img
              src={image}
              alt="Selected"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
              className="ml-4 mt-2"
            />
            <button
              style={{ position: "absolute", top: "5px", right: "5px" }}
              onClick={() => removeImage(index)}
              className="text-red-500"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>

    // <div className="mt-4">
    //   <button
    //     onClick={handleButtonClick}
    //     className={`btn btn-primary text-white ${
    //       selectedImages.length > 1 ? "hidden" : ""
    //     }`}
    //   >
    //     Select Image
    //   </button>
    //   <input
    //     type="file"
    //     accept="image/*"
    //     onChange={handleImageSelection}
    //     ref={inputRef}
    //     style={{ display: "none" }}
    //     multiple
    //   />
    //   {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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
  );
};

export default FeedBackImage;
