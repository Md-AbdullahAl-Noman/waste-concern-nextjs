"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AwardPage6 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      {/* Title Section */}
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
        Institute of Engineers Bangladesh (IEB) and Daily Star Outstanding Professional Award 2003
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-10 py-8 text-black">
       
        <div className="flex justify-center my-4">
          <img
            src="/awards/awards6.jpg"
            alt="Urban Participants Recognition 2010"
            className="w-3/4"
          />
        </div>


        <div className="container mx-auto px-5 text-sm text-black font-bold py-10 ">
       
            <p className=" text-justify leading-7">
            Abu Hasnat Md. Maqsood Sinha and Iftekhar Enayetullah, Co-founders of Waste Concern received the Institute of Engineers Bangladesh (IEB) Award & The Daily Star Outstanding Professional Award 2003 from the President of IEB. Co-founders of Waste Concern are seen with Mr. Quamrul Islam Siddique, President of IEB (sitting 3rd from left) and Md. Abdul Hamid, Former Speaker and presently the Honorable President of the People’s Republic of Bangladesh (sitting 2nd from left) at IEB Building, Dhaka, Bangladesh on May 9, 2003.
            </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default AwardPage6;
