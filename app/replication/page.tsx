"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Replication = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      {/* Title Section */}
      <div className="bg-[#D4CFC4] pl-32 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Replication</h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-20 py-8 text-gray-800">
        <p className="text-[#4B5563] mb-6">
          The following map depicts the location of districts in Bangladesh that
          have Integrated Resource Recovery Centers (IRRCs) implemented,
          replicated, or are supported by Waste Concern. Note that as of 2023,
          there were in total of 30 districts in Bangladesh having IRRCs
          benefitting around 2,73,76,553 (according to population census data
          of BBS, 2022).
        </p>

        {/* Map Section */}
        <div className="flex justify-center">
          <img
            src="/images/Replication1.jpg" 
            alt="IRRC Location Map"
            className="w-1/3 max-w-lg shadow-lg"
          />
        </div>

        <p className="mt-6 text-[#4B5563]">
          Apart from Bangladesh, Waste Concern is also active on the global
          level. Waste Concern has worked towards developing strategies for
          municipal solid waste management and supported replication of
          Integrated Resource Recovery Center (IRRC) model in the following
          countries: Cambodia, Nepal, Pakistan, India, Sri Lanka, Vietnam, and
          Indonesia with support from UN ESCAP.
        </p>
      </div>

        {/* Global Map Section */}
        <div className="w-full bg-white py-10">
         <div className="container mx-auto flex justify-center">
          <img
            src="/images/Replication2.png" 
            alt="Global Replication Map"
            className="w-3/4 h-auto"
          />
         </div>
        </div>

      <Footer />
    </div>
  );
};

export default Replication;
