"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const projectsInBangladesh = [
  {title:"Integrated Urban Water Management at the Centre of Municipal Public Services",},
  {title:"Prepare Interactive User’s Manual on Decentralized Composting and Paper on Financing, Up-scaling & Replication of Community-based Solid Waste Management",},
  {title:"Study on E-Waste in Bangladesh",},
  {title:"Preparation of Action Plan for Sanitation and Solid Waste Management for 8 Secondary Towns under STIFPP-II Project  ",},
  {title:"Environmental Management Plan (EMP) for Industries",},
  {title:"Programmatic CDM Project on Solid Waste Management for 64 Districts of Bangladesh",},
  {title:"Assessment of Solid Waste Management Opportunities in Bangladesh",},
  {title:"Barrel Type Composting in Two Slums of Dhaka city",},
  {title:"Identification of Potential Sites for Community Based Composting in Dhaka",},
  {title:"International Workshop on Community Based Solid Waste Management.",},
  {title:"Resource Recovery from Solid Waste in Khulna City of Bangladesh",},
  {title:"Composting Techniques in Khulna City",},
  {title:"Community Based Solid Waste Management in Bangladesh",},
  {title:"5926-REG/ Public-Private-Community Partnership in Urban Services for the Poor",},
  {title:"Conceptual Design and Operationalization of WasteNet, Bangladesh",},
  {title:"Develop a comprehensive Gender Strategy and Action Plan for Bangladesh",},
  {title:"Assessing the Feasibility of Composting of Poultry Manure",},
  {title:"Rural Waste Recycling and Industrial Pollution Mitigation under Eco-villages Ecological Village Development Component of Tangail Infrastructure Development Project (TIDP) Phase-III",},
  {title:"Pilot Projects on Solid Waste Management of Environmental Sanitation, Hygiene and Water Supply in Urban Slums and Fringes",},
  {title:"Adaptation of Model for Decentralized Solid Waste Management and Composting for Qui Nhon City, Vietnam, Matale City, Sri Lanka",},
  {title:"Promoting Sustainable & Efficient Waste Recycling Project",},
  {title:"Inventory of Hazardous Waste in Bangladesh",},
  {title:"Development of an Interactive User’s Manual on Community-Based Solid Waste Management",},
  {title:"Enriched Compost Demonstration on Different Crops Production in Eco-villages of Tangail under Ecological Village Development Component of Tangail Infrastructure Development Project (TIDP) Phase-III ",},
  {title:"Promote and Support ISO 14001 (EMS) Among Business Sector in Bangladesh ",},
  {title:"Implementation of Two CDM projects (landfill gas recovery with power generation and composting of organic waste) in Dhaka, Bangladesh ",},
  {title:"Preparation of Case Study on the Experience of Waste Concern with Community Based Decentralized Solid Waste Management in Dhaka, Bangladesh.",},
  {title:"Intervention to Improve Existing Composting Technology of a Local Compost Producer “Annapurna Agro Service” Based at Domar, Nilphamari, Bangladesh ",},
  {title:"Preparation of Sanitation Master Plan for Eight Towns in Bangladesh ",},
  {title:"Training Manual on Environment Friendly Poultry Waste Management for Small, Medium Sized Poultry Farm Owners. ",},
  {title:"Replication of Barrel Type Composting System in Slums Located in Dhaka City",},
  {title:"Feasibility Study for Employment Generation Activity Through Solid Waste Collection, Composting and Recycling ",},
  {title:"Capacity Building for Composting Activities under Special Programme for Food Security Project in Chak Singa, Bagha, Rajshahi ",},
  {title:"Study on Composition of Plastic Waste and Market Assessment of the Plastic Recycling Sector in Dhaka City",},
  {title:"Intervention on Promoting Sustainable and Efficient Waste Recycling ",},
  {title:"Preparation of Environmental Plan for CAD Production Ltd. ",},
  {title:"Feasibility Study on Scaling-up of Compost Production and Distribution in Rangpur and Dinajpur District of Bangladesh ",},
  {title:"Technical Support to the Staffs of Better Business to Improve Physical & Environmental Condition of Small and Medium Size Enterprises (SMEs) ",},
  {title:"Initial Environmental Examination (IEE) Report for CDM Based Compost Project located at Roopganj, Bulta, Dhaka",},
  {title:"Environmental Management Plan (EMP) for Industries ",},
  {title:"Capacity Development for CDM Project ",},
  {title:"Managing Hazardous Waste ",},
  {title:"Promotion of Organic Cotton in Bangladesh ",},
  {title:"Technical Advisory Services for the Implementation of the Community based Composting Project in Bangladesh ",},
  {title:"Environmental Plan for Tabani Beverage Company Limited ",},
  {title:"3R Modules for Waste Management and Development of National 3R Strategy for Waste Management ",},
  {title:"Waste Recycling in American International School (AISD), in Dhaka ",},
  {title:"Desk Study for Organic Waste Management Project in South Asia ",},
  {title:"19 Towns Solid Waste Management Project ",},
  {title:"Municipal Services Project, Phase II ",},
  {title:"Coastal Towns Infrastructure Improvement Project (ADB TA-8128 BAN) ",},
  {title:"Pro-poor and Sustainable Solid Waste Management in Secondary Cities and Small Towns Project ",},
  {title:"Prefeasibility Study of Power Generation from Sewerage of DWASA Through Biogas Generation Project ",},
  {title:"Prefeasibility Study of Power Generation from Sewerage of DWASA Through Biogas Generation Project ",},
  {title:"Preparation National 3 R Strategy for Waste Management in Bangladesh ",},
  {title:"Assessment of Green Jobs in Bangladesh ",},
  {title:"Development Partnership Program for South Asia: Best Practices for MSWM in South Asia- A Knowledge Product ",},
  {title:"Programmatic CDM Project on Solid Waste Management for 64 Districts of Bangladesh",},
  {title:"Carbon Foot Print Analysis and GHG Mitigation Strategy Development for IDLC ",},
  {title:"Assess the Economic and Environmental Impact of Irrigation by Using More Efficient Pumps with Better Installation Technique. ",},
  {title:"Bangladesh Green Development Programme ",},
  {title:"Promotion of Green Jobs in Bangladesh ",},
  {title:"Value for Waste ",},
  {title:"Showcasing Positive Economic and Environmental Impact of Improved Design of Pump ",},
  {title:"Preparation of Business Plan for Production of Refuse Derived Fuel (RDF) from Municipal Solid Waste ",},
  {title:"Survey on Soiled Packaging Poly Waste (PPW) and Existing Management Practice for Recycling Project ",},
  {title:"Diagnostic of Biogas Efficiency in Camps and Guidance for Comprehensive and Environmentally Safe Waste and Faecal Sludge Management ",},
  {title:"Preparation of Sanitation and Drainage Improvement Strategy and Master Plan Project for the City of Chittagong ",},
  {title:"Third Urban Governance and Infrastructure Improvement Project (ADB TA-8339 PPTA) ",},
  {title:"Consultancy Services for Sanitation and Solid Waste Management under the DDS Consultant, Coastal Towns Environmental Infrastructure Project (CTEIP) ",},
  {title:"Pilot Project to Create a Scalable Model to Responsibly Manage Solid Waste and Expand Recycling in Argentina and Indonesia ",},
  {title:"TA-8913 REG: Promoting Urban Climate Change Resilience in Selected Asian Cities – Developing Integrated Urban Development Plans in Selected DMC Cities Incorporating Urban Climate Change Resilience Principles (ADB TA-8913 REG) ",},
  {title:"Consultancy Services for Disposal of Empty Pesticide Containers ",},
  {title:"Consulting Service to Improve Slaughterhouse Waste Management Using Biogas Technology at Gazipur City Corporation ",},
  {title:"Preparation for Environmentally Sound Management of Mercury Containing Lighting Sources with a Life-Cycle Approach ",},
  {title:"TA-9546 BAN: Emergency Assistance Project – DPHE- Component",},
  {title:"3R (Reduce, Reuse and Recycle) Pilot Initiative to Reduce the Impact of Greenhouse Gas (GHG) in Dhaka and Chittagong Cities (Phase 1) ",},
  {title:"Consultancy Services for Solid Waste Management under MDS Consultant of City Region Development Project ",},
  {title:"Consultancy Services for Solid Waste & Faecal Sludge Management under the MDS Consultant, CRDP Project ",},
  {title:"Consultancy Services for Landscape and Renovation Work for Savar Residential Campus of BRAC University (sanitation, wastewater, rain water harvesting and solid waste component). ",},
  {title:"Consulting Services on Non-network Sanitation in Pagla Catchment under the Dhaka Sanitation Improvement Project (DSIP) ",},
  {title:"Mapping and Screening Study of Marine Littering Projects in Bangladesh ",},
  {title:"Rapid Assessment of Plastic Pollution in Rivers and Canals around Dhaka ",},
  {title:"Promotion of 3R (Reduce, Reuse & Recycle) Principles in the Solid Waste Management Sector (SWM) in Bangladesh ",},
  {title:"Assessment of Solid Waste Management Opportunities in Bangladesh ",},
  {title:"Alternative Sanitation under the Dhaka Sanitation Improvement Project ",},
  {title:"Design of Integrated Landfill and Resource Recovery Facility for Khulna City Corporation, Bangladesh ",},
  {title:"SC 115370 BAN: Jessore Integrated Landfill and Resource Recovery Facility. ",},
  {title:"Strengthening Medical Waste Management in the Greater Dhaka Area ",},
  {title:"Opportunities for Canadian Clean Technology Companies in Bangladesh ",},
  {title:"TA 9781 REG: Developing South Asian Livable Cities Facility ",},
  {title:"Coastal Town Environmental Infrastructure Project ",},
  {title:"Study of Feasibility and Preparation of Designs for a Pilot Fecal Sludge Management System in Chattogram City ",},
  {title:"Technical Assistance Project on Integrated Solid Waste Management Improvement Project (ISWMIP) ",},
  {title:"Integrated Urban Water Management at the Centre of Municipal Public Services in Bangladesh ",},
  {title:"Methane Emission from Matuail and Amin Bazar Landfill Site and Options for Mitigation",},
  {title:"Compost Plant at Bulta, Roopganj, Greater Dhaka ",},
  {title:"Capacity Development for CDM in Bangladesh under Sustainable Environment Management Program ",},
  {title:"Pilot Projects on Solid Waste Management of Environmental Sanitation, Hygiene and Water Supply in Urban Slums and Fringes ",},
  {title:"Dhaka Community-Based Urban Solid Waste Management under Sustainable Environment Management Program (SEMP) ",},
  {title:"Study of Potential of Waste Recycling, Composting in the city of Jessore, Bangladesh. ",},
];

const ProjectsInBangladesh: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EB] flex flex-col">
      <Header />
    
      <div className="bg-[#D4CFC4] py-6 px-4">
        <h1 className="text-3xl font-bold text-[#00274D] text-left pl-8">
          Projects in Bangladesh
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex-grow container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectsInBangladesh.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-[#00274D] font-medium text-base leading-relaxed">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsInBangladesh;
