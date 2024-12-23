"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AwardPage8 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      {/* Title Section */}
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
        WASTE CONCERN RECEIVES CLEAN DHAKA WARD CONTEST AWARD-2009
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-10 py-8 text-black">
        <div className="flex justify-center my-4">
          <img
            src="/awards/awards8.jpg"
            alt="Global Green Innovation Award 2015"
            className="w-3/4"
          />
        </div>


        <div className="container mx-auto px-5 text-sm text-black font-bold py-10 ">
       
            <p className=" text-justify leading-7">
            August 2, 2014
            </p>
            <p className=" text-justify leading-7 mt-5">
            Waste Concern was awarded Best Community and Private Initiative Award in Clean Dhaka Ward Contest in 2009 by DCC. Waste Concern has received this award for its work in Mirpur area of Dhaka city. It may be mentioned here that Waste Concern has been working in the Mirpur section-2 since 1994 and it is first house-to-house waste collection scheme in the entire Mirpur area of Dhaka. Moreover, Waste Concern is also operating slum based waste management and composting schemes at several slum and squatter settlements in Mirpur including one at Bashantek slum with its partner organization-DSK. This is the second Clean Dhaka Ward Contest organized jointly by Dhaka City Corporation and Japan International Cooperation Agency (JICA).
            </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default AwardPage8;
