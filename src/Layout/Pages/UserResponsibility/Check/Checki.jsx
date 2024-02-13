import React, { useEffect, useState } from "react";

import "./Checki.css";

import Image from "../../../../assets/Image/Suvrodev.jpg";

import { FiHeart } from "react-icons/fi";


const Checki = () => {

    const [data, setData] = useState(1);

    useEffect(() => {
        let scrollSteps = 0;

        const handleScroll = () => {
        scrollSteps++;
        console.log("Scroll step:", scrollSteps);

        if (scrollSteps === 3) {
            setData(prevData => prevData + 1);
            scrollSteps = 0; // Reset scroll steps after incrementing data
        }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
        window.removeEventListener('wheel', handleScroll);
        };
    }, []);



    const [sv,setSv]=useState([1,2,3,4,5])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.org/comments`)
        .then(res=>res.json())
        .then(data=>{
            console.log("Comming Data: ",data);
            const newData = [...sv, ...data];
            setSv(newData);
        })
    },[])


    console.log("Value of sv: ",sv);

    const handleIncrease=()=>{
        console.log("prv Value: ",sv );

       

        console.log("Now sv: ",sv);
    }


    

  return (
        <div>
            {/* <h1>Data: {data}</h1>
            <div style={{ height: '2000px' }}>Scroll down 3 steps to increase data value by 1</div> */}


            <button onClick={handleIncrease} className="btn btn-warning">Increase</button>

            <div>
                <h1>Feather Icon: </h1>
                <FiHeart />

            </div>
      </div>

  );
};

export default Checki;
