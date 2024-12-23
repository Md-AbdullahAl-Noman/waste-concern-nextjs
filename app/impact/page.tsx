"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Impact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Impact</h1>
      </div>

      <div className="container mx-auto px-10 py-8 text-black ">
        <p className="text-sm mb-6">
          Waste Concern also extends itself in the policy-making arena, steering
          environmentally-appropriate governmental regulations, both existing
          and new. To date, we have been influential in the development of 29
          governmental policies:
        </p>

        <ol className="list-decimal list-inside text-sm leading-relaxed mb-6">
          <li>Urban Management Policy Statement 1998</li>
          <li>National Agriculture Policy 1999</li>
          <li>Dhaka Declaration on Waste Management by SAARC 2004</li>
          <li>Dhaka Environment Management Plan 2005</li>
          <li>Poverty Reduction Strategy Paper (PRSP) 2005</li>
          <li>National Sanitation Strategy 2005</li>
          <li>Pro-Poor Strategy for Water and Sanitation Sector 2005</li>
          <li>Private Sector Housing Development Guideline 2005</li>
          <li>National Industrial Policy 2005</li>
          <li>National CDM Strategy 2005</li>
          <li>Draft Plastic Waste Recycling Strategy 2005</li>
          <li>Fertilizer Act 2006</li>
          <li>Lead Acid Battery Recycling and Management Rules 2006</li>
          <li>Biomedical Waste Management Rules 2008</li>
          <li>
            Circular to Promote Compost by the Ministry of Agriculture (MoA),
            2008
          </li>
          <li>Draft Hazardous Waste Management Policy of Bangladesh 2009</li>
          <li>National 3R Strategy 2010</li>
          <li>National Organic Agriculture Policy 2016</li>
          <li>Solid Waste Management Rules 2021</li>
          <li>
            Multisectoral Action Plan for Sustainable Plastic Management in
            Bangladesh
          </li>
        </ol>

        <p className="text-sm mb-6">
          Apart from the above, Waste Concern also spearheaded efforts at influencing the government to develop national policies and guidelines in the following issues:
        </p>

        <ol className="list-decimal list-inside text-sm leading-relaxed">
          <li>Established Designated National Authority for CDM projects</li>
          <li>Developed CDM Project Approval Process for Government</li>
          <li>Environment Management System (EMS) for Industries</li>
          <li>National Economic Review included CDM as a mode of investment</li>
          <li>Involved in the process of developing the Strategy for Sustainable Development</li>
          <li>Created example of Public Private Community Partnership (PPCP) as approach for Urban Services</li>
          <li>Developed New Methodology for Composting as CDM Project</li>
          <li>Comprehensively promoted the concept “Waste as Resource” throughout the country</li>
          <li>Developed guideline for RFP and contract document for engagement of private sector in the operation and maintenance of Integrated Resource Recovery Centers (IRRCs).</li>
        </ol>
      </div>

      <Footer />
    </div>
  );
};

export default Impact;
