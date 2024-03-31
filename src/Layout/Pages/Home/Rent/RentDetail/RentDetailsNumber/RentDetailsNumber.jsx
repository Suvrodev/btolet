import React, { useEffect, useState } from "react";
import convertDate from "../../../../../../Function/DateConvert";

const RentDetailsNumber = ({ ad }) => {
  // console.log("Detail Number: ",ad);

  let color = false;
  const help = ad?.itemNumber;
  let itemNumbers;
  if (Array.isArray(help)) {
    itemNumbers = help.join(",");
    color = true;
  } else {
    itemNumbers = ad?.itemNumber;
    color = false;
  }

  // console.log("Item Numbers: ",itemNumbers);
  // console.log("Data type of Item Number: ",typeof(itemNumbers));

  const isNumber = typeof itemNumbers === "number";
  const isString = typeof itemNumbers === "string";

  const [myDate, setMyDate] = useState("");
  useEffect(() => {
    if (ad?.itemName == "Rent From") {
      setMyDate(convertDate(itemNumbers));
    }
  }, []);

  return (
    <div className="w-full flex items-start mb-3">
      <div className="w-[30%]  flex items-center gap-2">
        <span className="prText">{ad?.iconName}</span>
        <h1 className="prText text-xl"> {ad?.itemName} </h1>
      </div>
      <div className="w-[70%]">
        {ad?.itemName == "Facilities" && (
          <p className=" text-green-500 text-xl">{itemNumbers}</p>
        )}
        {ad?.itemName == "Rent From" && (
          <p className=" text-black text-xl opacity-70">{myDate}</p>
        )}
        {ad?.itemName !== "Facilities" && ad?.itemName !== "Rent From" ? (
          <p className="text-black text-xl opacity-70 ">{itemNumbers}</p>
        ) : (
          <p className="text-black"></p>
        )}
      </div>
    </div>
  );
};

export default RentDetailsNumber;
