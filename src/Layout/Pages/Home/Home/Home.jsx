import React from "react";
import Rent from "../Rent/Rent/Rent";
import Marque from "../../SharedPage/Marque/Marque";
import Banner from "../../SharedPage/Banner/Banner";
import useTitle from "../../../../Function/Hooks/useTitle";
import Buy from "../../Buy/Buy/Buy";

const Home = () => {
  useTitle("Home");
  return (
    <div className="">
      {/* <Marque></Marque>
            <div className='h-full md:h-[360px] flex flex-col md:flex-row gap-2 items-center justify-start mx-4 md:mx-0'>
                <div className='w-full md:w-[60%] h-[360px]'>
                    <Banner></Banner>
                </div>
                 <div className='hidden md:block w-full md:w-[40%]    '>
                   <div className='bg-green-500 h-[360px] rounded-lg  flex items-center justify-center '>
                       <h1> Google Ads</h1>
                   </div>
                 </div>
            </div> */}
      {/* <Rent></Rent> */}
      <Buy></Buy>
    </div>
  );
};

export default Home;
