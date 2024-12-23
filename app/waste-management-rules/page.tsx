"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const wasteManagementRules = [
  {
    image: "rule/Rule1.jpg",
    title: "Bangladesh Compost Standard 2008",
    pdf: "rule/Bangladesh-Compost-Standard-2008.pdf",
  },
  {
    image: "rule/Rule2.jpg",
    title: "Bangladesh Standards and Guidelines for Sludge Management - 2015",
    pdf: "rule/Bangladesh-Standards-and-Guideline-for-sludge-management-2015.pdf",
  },
  {
    image: "rule/Rule3.jpg",
    title: "Medical Waste Management Rules 2008",
    pdf: "rule/Medical-Waste-Management-Rules-2008.pdf",
  },
  {
    image: "rule/Rule4.jpg",
    title: "Solid Waste Management Rules 2021",
    pdf: "rule/Solid-Waste-Management-Rules-2021.pdf",
  },
  {
    image: "rule/Rule5.jpg",
    title: "Institutional and Regulatory Framework for Faecal Sludge Management (FSM) - Pourashava",
    pdf: "rule/Institutional-And-Regulatory-Framework-for-Faecal-Sludge-Management-FSM-Pourashava.pdf",
  },
  {
    image: "rule/Rule6.jpg",
    title: "Institutional And Regulatory Framework for Faecal Sludge Management (FSM)-Mega City Dhaka",
    pdf: "rule/Institutional-And-Regulatory-Framework-for-Faecal-Sludge-Management-FSM-Mega-City-Dhaka.pdf",
  },
  {
    image: "rule/Rule7.jpg",
    title: "Institutional And Regulatory Framework for Faecal Sludge Management (FSM)-City Corporation",
    pdf: "rule/Institutional-And-Regulatory-Framework-for-Faecal-Sludge-Management-FSM-City-Corporation.pdf",
  },
  {
    image: "rule/Rule8.jpg",
    title: "Institutional And Regulatory Framework for Faecal Sludge Management (FSM)-Rural Areas",
    pdf: "rule/Institutional-And-Regulatory-Framework-for-Faecal-Sludge-Management-(FSM)-Rural-Areas.pdf",
  },
  {
    image: "rule/Rule9.jpg",
    title: "National 3R Strategy for Waste Management",
    pdf: "rule/National 3R Strategy for Waste Management.pdf",
  },
  {
    image: "rule/Rule10.jpg",
    title: "Environment Conservation Rules 2024",
    pdf: "rule/Environment-Conservation-Rules-2023.pdf",
  },
  {
    image: "rule/Rule11.jpg",
    title: "Nationally Determined Contributions (NDCs) 2021",
    pdf: "rule/Nationally-Determined-Contributions-NDCs-2021.pdf",
  },
  {
    image: "rule/Rule12.jpg",
    title: "E-Waste Rules 2021",
    pdf: "rule/E-Waste-Rules-2021.pdf",
  },
  {
    image: "rule/Rule13.jpg",
    title: "National Strategy for Water Supply and Sanitation",
    pdf: "rule/National-Strategy-for-water-Supply-and-Sanitation_compressed.pdf",
  },
  {
    image: "rule/Rule14.png",
    title: "Notification on Single Use Plastic",
    pdf: "rule/single use plastic.pdf",
  },
];



const WasteManagementRules: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
          Waste Management Rules
        </h1>
      </div>

      {/* Rules Grid */}
      <main className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wasteManagementRules.map((rule, index) => (
            <div key={index} className="text-center cursor-pointer">
              
              <Link href={rule.pdf} target="_blank" rel="noopener noreferrer">
                <img
                  src={rule.image}
                  alt={rule.title}
                  className="w-[300px] h-[200px] object-cover object-top shadow-lg mx-auto"
                />
                <h2 className="text-[#00274D] font-medium mt-4 text-sm">
                  {rule.title}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WasteManagementRules;
