"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Consultancy: React.FC = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (buttonRef.current) {
      const buttonPosition = buttonRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      // Checking if the button has entered the viewport
      setIsButtonVisible(buttonPosition <= viewportHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Consultancy</h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-5 py-10">
        <p className="text-gray-800 text-sm mb-4 font-semibold">
          Waste Concern Consultants (WCC) is a leading consultancy firm based in Bangladesh, providing consulting services and project assistance since 2000.
          WCC is a technical arm of Waste Concern. WCC’s vision is to contribute to poverty reduction, environmental improvement and sustainable development through professional knowledge sharing and provision of advisory services in the low and middle income countries.
        </p>
        <p className="text-gray-800 text-sm mb-4 font-semibold">
          While providing consultancy services to its clients, WCC adopts multi-disciplinary and participatory approaches, so that most appropriate technological solutions consistent with the prevailing social, economic and institutional contexts are applicable.
          Moreover, while planning and designing solutions or technical advisory services, we take into account the perceptions, needs and preferences of the users and their long term financial capabilities.
          WCC provides consultancy services, project assistance and support for institutional development, capacity building and innovation in the fields of:
        </p>
        <ul className="list-disc list-inside text-gray-800 text-sm space-y-1 font-semibold pl-5">
          <li>Solid Waste Management & Resource Recovery</li>
          <li>Sanitation & Faecal Sludge Management and Reuse</li>
          <li>Waste Water Treatment</li>
          <li>Municipal Services Planning</li>
          <li>Master Plan, Strategy Development & Action Plan for Municipal Infrastructure</li>
          <li>Climate Change & Clean Development Mechanism</li>
          <li>Policy Formulation related to Waste, Sanitation, and Climate Change</li>
          <li>Clinical and Hazardous Waste Management</li>
          <li>Environmental Impact Assessment</li>
          <li>Energy and Waste Audit</li>
          <li>Industrial Pollution Control</li>
          <li>Environmental Management System (ISO-14001)</li>
          <li>Eco-friendly Agriculture and Organic Farming</li>
          <li>Laboratory Analysis of Environmental Parameters</li>
          <li>Environmental and Socio-economic Studies</li>
          <li>Business Plan Development for Environmental Projects</li>
        </ul>

        <p className="text-gray-800 text-sm mt-4 font-semibold">
           WCC has established a comprehensive knowledge base to support and provide consultancy services in the aforementioned fields. 
           WCC aims at a long-term cooperation with its partners/clients to build local capacity and we also strive for sustainable utilization of natural resources.
        </p>

        <div
          ref={buttonRef} 
          className={`mt-10 transition-transform duration-500 ease-in-out ${
            isButtonVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a
            target="_blank"
            href="/our-projects/project references.pdf"
            className="inline-block bg-[#00274D] text-white px-4 py-2 text-sm font-medium shadow-lg hover:bg-lime-600 transition rounded-r-full rounded-l-none"
          >
            View All Projects ➞
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Consultancy;
