"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ConsultancyServices: React.FC = () => {
  return (
    <div className="MedicalWasteManagement flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      
      <div className="bg-[#D4CFC4] px-8 py-6 pl-24">
        <h1 className="text-left text-3xl font-extrabold text-[#00274D] leading-tight">
        Consultancy Services for Solid Waste Management under MDS Consultant of City Region Development Project
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-10 text-black">
        {/* Client and Description */}
        <section className="space-y-6 text-base leading-relaxed">
          <p className="font-extrabold text-sm">
            Client:&nbsp;
            <span className="font-extrabold">
            LGED/ADB
            </span>
          </p>

          <p className="font-bold text-sm">Description of work:</p>
          <p className="text-base text-sm mt-8">
          The main aims of the assignment were as follows: to identify the most appropriate intervention on solid waste management for the CRDP project; 
          develop a detailed engineering design of the most appropriate intervention, and preparation of a contract document for the involvement of the private sector 
          for O&M of the appropriate intervention.
          </p>

          <p className="text-base text-sm mt-8">
          Activities performed: Reviewed existing data on solid waste for selected cities and towns as well as identification of gaps in the service chain of solid waste management.  
          Identified potential options for solid waste recycling, treatment, and disposal, and recommended the best possible options for the selected city for project implementation. 
          Prepared the conceptual design and supervised the detailed engineering design and bill of quantity (BOQ) of regional controlled landfill and resource recovery facility for Jessore city (the selected city for intervention).
           Recommended the most suitable options for implementation of the project involving the private sector. Prepared the business plan, bidding document as well as contract document for the private sector for O& M of the landfill and resource recovery facility.  
           Provided inputs for preparation of IEE report for the regional integrated landfill and resource recovery facility for Jessore city.
          </p>
        </section>

        {/* Images Section */}
        <section className="mt-12 flex flex-col items-center gap-4">
          <img
            src="/our-projects/P3.jpg"
            alt="consultancy services"
            className="w-full max-w-4xl rounded-md shadow-md mb-6"
          />
          <img
            src="/our-projects/P4.jpg"
            alt="consultancy services"
            className="w-full max-w-4xl rounded-md shadow-md"
          />
          <img
            src="/our-projects/P5.jpg"
            alt="consultancy services"
            className="w-full max-w-4xl rounded-md shadow-md"
          />
          <img
            src="/our-projects/P6.jpg"
            alt="consultancy services"
            className="w-full max-w-4xl rounded-md shadow-md"
          />
        </section>

        <p className="font-extrabold text-sm  mt-4">
            Location:&nbsp;
            <span className="font-medium">
              Bangladesh
            </span>
          </p>

          <p className="font-extrabold text-sm">
            Period:&nbsp;
            <span className="font-medium">
            May 2015 to April 2016
            </span>
          </p>

      </main>

      <Footer />
    </div>
  );
};

export default ConsultancyServices;
