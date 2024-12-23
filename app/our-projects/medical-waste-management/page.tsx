"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MedicalWasteManagement: React.FC = () => {
  return (
    <div className="MedicalWasteManagement flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] px-8 py-6 pl-24">
        <h1 className="text-left text-3xl font-extrabold text-[#00274D] leading-tight">
          Strengthening Medical Waste Management in the Greater Dhaka Area
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-10 text-black">
        {/* Client and Description */}
        <section className="space-y-6 text-base leading-relaxed">
          <p className="font-extrabold text-sm">
            Client:&nbsp;
            <span className="font-extrabold">
              Foreign, Commonwealth and Development Office, Government of UK
            </span>
          </p>

          <p className="font-bold text-sm">Description of work:</p>
          <p className="text-base text-sm mt-8">
            Under this project, Waste Concern will carry out the following activities:
          </p>

          <ol className="list-decimal list-inside text-sm text-black space-y-3 mt-8 pl-4">
            <li>
              Preparation of awareness raising materials for hospitals and health care workers and
              organization of training focusing on all hospital waste management, including disposal
              of used PPE and samples of COVID-19 testing which are bio hazardous in nature.
            </li>
            <li>
              Supply shredders and sharps disposal containers in all hospitals and testing
              facilities. Priority should be given to all hospitals treating COVID-19 patients.
            </li>
            <li>Supply storage bins for PPE.</li>
            <li>
              Supply of special medical waste collection vehicles for two City Corporations.
            </li>
            <li>
              Awareness raising amongst municipal workers and municipalities for segregated disposal
              of PPE and medical waste.
            </li>
            <li>
              Supply of PPE for all municipal solid waste collection and disposal staff.
            </li>
            <li>
              Supply of one intermediate secondary controlled landfill for disposal of medical waste
              as an interim facility and installation of 1 (one) incinerator for biomedical waste
              treatment.
            </li>
            <li>Preparation of SOPs for medical waste management.</li>
          </ol>
        </section>

        {/* Images Section */}
        <section className="mt-12 flex flex-col items-center">
          <img
            src="/our-projects/P1.jpg"
            alt="Medical Waste Management Details"
            className="w-full max-w-4xl rounded-md shadow-md mb-6"
          />
          <img
            src="/our-projects/P2.jpg"
            alt="Training Session for Medical Waste Management"
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
            October 2020 to June 2022
            </span>
          </p>

      </main>

      <Footer />
    </div>
  );
};

export default MedicalWasteManagement;
