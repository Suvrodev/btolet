import React, { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../../../Providers/AuthProvider";
import axios from "axios";

// const { createProxyMiddleware } = require('http-proxy-middleware');

const Marque = () => {
  const { baseUrl } = useContext(AuthContext);
  const [marqueText, setMarqueText] = useState("");

  // const proxyUrl = 'https://cors-anywhere.herokuapp.com';

  const apiUrl = `${baseUrl}/notes`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => setMarqueText(res.data.text))
      .catch((error) => console.log("Error: ", error));
  }, []);

  // console.log("Marque: ", marqueText);

  return (
    <div
      className={`bg-[#e9e8e8] p-2 rounded-md mt-24 md:mt-2 mb-4 mx-4 md:mx-0 max-w-[100rem] ${
        marqueText ? "" : "sklLoading"
      }`}
    >
      <Marquee speed={100} className="text-black text-[12px] md:text-lg ">
        {marqueText}
      </Marquee>
    </div>
  );
};

export default Marque;
