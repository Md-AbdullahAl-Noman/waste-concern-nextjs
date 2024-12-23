"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WhoWeAre: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EB] flex flex-col">
      <Header />

      {/* Page Title */}
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Who We Are</h1>
      </div>

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-6 py-10 text-black-700 text-sm leading-relaxed space-y-6">
            <p>
              <strong className="font-bold">Waste Concern</strong>, established in 1995, is a research and development organization. Since its inception, Waste Concern has been involved in the experiment, piloting, and disseminating appropriate technologies for the waste management, wastewater, and sanitation sectors. Moreover,
               Waste Concern has also assisted the Government in developing appropriate strategies, guidelines, and rules for the waste management sector and climate change mitigation projects. Over the last twenty-nine years, Waste Concern has developed and disseminated innovative technologies suitable for Bangladesh and similar economies in the Asia Pacific region. 
               Through the research and development services provided by Waste Concern, governments, municipalities, communities, and private enterprises have made financial gains and contributed towards reducing environmental pollution, including greenhouse gas emissions and their associated health and occupational risks.
            </p>
            <p>
              <strong className="font-bold">Waste Concern Consultants (WCC)</strong> is a leading consultancy firm based in Bangladesh, providing consulting services and project assistance since 2000. WCC is a technical arm of Waste Concern. WCC's vision is to contribute to environmental improvement, sustainable development, and poverty reduction 
              through professional knowledge-sharing and consultancy services in low and middle-income countries.
            </p>
            <p>
              WCC provides specialized consultancy services, project assistance, institutional development support, and capacity building in waste management, wastewater, sanitation, and climate change mitigation sectors.
            </p>
            <p>
              Over the last twenty-four years, while providing consultancy services to its clients in 13 countries, WCC has adopted multi-disciplinary and participatory approaches so that the most appropriate technological solutions are applicable and consistent with the prevailing social, environmental, economic, and institutional contexts. Moreover, while planning and designing engineering solutions or technical advisory services, we consider the clients' and beneficiaries' perceptions, needs, preferences, and long-term financial capabilities.
            </p>
            <p>
              WCC has established a comprehensive knowledge base to support and provide consultancy services in waste management, sanitation, climate change mitigation, and related sectors. WCC aims to have long-term cooperation with its partners/clients to build local capacity, and we also strive for sustainable utilization of economic and natural resources.
            </p>
      </div>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
