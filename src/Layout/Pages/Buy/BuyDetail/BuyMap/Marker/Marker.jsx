import { FmdGood } from "@mui/icons-material";
import React from "react";

const Marker = ({ lat, lng, text }) => {
  return (
    // <div style={{ color: 'red', position: 'fixed'  }}>
    //     <FmdGood />

    // </div>

    <div className="w-8 h-8  rounded-full flex justify-center items-center  font-bold">
      <FmdGood className="text-red-500" />
    </div>
  );
};

export default Marker;
