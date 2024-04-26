import React from "react";

const ObserverCard = ({ buy, dep }) => {
  const {
    pid,
    image,
    image1,
    wapp,
    price,
    bath,
    bed,
    area,
    phone,
    size,
    location,
    measurement,
    time,
    total_image,
    category,
    geolat,
    geolon,
  } = buy;
  return (
    <div className="border p-5 h-[750px] w-[300px] bg-green-400 mt-10">
      <h1 className="text-center font-bold">Observer Card</h1>
      <img
        className="w-full h-[150px] md:h-[240px] rounded-md  object-cover object-center"
        src={`data:image/png;base64,${image1}`}
        // src={checkImage}
        alt=""
      />
      <h1>{dep + ""}</h1>
    </div>
  );
};

export default ObserverCard;
