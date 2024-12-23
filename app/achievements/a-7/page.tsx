"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AwardPage7 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      {/* Title Section */}
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
        Waste Concern Honored by “The Purpose Economy” August 2, 2016
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-10 py-8 text-black">
        <div className="flex justify-center my-4">
          <img
            src="/awards/awards7.jpg"
            alt="Best Community Initiative Award 2012"
            className="w-3/4"
          />
        </div>


        <div className="container mx-auto px-5 text-sm text-black font-bold py-10 ">
       
            <p className=" text-justify leading-7">
            H. Md. Maqsood Sinha  &  Iftekhar  Enayetullah Waste Concern, Bangladesh Co-founders of Waste Concern, Bangladesh are included in the list of 100 Asian pioneers of purpose economy for turning waste into an environmentally responsible fertilizer.
            </p>
            <p className=" text-justify leading-7 mt-5">
            Waste Concern is solving three major problems, waste management problem in the urban areas of Bangladesh, depletion of organic matter from the soil of rural areas and green house gas emissions from landfill sites, with a single solution of converting organic waste into compost.
            </p>
            <p className=" text-justify leading-7 mt-5">
            H. Md. Maqsood Sinha & Iftekhar Enayetullah turned this opportunity into a company that turns household waste into bio-fertilizers that are sold nationally. The company is also assisting the development of similar models in Sri Lanka, Cambodia, Nepal and Vietnam
            </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default AwardPage7;
