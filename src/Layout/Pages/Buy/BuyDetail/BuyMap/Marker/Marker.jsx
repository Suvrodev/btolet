import { FmdGood } from '@mui/icons-material';
import React from 'react';

const Marker = ({ text }) => {
    return (
        <div style={{ color: 'red', position: 'absolute', transform: 'translate(-50%, -50%)' }}>
            <FmdGood /> 
            {text}
        </div>
    );
};

export default Marker;