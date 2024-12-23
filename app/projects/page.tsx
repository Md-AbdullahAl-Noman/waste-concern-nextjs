"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const projectsData = [
  {
    year: "2024",
    projects: [
      { title: "Integrated Urban Water Management at the Centre of Municipal Public Services", link: "/our-projects/2024P1" },
      { title: "Guidelines for Extended Producer Responsibility (EPR) Implementation for Plastics in Bangladesh’ under the project entitled “Integrated Approach Toward Sustainable Plastics Use and Marine Litter Prevention", link: "/our-projects/2024P2" },
    ],
  },
  {
    year: "2023",
    projects: [
      { title: "TA-9590 SRI: Capacity Building for Secondary Towns and Strategic Cities", link: "/our-projects/2024P1" },
      { title: "Sustainable Waste Management and Improvement of Drainage System of Savar Cantonment and Savar DOHS", link: "/our-projects/2024P2" },
      { title: "Methane Emission from Matuail and Amin Bazar Landfill Site and Options for Mitigation", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2022",
    projects: [
      { title: "TA 9347-REG: Pacific Urban Development Investment Planning and Capacity Development Facility", link: "/our-projects/2024P1" },
      { title: "Study of Feasibility and Preparation of Designs for a Pilot Fecal Sludge Management System in Chattogram City", link: "/our-projects/2024P2" },
      { title: "Technical Assistance Project on Integrated Solid Waste Management Improvement Project (ISWMIP)", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2021",
    projects: [
      { title: "TA 9781 REG: Developing South Asian Livable Cities Facility", link: "/our-projects/2024P1" },
      { title: "Coastal Town Environmental Infrastructure Project", link: "/our-projects/2024P2" },
      { title: "Integrated Urban Water Management at the Centre of Municipal Public Services in Bangladesh", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2020",
    projects: [
      { title: "Assessment of Solid Waste Management Opportunities in Bangladesh", link: "/our-projects/2024P1" },
      { title: "Promotion of 3R (Reduce, Reuse & Recycle) Principles in the Solid Waste Management Sector in Bangladesh", link: "/our-projects/2024P2" },
      { title: "Rapid Assessment of Plastic Pollution in Rivers and Canals around Dhaka", link: "/our-projects/2024P1" },
      { title: "Design of Integrated Landfill and Resource Recovery Facility for Khulna City Corporation, Bangladesh", link: "/our-projects/2024P1" },
      { title: "Strengthening Medical Waste Management in the Greater Dhaka Area", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2019",
    projects: [
      { title: "Consulting Services on Non-network Sanitation in Pagla Catchment under the Dhaka Sanitation Improvement Project (DSIP)", link: "/our-projects/2024P1" },
      { title: "Design of Integrated Waste Management Facilities in Cambodia and Lao PDR", link: "/our-projects/2024P2" },
      { title: "Mapping and Screening Study of Marine Littering Projects in Bangladesh", link: "/our-projects/2024P1" },
      { title: "Baseline Survey for the Material Flow Analysis for Waste Plastics and Hotspots Assessment for Marine Plastic Debris in Bangladesh", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2018",
    projects: [
      { title: "Pilot Project to Create a Scalable Model to Responsibly Manage Solid Waste and Expand Recycling in Argentina and Indonesia", link: "/our-projects/2024P1" },
      { title: "Preparation for Environmentally Sound Management of Mercury Containing Lighting Sources with a Life-Cycle Approach", link: "/our-projects/2024P2" },
      { title: "TA-9546 BAN: Emergency Assistance Project - DPHE- Component", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2017",
    projects: [
      { title: "Consulting Service to Improve Slaughterhouse Waste Management Using Biogas Technology at Gazipur City Corporation", link: "/our-projects/2024P1" },
      { title: "Consultancy Services for Landscape and Renovation Work for Savar Residential Campus of BRAC University (sanitation, wastewater, rain water harvesting and solid waste component).", link: "/our-projects/2024P2" },
    ],
  },
  {
    year: "2016",
    projects: [
      { title: "Consultancy Services for Sanitation and Solid Waste Management under the DDS Consultant, Coastal Towns Environmental Infrastructure Project (CTEIP)", link: "/our-projects/2024P1" },
      { title: "Pro-poor and Sustainable Solid Waste Management in Secondary Cities and Small Towns", link: "/our-projects/2024P2" },
      { title: "TA-8913 REG: Promoting Urban Climate Change Resilience in Selected Asian Cities – Developing Integrated Urban Development Plans in Selected DMC Cities Incorporating Urban Climate Change Resilience Principles (ADB TA-8913 REG)", link: "/our-projects/2024P1" },
      { title: "Consultancy Services for Disposal of Empty Pesticide Containers", link: "/our-projects/2024P2" },
      { title: "3R (Reduce, Reuse and Recycle) Pilot Initiative to Reduce the Impact of Greenhouse Gas (GHG) in Dhaka and Chittagong Cities (Phase 1)", link: "/our-projects/2024P2" },
    ],
  },
  {
    year: "2015",
    projects: [
      { title: "Study on E-Waste in Bangladesh", link: "/our-projects/2024P1" },
      { title: "Prefeasibility Study of Power Generation from Sewerage of DWASA Through Biogas Generation Project", link: "/our-projects/2024P2" },
      { title: "Survey on Soiled Packaging Poly Waste (PPW) and Existing Management Practice for Recycling Project", link: "/our-projects/2024P1" },
      { title: "Diagnostic of Biogas Efficiency in Camps and Guidance for Comprehensive and Environmentally Safe Waste and Faecal Sludge Management", link: "/our-projects/2024P2" },
      { title: "Preparation of Sanitation and Drainage Improvement Strategy and Master Plan Project for the City of Chittagong", link: "/our-projects/2024P2" },
      { title: "Third Urban Governance and Infrastructure Improvement Project (ADB TA-8339 PPTA)", link: "/our-projects/2024P2" },
      { title: "Consultancy Services for Solid Waste Management under MDS Consultant of City Region Development Project", link: "/our-projects/2024P2" },
      { title: "Consultancy Services for Solid Waste & Faecal Sludge Management under the MDS Consultant, CRDP Project", link: "/our-projects/2024P2" },
    ],
  },
  {
    year: "2013",
    projects: [
      { title: "Coastal Towns Infrastructure Improvement Project (ADB TA-8128 BAN)", link: "/our-projects/2024P1" },
      { title: "Showcasing Positive Economic and Environmental Impact of Improved Design of Pump", link: "/our-projects/2024P2" },
      { title: "Preparation of Business Plan for Production of Refuse Derived Fuel (RDF) from Municipal Solid Waste", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2012",
    projects: [
      { title: "Municipal Services Project, Phase II", link: "/our-projects/2024P1" },
      { title: "Pro-poor and Sustainable Solid Waste Management in Secondary Cities and Small Towns Project", link: "/our-projects/2024P2" },
      { title: "Carbon Foot Print Analysis and GHG Mitigation Strategy Development for IDLC", link: "/our-projects/2024P1" },
      { title: "Assess the Economic and Environmental Impact of Irrigation by Using More Efficient Pumps with Better Installation Technique.", link: "/our-projects/2024P1" },
      { title: "Bangladesh Green Development Programme", link: "/our-projects/2024P1" },
      { title: "Promotion of Green Jobs in Bangladesh", link: "/our-projects/2024P1" },
      { title: "Value for Waste", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2011",
    projects: [
      { title: "Programmatic CDM Project on Solid Waste Management for 64 Districts of Bangladesh", link: "/our-projects/2024P2" },
      { title: "Feasibility Study for Health Care Waste Management Project", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2010",
    projects: [
      { title: "Desk Study for Organic Waste Management Project in South Asia", link: "/our-projects/2024P2" },
      { title: "Development Partnership Program for South Asia: Best Practices for MSWM in South Asia- A Knowledge Product", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2009",
    projects: [
      { title: "19 Towns Solid Waste Management Project", link: "/our-projects/2024P1" },
      { title: "Pro-poor and Sustainable Solid Waste Management in Secondary Cities and Small Towns", link: "/our-projects/2024P2" },
      { title: "Assessment of Green Jobs in Bangladesh", link: "/our-projects/2024P1" },
      { title: "Pro-poor and Sustainable Solid Waste Management in Secondary Cities and Small Towns", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2008",
    projects: [
      { title: "Environmental Management Plan (EMP) for Industries", link: "/our-projects/2024P1" },
      { title: "Capacity Development for CDM Project", link: "/our-projects/2024P2" },
      { title: "Environmental Plan for Tabani Beverage Company Limited", link: "/our-projects/2024P1" },
      { title: "3R Modules for Waste Management and Development of National 3R Strategy for Waste Management", link: "/our-projects/2024P1" },
      { title: "Waste Recycling in American International School (AISD), in Dhaka", link: "/our-projects/2024P2" },
      { title: "Inventory of Green Jobs in Selected Sectors", link: "/our-projects/2024P2" },
      { title: "Preparation National 3 R Strategy for Waste Management in Bangladesh", link: "/our-projects/2024P2" },
    ],
  },
  {
    year: "2007",
    projects: [
      { title: "Prepare Interactive User's Manual on Decentralized Composting and Paper on Financing, Up-scaling & Replication of Community-based Solid Waste Management", link: "/our-projects/2024P1" },
      { title: "Inventory of Hazardous Waste in Bangladesh", link: "/our-projects/2024P2" },
      { title: "Development of an Interactive User's Manual on Community-Based Solid Waste Management", link: "/our-projects/2024P1" },
      { title: "Technical Support to the Staffs of Better Business to Improve Physical & Environmental Condition of Small and Medium Size Enterprises (SMEs)", link: "/our-projects/2024P1" },
      { title: "Initial Environmental Examination (IEE) Report for CDM Based Compost Project located at Roopganj, Bulta, Dhaka", link: "/our-projects/2024P2" },
      { title: "Managing Hazardous Waste", link: "/our-projects/2024P2" },
      { title: "Promotion of Organic Cotton in Bangladesh", link: "/our-projects/2024P2" },
      { title: "Technical Advisory Services for the Implementation of the Community based Composting Project in Bangladesh", link: "/our-projects/2024P2" },
    ],
  },
  {
    year: "2006",
    projects: [
      { title: "Promoting Sustainable & Efficient Waste Recycling Project", link: "/our-projects/2024P1" },
      { title: "Intervention on Promoting Sustainable and Efficient Waste Recycling", link: "/our-projects/2024P2" },
      { title: "Preparation of Environmental Plan for CAD Production Ltd.", link: "/our-projects/2024P1" },
      { title: "Feasibility Study on Scaling-up of Compost Production and Distribution in Rangpur and Dinajpur District of Bangladesh", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2005",
    projects: [
      { title: "Adaptation of Model for Decentralized Solid Waste Management and Composting for Qui Nhon City, Vietnam, Matale City, Sri Lanka", link: "/our-projects/2024P1" },
      { title: "Replication of Barrel Type Composting System in Slums Located in Dhaka City", link: "/our-projects/2024P2" },
      { title: "Feasibility Study for Employment Generation Activity Through Solid Waste Collection, Composting and Recycling", link: "/our-projects/2024P1" },
      { title: "Capacity Building for Composting Activities under Special Programme for Food Security Project in Chak Singa, Bagha, Rajshahi", link: "/our-projects/2024P1" },
      { title: "Study on Composition of Plastic Waste and Market Assessment of the Plastic Recycling Sector in Dhaka City", link: "/our-projects/2024P2" },
    ],
  },
  {
    year: "2004",
    projects: [
      { title: "Preparation of Action Plan for Sanitation and Solid Waste Management for 8 Secondary Towns under STIFPP-II Project  ", link: "/our-projects/2024P1" },
      { title: "Assist Qui Nhon City of Vietnam and Matale city of Sri Lanka in adapting the Waste Concern model of solid waste management including CDM", link: "/our-projects/2024P2" },
      { title: "Implementation of Two CDM projects (landfill gas recovery with power generation and composting of organic waste) in Dhaka, Bangladesh", link: "/our-projects/2024P1" },
      { title: "Preparation of Case Study on the Experience of Waste Concern with Community Based Decentralized Solid Waste Management in Dhaka, Bangladesh.", link: "/our-projects/2024P1" },
      { title: "Intervention to Improve Existing Composting Technology of a Local Compost Producer “Annapurna Agro Service” Based at Domar, Nilphamari, Bangladesh", link: "/our-projects/2024P2" },
      { title: "Preparation of Sanitation Master Plan for Eight Towns in Bangladesh", link: "/our-projects/2024P2" },
      { title: "Training Manual on Environment Friendly Poultry Waste Management for Small, Medium Sized Poultry Farm Owners.", link: "/our-projects/2024P2" },
    ],
  },
  {
    year: "2003",
    projects: [
      { title: "Promote and Support ISO 14001 (EMS) Among Business Sector in Bangladesh ", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2002",
    projects: [
      { title: "Develop a comprehensive Gender Strategy and Action Plan for Bangladesh ", link: "/our-projects/2024P1" },
      { title: "Assessing the Feasibility of Composting of Poultry Manure", link: "/our-projects/2024P2" },
      { title: "Rural Waste Recycling and Industrial Pollution Mitigation under Eco-villages Ecological Village Development Component of Tangail Infrastructure Development Project (TIDP) Phase-III", link: "/our-projects/2024P1" },
      { title: "Pilot Projects on Solid Waste Management of Environmental Sanitation, Hygiene and Water Supply in Urban Slums and Fringes", link: "/our-projects/2024P1" },
      { title: "Capacity Building Training for the elected Municipal Officials of Punjab Province of Pakistan at Lahore on Solid Waste Management with Emphasis on Recycling and Composting.", link: "/our-projects/2024P2" },
      { title: "Enriched Compost Demonstration on Different Crops Production in Eco-villages of Tangail under Ecological Village Development Component of Tangail Infrastructure Development Project (TIDP) Phase-III", link: "/our-projects/2024P2" },
      { title: "Capacity Development for CDM in Bangladesh under Sustainable Environment Management Program", link: "/our-projects/2024P2" },
      { title: "Pilot Projects on Solid Waste Management of Environmental Sanitation, Hygiene and Water Supply in Urban Slums and Fringes", link: "/our-projects/2024P2" },
    ],
  },
  {
    year: "2001",
    projects: [
      { title: "Composting Techniques in Khulna City", link: "/our-projects/2024P1" },
      { title: "5926-REG/ Public-Private-Community Partnership in Urban Services for the Poor", link: "/our-projects/2024P2" },
      { title: "Conceptual Design and Operationalization of WasteNet, Bangladesh", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "2000",
    projects: [
      { title: "Resource Recovery from Solid Waste in Khulna City of Bangladesh", link: "/our-projects/2024P1" },
      { title: "Low Cost Pilot Solid Waste Management Program in Two Slums of Dhaka city.", link: "/our-projects/2024P2" },
      { title: "Community Based Solid Waste Management in Bangladesh", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "1999",
    projects: [
      { title: "Identification of Potential Sites for Community Based Composting in Dhaka", link: "/our-projects/2024P2" },
      { title: "International Workshop on Community Based Solid Waste Management.", link: "/our-projects/2024P1" },
    ],
  },
  {
    year: "1998",
    projects: [
      { title: "Barrel Type Composting in Two Slums of Dhaka city", link: "/our-projects/2024P1" },
      { title: "Dhaka Community-Based Urban Solid Waste Management under Sustainable Environment Management Program (SEMP)", link: "/our-projects/2024P2" },
    ],
  },
  {
    year: "1997",
    projects: [
      { title: "Study of Potential of Waste Recycling, Composting in the city of Jessore, Bangladesh.", link: "/our-projects/2024P1" },
    ],
  },

];

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EB] flex flex-col">
      <Header />
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">All Projects</h1>
      </div>
      <div className="flex-grow container mx-auto px-6 py-10">
        {projectsData.map((yearData) => (
          <div key={yearData.year} className="mb-10">
            <h2 className="text-xl font-semibold text-[#00274D] mb-4">{yearData.year}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {yearData.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <a
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-gray-800 font-medium text-sm "
                  >
                    {project.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
