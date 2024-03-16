import React, { useEffect, useState } from "react";

import "./Check.css";

import Image from "../../../../assets/Image/Suvrodev.jpg";

import { FiHeart } from "react-icons/fi";




const Checki = () => {

 
  const [skeliton,setSkeliton]=useState(true)
  const hanadleButton=()=>{
    setSkeliton(!skeliton)
  }
  console.log("Skeliton: ",skeliton);
    
  return (
        <div className="text-black">
          <div>
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

          <div className="mt-10">
              <h1 className={`w-3/12 bg-white h-[30px] rounded-xl  ${skeliton?"skeleton":""}`}></h1>
              <button onClick={hanadleButton} className="btn btn-primary">Click</button>
          </div>
        </div>

  );
};

export default Checki;
