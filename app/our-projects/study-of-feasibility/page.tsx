"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const StudyOfFeasibility: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] px-8 py-6 pl-24">
        <h1 className="text-left text-3xl font-extrabold text-[#00274D] leading-tight">
        Study of Feasibility and Preparation of Designs for a Pilot Fecal Sludge Management System in Chattogram City
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-10 text-black">
        {/* Client and Description */}
        <section className="space-y-6 text-base leading-relaxed">
          <p className="font-extrabold text-sm">
            Client:&nbsp;
            <span className="font-extrabold">
            The World Bank 
            </span>
          </p>

          <p className="font-bold text-sm">Description of work:</p>
          <p className="font-semibold text-base mt-4 leading-6 text-sm">
          The duties and responsibilities performed are as follows:
          </p>

          <p className="text-base mt-4 leading-6 text-sm">
          (1) Conducted a field assessment, including interviews of key stakeholders in Chattogram Metro, selected households, CWASA and City Corporation staff to identify the pilot study area; (2) Collected quantitative and qualitative data on FSM in the selected study area, with a focus on the quality of the existing FSM services, identifying the hurdles, gaps and bottlenecks to providing improved FSM service delivery; (3) Produced estimations of sludge quantities to be collected and treated, for the current situation and future scenarios; (4) Assessed prevailing service delivery models in Bangladesh and suggest appropriate adoption for Chattogram Metro based on critical analysis of merits and demerits of the prevailing models. Documented based on the available literature in print and electronic media the experiences of successful models in South Asia region and recommend a couple of models which could be adopted with modifications, if any, considering local context including policy, regulatory and institutional arrangements; (5) Recommended a treatment process for a fecal sludge treatment (comparison of different options) and provided preliminary and final design of a faecal sludge treatment plant; and (6) Developed standard Bills of Quantities, Cost Estimates (at 2022 prices), Technical Specifications and the draft bidding documents for the (a) equipment for collection and transportation, as necessary, and (b) construction of the relevant infrastructure, such as fecal sludge (FS) transfer stations (TS) and FS treatment facilities. (7) Prepared ESIA and ESMF documents, (8) Prepared procurement plan and bid document. 
          </p>

          
        </section>

        {/* Images Section */}
        <section className="mt-12 flex flex-col items-center gap-4">
          <img
            src="/our-projects/P19.jpg"
            alt="Medical Waste Management Details"
            className="w-full max-w-2xl  shadow-md "
          />
          <img
            src="/our-projects/P20.jpg"
            alt="Training Session for Medical Waste Management"
            className="w-full max-w-2xl  shadow-md"
          />
          <img
            src="/our-projects/P21.jpg"
            alt="Training Session for Medical Waste Management"
            className="w-full max-w-2xl  shadow-md"
          />
        </section>
          
        

        <div className="mt-8 text-sm font-extrabold">
            <p>
              Location:&nbsp;
              <span className="font-medium">Chattogram, Bangladesh</span>
            </p>
            <p>
              Period:&nbsp;
              <span className="font-medium">March 2022 to July 2023</span>
            </p>
          </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudyOfFeasibility;
