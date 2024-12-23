"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const EPRImplementation: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      <div className="bg-[#D4CFC4] px-8 py-6 pl-24">
        <h1 className="text-left text-3xl font-extrabold text-[#00274D] leading-tight">
        Guidelines for Extended Producer Responsibility (EPR) Implementation for Plastics in Bangladesh’ under the project entitled “Integrated Approach Toward Sustainable Plastics Use and Marine Litter Prevention
        </h1>
      </div>

      <main className="container mx-auto px-6 py-10 text-black">
        {/* Client and Description */}
        <section className="space-y-6 text-base leading-relaxed">
          <p className="font-extrabold text-sm">
            Client:&nbsp;
            <span className="font-bold">Department of Environment (DoE)</span>
          </p>

          <p className="font-bold text-sm">Description of work:</p>
          <p className="text-sm leading-6">
            Under this project, the following activities are being performed:
          </p>
          <ol className="list-decimal ml-6 text-sm space-y-2">
            <li>
              Preparation of the “Extended Producer Responsibility (EPR)” guidelines for Bangladesh
            </li>
            <li>Preparation of necessary policy draft on sustainable plastics management.</li>
            <li>
              Analyze national and international legislation and policies related to environment, sustainability, quality,
              etc.
            </li>
            <li>
              Organizing Seminars, Training Activities recommendations, Stakeholders consultations, Coordination
              Meeting, Workshops.
            </li>
            <li>
              Preparation of Minutes, Report and Proceedings and integrating public opinion into the policy Document.
            </li>
            <li>
              Generate Monthly, half-yearly and yearly report on Policy Document.
            </li>
            <li>Submit report/s as may be required by DOE and UNIDO.</li>
            <li>
              Support preparation of end of proceedings report for NPD after every claim incident. Such report(s) shall
              be drafted professionally and would facilitate any other reviews. Provide support in litigations.
            </li>
            <li>
              The Consultant will be responsible to gather and analyze all relevant policies, laws, and regulations and
              provide inputs to the international experts to develop a policy for sustainable plastics use and marine
              litter prevention.
            </li>
            <li>
            To coordinate with the relevant policy makers/workers/activists/NGOs/consultants for their participation in training, workshops, seminars, campaign and other project related activities 
            </li>
          </ol>

          <div className="text-sm font-extrabold mt-6">
            <p>
              Location:&nbsp;
              <span className="font-medium">Dhaka, Bangladesh</span>
            </p>
            <p>
              Period:&nbsp;
              <span className="font-medium">January, 2024 - December, 2024</span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EPRImplementation;
