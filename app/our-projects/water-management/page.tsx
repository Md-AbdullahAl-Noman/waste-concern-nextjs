"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WaterManagement: React.FC = () => {
  return (
    <div className=" flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] px-8 py-6 pl-24">
        <h1 className="text-left text-3xl font-extrabold text-[#00274D] leading-tight">
        Integrated Urban Water Management at the Centre of Municipal Public Services in Bangladesh
        </h1>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-10 text-black">
        {/* Client and Description */}
        <section className="container mx-auto space-y-6 text-base leading-relaxed">
          <p className="font-extrabold text-sm">
            Client:&nbsp;
            <span className="font-bold">Client Bremen Overseas Research and Development Association (BORDA)
            </span>
          </p>

          <p className="font-bold text-sm">Description of work:</p>
          <p className="text-base mt-4 leading-6 text-sm">
          The project was conceived and formulated by BORDA with funding from the German Federal Ministry for Economic Cooperation and Development (BMZ). The focus of this project is on promoting integrated and decentralized water and sanitation solutions for small municipalities in the South Asian region. Eight municipalities from three countries in this region, namely India, Bangladesh, and Nepal, were selected for interventions under this project. Therefore, the goal of the project is to contribute to improving the living conditions of people in small towns and reduce the health and environmental risks associated with inadequate water supply and sanitation in this region.
          </p>
          <p className="text-base mt-4 leading-6 text-sm">However, the meso/micro level project objective is to enable the provision of improved municipal water and sanitation services for the disadvantaged population of small towns. Therefore, the project’s approach is to focus on strengthening municipal capacity for planning and management of integrated and decentralized solutions for water and sanitation challenges faced by small municipalities. Two municipalities were selected in Bangladesh for this project, namely Savar Municipality and Kushtia Municipality. A number of activities were planned and executed under this project, such as planning, design and implementation of various interventions, capacity building, and information dissemination or public awareness raising. Some demonstrative interventions were planned in selected municipalities. A few activities under the project are shown below:
          </p>
          <ul className="list-disc ml-8 text-sm space-y-2 ">
            <li>Design and Implementation Support for Shared Toilets in the Bede Para Slum of Savar Municipality</li>
            <li>Improvement of Public Toilet in Savar Municipality</li>
            <li>Faecal Sludge Transfer System for Bede Para Slum in Savar Municipality</li>
            <li>Design and implementation support for the construction of compost plant and pilot DEWATS in Savar Cantonment Board (SCB)</li>
            <li>Renovation of Three Public Toilets at Kushtia Municipality.</li>
            <li>Exposure visits and capacity-building training on municipal waste and medical waste management for municipal officials of Savar and Kushtia Municipality.</li>
            <li>Promotion of Source Segregation of waste in Kushtia and Savar Municipalty.</li>
          </ul>
        </section>

        {/* Images Section */}
        <section className="mt-12 flex flex-col items-center gap-4">
          <img
            src="/our-projects/P11.jpg"
            alt="p11"
            className="w-full max-w-4xl shadow-md mb-6"
          />
          <img
            src="/our-projects/P12.jpg"
            alt="p12"
            className="w-full max-w-4xl  shadow-md"
          />
          <img
            src="/our-projects/P13.jpg"
            alt="p13"
            className="w-full max-w-4xl  shadow-md"
          />
          <img
            src="/our-projects/P14.jpg"
            alt="p14"
            className="w-50 max-w-4xl shadow-md"
          />
          <img
            src="/our-projects/P15.jpg"
            alt="p15"
            className="w-50 max-w-4xl  shadow-md"
          />
        </section>


        <div className="container mx-auto px-6 mt-8 text-sm font-extrabold">
        <p className="font-extrabold text-sm  mt-4">
            Location:&nbsp;
            <span className="font-medium">
            Savar and Kusthia Municipality Bangladesh
            </span>
          </p>

          <p className="font-extrabold text-sm">
            Period:&nbsp;
            <span className="font-medium">
            January 2021 to December 2023
            </span>
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WaterManagement;
