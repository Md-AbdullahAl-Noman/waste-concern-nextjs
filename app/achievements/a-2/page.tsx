"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AwardPage2 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      {/* Title Section */}
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
          Waste Concern Receives Environment Award 2007
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-10 py-8 text-black">
    
        <div className="flex justify-center my-4">
          <img
            src="/awards/awards2.jpg"
            alt="Outstanding Social Entrepreneurs 2003"
            className="w-3/4"
          />
        </div>

        <div className="container mx-auto px-5 text-sm text-black font-bold py-10 ">
          <div>
            <p className=" text-justify leading-7">
            The Department of Environment (DoE) under the Ministry of Environment and Forests of the Government of Bangladesh (GoB) has awarded Waste Concern with Environment Award 2007 in the category of Research and Development of Innovative Technologies and its Applications. This is the first-ever Environment Award introduced by the Government of Bangladesh for out standing contribution to the improvement and protection of the environment.
            </p>
            <p className=" text-justify leading-7 mt-5">
            Honorable advisor to the Ministry of Environment and Forest Dr. C. S. Karim handed over the award to Waste Concern on June 5, 2007 at the Osmani Memorial Hall on the occasion of World Environment Day in Bangladesh.
            </p>
            <p className=" text-justify leading-7 mt-5">
            Other recipients are the Environmental Lawyers’ Association (Bela), Globeleq and Bara Dai Casto Ganga Jalmale Committee
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default AwardPage2;
