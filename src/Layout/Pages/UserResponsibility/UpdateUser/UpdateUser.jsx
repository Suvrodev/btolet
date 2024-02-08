import React, { useState } from "react";
import "./UpdateUser.css";

import Image from "../../../../assets/Image/Suvrodev.jpg";


// import ReactImageZoom from 'react-image-zoom';
import ReactImageMagnify from 'react-image-magnify';






const UpdateUser = () => {
  const [isHovered, setIsHovered] = useState(false);

  const props = {width: 0, height: 0, zoomWidth: 500, img:Image};

  const myImage='../../../../assets/Image/Suvrodev.jpg'

  
  return (
    <div className="bg-purple-400">
        <h1>Update User</h1>
            <div className="border-2 p-2 rounded-md" id="jhinku">
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: Image
                    },
                    largeImage: {
                        src: Image,
                        width: 500,
                        height: 500,
                        backgroundColor: 'lightblue',
                    }
                }} className="imageJhinku" />
            </div>
    </div>
  );
};

export default UpdateUser;
