import React from 'react';
import { FaMapMarker } from 'react-icons/fa';


const mapStyles = {
    height: "400px",
    width: "100%"
  };
const CustoMarker = ({ text }) => {


    <div style={{ position: 'relative', color: 'black', fontSize: '16px', fontWeight: 'bold' }}>
            <FontAwesomeIcon icon={FaMapMarker} style={{ marginRight: '5px' }} />
            {text}
     </div>
     
    // return (
    //     <div style={{ position: 'relative', color: 'black', fontSize: '16px', fontWeight: 'bold' }}>
    //         <FontAwesomeIcon icon={FaMapMarker} style={{ marginRight: '5px' }} />
    //         {text}
    //  </div>
    // );
};

export default CustoMarker;