"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Clients = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      
      <div className="bg-[#D4CFC4] pl-32 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Clients and Partners</h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-10 py-8 text-black ">

        {/* List of clients */}
        <ul className="list-disc list-inside text-gray-800 text-sm space-y-1 font-semibold pl-5">
          <li>Aqua Consultants and Associates Ltd</li>
          <li>Asian Development Bank (ADB)</li>
          <li>Asian Development Bank Institute (ADBI)</li>
          <li>Asian Infrastructure Investment Bank (AIIB)</li>
          <li>Bangladesh Agriculture Research Institute (BARI)</li>
          <li>Bangladesh Environmental Lawyers Association (BELA)</li>
          <li>Bangladesh University of Engineering and Technology (BUET)</li>
          <li>Bengal Institute for Architecture, Landscape and Settlements</li>
          <li>BORDA, Germany</li>
          <li>British High Commission, Dhaka</li>
          <li>Canadian High Commission, Dhaka</li>
          <li>FCanadian International Development Agency (CIDA)</li>
          <li>Chattogram WASA (CWASA)</li>
          <li>Department of Environment (DOE)</li>
          <li> Department of Public Health Engineering (DPHE) </li>
          <li>Dhaka WASA (DWASA)</li>
          <li>Foreign, Commonwealth and Development Office (FCDO)</li>
          <li>GIZ (German Corporation for International Cooperation GmbH)</li>
          <li>Institute of Water Modeling (IWM)</li>
          <li>International Training Network (ITN) - Bangladesh (Center for Water Supply and Waste Management BUET, Dhaka, Bangladesh) </li>
          <li>Kushtia Municipality</li>
          <li>Local Government Engineering Department (LGED)</li>
          <li>Mckinsey.org</li>
          <li>Ministry of Environment, Forest and Climate Change of Government of Bangladesh (MoEFCC)</li>
          <li>Narayanganj City Corporation</li>
          <li>Norwegian Embassy, Dhaka</li>
          <li>OXFAM, UK</li>
          <li>Resource Planning and Management Consultants (Pvt.)</li>
          <li>Royal Danish Embassy, Dhaka</li>
          <li>Royal Haskoning</li>
          <li>Royal Netherlands Embassy, Dhaka</li>
          <li>Royal Norwegian Embassy, Dhaka</li>
          <li>RUDO-South Asia/USAID</li>
          <li>Savar Municipality</li>
          <li>Soil Science Department, Dhaka University</li>
          <li>Sustainable Development Networking Programme (SDNP) Bangladesh</li>
          <li>Swiss Development Agency for Cooperation (SDC)</li>
          <li>Swiss Federal Institute of Environmental Engineering (SANDEC)</li>
          <li>Swisscontact-Katalyst</li>
          <li>The World Bank</li>
          <li>UN-ESCAP</li>
          <li>UNDP (United Nations Development Program)</li>
          <li>UNICEF</li>
          <li>UNIDO</li>
          <li>USAID</li>
          <li>Water and Sanitation Program-South Asia, The World Bank</li>
          <li>Water Engineering Development Center (WEDC), Loughborough University, United Kingdom</li>
          <li>World Health Organization (WHO)</li>
          <li>World Wide Recycling, Netherlands</li>
          </ul>
        

      </div>

      <Footer />
    </div>
  );
};

export default Clients;
