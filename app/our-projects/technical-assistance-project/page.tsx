"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const TechnicalAssistance: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] px-8 py-6 pl-24">
        <h1 className="text-left text-3xl font-extrabold text-[#00274D] leading-tight">
          Technical Assistance Project on Integrated Solid Waste Management Improvement Project (ISWMIP)
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-10 text-black">
        {/* Client and Description */}
        <section className="space-y-6 text-base leading-relaxed">
          <p className="font-extrabold text-sm">
            Client:&nbsp;
            <span className="font-extrabold">
              Local Government Engineering Department (LGED) & Asian Infrastructure Investment Bank
            </span>
          </p>

          <p className="font-bold text-sm">Description of work:</p>
          <p className="text-base mt-4 leading-6 text-sm">
            Under this project, Waste Concern Consultants provided following services:
          </p>

          <ul className="list-disc ml-8 text-sm space-y-2">
            <li>
              Prepared Pre-feasibility Reports for USD 500 million; Policy Briefs on SWM; subproject selection criteria for
              ISWMIP; identification of Best Practicable Options (BPOs) in SWM for collection, transportation, processing
              and disposal; Sub-project identification screening, preparation of ISWMIP framework documents.
            </li>
            <li>
              Prepared Draft Feasibility Reports for each sub-project for USD 150 million (i): Conducting of local
              stakeholder analysis and consultation process, preparation of institutional strengthening plan, capacity
              assessment for the entire solid waste management chain and municipal waste management plans.
            </li>
            <li>Prepared Final Feasibility Reports.</li>
            <li>
              Prepared Draft Detailed Engineering Designs (DEDs) for USD 50 million. Preparing and delivering draft
              covering Part-B (3) containing DEDs and costs to PMCU of ISWMIP and AIIB.
            </li>
            <li>Prepared Final DEDs: Preparation and delivery final DEDs and preparation of procurement plan</li>
            <li>Prepared ESIA, ESMF, RPF, & Livelihood Restoration Plan</li>
            <li>
              Prepared Bid Documents, Procurement Plan, Project Administration Manual and Project Financial Manual
            </li>
          </ul>

          <div className="mt-8 text-sm font-extrabold">
            <p>
              Location:&nbsp;
              <span className="font-medium">Bangladesh (3 City Corporation and 23 Municipalities)</span>
            </p>
            <p>
              Period:&nbsp;
              <span className="font-medium">March 2022 to June 2023</span>
            </p>
          </div>
        </section>

        {/* Images Section */}
        <section className="mt-8 flex flex-col items-center gap-6">
          <img
            src="/our-projects/P16.jpg"
            alt="Workshop discussion"
            className="w-[80%] object-cover shadow-md "
          />
          <p className='font-extrabold justify-center text-xs'>Integrated Solid Waste Management Improvement Project (ISWMIP) supported by the Asian Infrastructure Investment Bank (AIIB) and
           implemented by the Local Government Engineering Department (LGED)</p>
          <img
            src="/our-projects/P17.jpg"
            alt="Stakeholder presentation"
            className="w-[90%] object-cover shadow-md"
          />
          <p className='font-extrabold justify-center text-xs'>Aerial View of the Proposed Site and Proposed ILF&RRF in Rajshahi City Corporation Area</p>
          <img
            src="/our-projects/P18.jpg"
            alt="Project team discussion"
            className="w-full max-w-4xl  shadow-md"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechnicalAssistance;
