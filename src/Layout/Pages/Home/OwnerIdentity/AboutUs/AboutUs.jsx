import React from "react";
import "./AboutUs.css";
import GoToTop from "../../../../../Function/GoToTop";

const AboutUs = () => {
  return (
    <div className="mt-20 md:mt-0 p-5 md:p-0 ">
      <GoToTop />
      <h1 className="font-bold text-xl mb-14 opacity-70">About Btolet.com</h1>

      <div className="text-[10px] md:text-[16px] opacity-60">
        <p className="prSpace aboutText">
          🏠 Btolet.com provides services to those who want to buy, sell, and
          rent their properties. It is an online marketplace for those who want
          to deal with properties in Bangladesh. It is a platform where the
          buyer and the seller can deal with the properties directly with each
          other. Btolet.com is simply a bridge between the buyers and the
          sellers.
        </p>

        <p className="prSpace">Our Vision</p>
        <p className="prSpace aboutText">
          If you are someone who wants to sell your properties at a good price,
          then you can post the details about your properties on Btolet.com.
          Btolet.com reviews the information you have provided about your
          property and publishes it on the website/app for the public to see. 🌟
        </p>

        <p className="prSpace aboutText">
          For more details about Btolet.com services, please visit here. Once
          the property is sold, it will be removed from the website.
        </p>

        <p className="prSpace">Our Mission</p>

        <p className="prSpace aboutText">
          If you are a buyer, you can find a lot of nice properties and directly
          contact and negotiate with the sellers. If you are thinking of letting
          your properties for rent, you can also put your property details so
          that those who are seeking properties for rent will contact
          you.Information about the properties listed on the site is taken from
          the consent of the sellers. In case of the wrong information, the
          seller will be responsible for that. Btolet.com is not responsible for
          any wrong information provided by the sellers. ⚠
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
