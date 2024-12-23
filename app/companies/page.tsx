"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MilestoneSlider from "../components/items/MilestoneSlider";
import Link from "next/link";

const Companies: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const years = ["2000", "2005", "2008", "2012"];

  return (
    <>
      <Header />
      <main className="bg-[#F5F2EB] min-h-screen flex flex-col items-center justify-evenly">
        <section className="max-w-screen-xl w-full px-5 py-30 flex flex-col lg:flex-row items-center justify-evenly gap-10 min-h-[60vh]">

          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHovered("wasteConcern")}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Logo and Title */}
            <img
              src="/logo/WC-logo.png"
              alt="Waste Concern"
              className={`w-45 h-auto object-contain transition-transform duration-500 ${
                hovered === "wasteConcern" ? "translate-y-[-70px]" : ""
              }`}
            />
            <h2
              className={`text-2xl font-bold text-[#1B5E20] mt-3 transition-transform duration-500 ${
                hovered === "wasteConcern" ? "translate-y-[-70px]" : ""
              }`}
            >
              WASTE CONCERN
            </h2>

            {/* Description and Button */}
            <div
              className={`absolute top-[120%] flex flex-col items-center text-center transition-all duration-500 ${
                hovered === "wasteConcern" ? "opacity-100 translate-y-[-100px]" : "opacity-0"
              }`}
            >
              <p className="text-sm text-gray-700 max-w-sm">
              Waste Concern was founded in 1995 with the motto “ Waste is a Resource”. Later Waste Concern Group was formed to achieve a common vision to contribute towards waste recycling, environmental improvement, renewable energy, poverty reduction through job creation, and sustainable development.Waste Concern Group is a Social Business Enterprise (SBE) comprising both “For Profit” and “Not-for Profit” enterprises.
              </p>
              <Link href="/wc-organogram">
              <button className="mt-3 px-4 py-2 bg-[#1B5E20] text-white rounded-lg shadow-md hover:bg-[#145316]">
                View Organogram
              </button>
              </Link>
            </div>
          </div>

          {/* Waste Concern Consultants */}
          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHovered("wasteConcernConsultants")}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Logo and Title */}
            <img
              src="/logo/WCONSTU.png"
              alt="Waste Concern Consultants"
              className={`w-45 h-auto object-contain transition-transform duration-500 ${
                hovered === "wasteConcernConsultants" ? "translate-y-[-70px]" : ""
              }`}
            />
            <h2
              className={`text-2xl font-bold text-[#1B5E20] mt-3 transition-transform duration-500 ${
                hovered === "wasteConcernConsultants" ? "translate-y-[-70px]" : ""
              }`}
            >
              WASTE CONCERN CONSULTANTS
            </h2>

            {/* Description and Buttons */}
            <div
              className={`absolute top-[120%] flex flex-col items-center text-center transition-all duration-500 ${
                hovered === "wasteConcernConsultants" ? "opacity-100 translate-y-[-100px]" : "opacity-0"
              }`}
            >
              <p className="text-sm text-gray-700 max-w-sm">
              Waste Concern Consultants is a leading consultancy firm based in Bangladesh, providing consulting services and project assistance since  2000. Waste Concern and Waste Concern Consultants are sister organizations with a common vision  to contribute to poverty reduction,waste recycling,environmental improvement and sustainable development.
              </p>
              <div className="flex flex-col gap-3 mt-3">
                <Link href="/wc-organogram">
                <button className="px-4 py-2 bg-[#1B5E20] text-white rounded-lg shadow-md hover:bg-[#d4f704] hover:text-black transition-all">
                  View Organogram
                </button>
                </Link>
                <Link href="/images/Brochure-final_WCC_2023.pdf" target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 bg-[#d4f704] text-black rounded-lg shadow-md hover:bg-[#b4d703]">
                  See Full Brochure
                </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone Section */}
        <section className="w-full flex items-center justify-center mt-20">
          <div className="w-full max-w-screen-lg flex items-center">
            <div className="flex-grow h-[2px] bg-white"></div>
            <h3 className="mx-6 text-3xl font-semibold text-[#1B5E20] uppercase tracking-wide">
              Milestone
            </h3>
            <div className="flex-grow h-[2px] bg-white"></div>
          </div>
        </section>

        <MilestoneSlider/>

        
      </main>
      <Footer />
    </>
  );
};

export default Companies;
