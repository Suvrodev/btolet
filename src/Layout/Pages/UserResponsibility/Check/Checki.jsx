import React, { useEffect, useState } from "react";

import "./Check.css";

import Image from "../../../../assets/Image/Suvrodev.jpg";

import { FiHeart } from "react-icons/fi";




const Checki = () => {

 
    
  return (
        <div className="text-black">
           <h1>Check Something</h1>
           <div>
              <div className="collapse bg-green-600 w-2/12 collapse-arrow">
                    <input type="checkbox" /> 
                        <div className="collapse-title text-xl font-medium">
                          Click me to show/hide content
                        </div>
                        
                        <div className="collapse-content"> 
                          <p>hello</p>
                        </div>
                </div>
           </div>
        </div>

  );
};

export default Checki;
