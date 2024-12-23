"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const publications = [
  { image: "publications/01.jpg", 
    title: "A REPORT ON PROJECT ACTIVITIES IMPLEMENTED BY WASTE CONCERN UNDER INTEGRATED WATER MANAGEMENT IN URBAN AREAS AS A CORE TASK OF MUNICIPAL SERVICES' OF GENERAL INTEREST PROJECT (PN-161)",
    pdf: "publications/01.pdf", 
  }, {image: "publications/02.jpg",
    title: "TOWARD A MULTISECTORAL ACTION PLAN FOR SUSTAINABLE PLASTIC MANAGEMENT IN BANGLADESH",
    pdf: "publications/02.pdf",
  }, {
    image: "publications/03.jpg",
    title: "WASH Baseline Assessment of Kustia Municipality Bangladesh",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "WASH Baseline Assessment of Savar Municipality Bangladesh",
    pdf: "publications/04.pdf",
  },{
    image: "publications/01.jpg", 
    title: "ASSESSMENT OF GREEN JOBS in RENEWAL ENERGY",
    pdf: "publications/01.pdf", 
  },{
    image: "publications/02.jpg",
    title: "ASSESSMENT OF GREEN JOBS in CONSTRUCTION SECTOR",
    pdf: "publications/02.pdf",
  },{
    image: "publications/03.jpg",
    title: "ASSESSMENT OF GREEN JOBS in WASTE MANAGEMENT SECTOR",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "Key Facts on World's First Carbon Trading Based Composting Project From Organic Waste of Dhaka City",
    pdf: "publications/04.pdf",
  },{
    image: "publications/01.jpg", 
    title: "ওয়েস্ট কন্সার্ন জৈব সার",
    pdf: "publications/01.pdf", 
  }, {
    image: "publications/02.jpg",
    title: "Waste is Resource",
    pdf: "publications/02.pdf",
  },{
    image: "publications/03.jpg",
    title: "Valuing Waste, Transforming Cities",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "Valuing the sustainable development co-benefits of climate change mitigation actions",
    pdf: "publications/04.pdf",
  },{
    image: "publications/01.jpg", 
    title: "Urban Solid Waste Management Scenario of Bangladesh: Problems and Prospects",
    pdf: "publications/01.pdf", 
  },{
    image: "publications/02.jpg",
    title: "COMMUNITY BASED DECENTRALIZED COMPOSTING",
    pdf: "publications/02.pdf",
  },{
    image: "publications/03.jpg",
    title: "TRASH TO CASH - SLUM DWELLERS MAKE MONEY FROM CUTTING GREENHOUSE GASES",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "Toward Sustainable Municipal Organic Waste Management in South Asia",
    pdf: "publications/04.pdf",
  },{
    image: "publications/01.jpg", 
    title: "TOKYO 3R STATEMENT",
    pdf: "publications/01.pdf", 
  },{
    image: "publications/02.jpg",
    title: "Sustainable Development Benefits of Integrated Waste Management",
    pdf: "publications/02.pdf",
  },{
    image: "publications/03.jpg",
    title: "SFD Report Savar, Bangladesh",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "SFD Report Kushtia, Bangladesh",
    pdf: "publications/04.pdf",
  },
  {
    image: "publications/01.jpg", 
    title: "SAARC WORKSHOP ON SOLID WASTE MANAGEMENT",
    pdf: "publications/01.pdf", 
  },{
    image: "publications/02.jpg",
    title: "Recycling Training Center",
    pdf: "publications/02.pdf",
  },{
    image: "publications/03.jpg",
    title: "PRO-POOR SOLID WASTE MANAGEMENT",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "মানুষ ও পরিবেশের সুরক্ষায় চিকিৎসা-বর্জ্যের সথিক ব্যবস্থাপনা অত্যন্ত প্রয়োজনীয়",
    pdf: "publications/04.pdf",
  },{
    image: "publications/01.jpg", 
    title: "Promote and Support ISO 14001 [EMS] Among Business Sector in Bangladesh",
    pdf: "publications/01.pdf", 
  },{
    image: "publications/02.jpg",
    title: "plastic waste recycling and its opportunities in bangladesh",
    pdf: "publications/02.pdf",
  },{
    image: "publications/03.jpg",
    title: " NATIONAL 3R WORKSHOP IN DHAKA, BANGLADES",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "Lead Acid Battery Recycling in Bangladesh",
    pdf: "publications/04.pdf",
  },{
    image: "publications/01.jpg", 
    title: "INTEGRATED RESOURCE RECOVERY CENTRES",
    pdf: "publications/01.pdf", 
  },{
    image: "publications/02.jpg",
    title: "পরিচ্ছন্নতা কর্মীরা সচেতন হলে মানুষ ও পরিবেশ সুরক্ষিত হবে",
    pdf: "publications/02.pdf",
  },{
    image: "publications/03.jpg",
    title: "Health Care Waste Management Users' Guide",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "HAZARDOUS WASTE MANAGEMENT IN BANGLADESH: A COUNTRY INVENTORY",
    pdf: "publications/04.pdf",
  },{
    image: "publications/01.jpg", 
    title: "COMPOST BARREL",
    pdf: "publications/01.pdf", 
  },{
    image: "publications/02.jpg",
    title: "Green Jobs Initiative in Bangladesh",
    pdf: "publications/02.pdf",
  },{
    image: "publications/03.jpg",
    title: "Feasibility of Scaling Up Compost Production & Distribution in Dinajpur",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "Enriched Compost Demonstration on Different Crops Production in Eco-village in Tangail.",
    pdf: "publications/04.pdf",
  },{
    image: "publications/01.jpg", 
    title: "Promoting Integrated Resource Recovery Centres in Urban Asia",
    pdf: "publications/01.pdf", 
  },{
    image: "publications/02.jpg",
    title: "Dhaka Declaration 2004 on Waste Management",
    pdf: "publications/02.pdf",
  },{
    image: "publications/03.jpg",
    title: "Deriving a Method to Calculate My Household Carbon Footprint based on Water Consumption",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "Manual on Decentralised Composting in Low and Middle-Income Countries",
    pdf: "publications/04.pdf",
  },{
    image: "publications/01.jpg", 
    title: "Deriving a Method to Calculate My Household Carbon Footprint based on Electricity Consumption",
    pdf: "publications/01.pdf", 
  },{
    image: "publications/02.jpg",
    title: "Decentralised composting in Bangladesh, a win-win situation for all stakeholders",
    pdf: "publications/02.pdf",
  },{
    image: "publications/03.jpg",
    title: "REPORT ON COMPOSITION OF PLASTIC WASTE AND MARKET ASSESSMENT OF THE PLASTIC RECYCLING SECTOR IN DHAKA CITY",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "Community Based COMPOSTING",
    pdf: "publications/04.pdf",
  },
  {
    image: "publications/01.jpg", 
    title: "Co-Composting of Municipal Solid Waste and Faecal Sludge for Agriculture in Kushtia Municipality, Bangladesh",
    pdf: "publications/01.pdf", 
  },{
    image: "publications/02.jpg",
    title: "CDM and its OPPORTUNITIES in Bangladesh",
    pdf: "publications/02.pdf",
  },{
    image: "publications/03.jpg",
    title: "CARBON FINANCING AND SOLID WASTE MANAGEMENT",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "CDM Project Potential in the Poultry Waste Management Sector in Bangladesh",
    pdf: "publications/04.pdf",
  },{
    image: "publications/03.jpg",
    title: "Lead Acid battery recycling in bangladesh",
    pdf: "publications/03.pdf",
  },{
    image: "publications/04.jpg",
    title: "Decentralised Composting for Cities of Low- and Middle- Income Countries",
    pdf: "publications/04.pdf",
  },{
    image: "publications/04.jpg",
    title: "EEII final Brochure",
    pdf: "publications/04.pdf",
  },
];

const Publications: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Publications</h1>
      </div>

      {/* Publications Grid */}
      <main className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {publications.map((publication, index) => (
            <div key={index} className="text-center cursor-pointer">
              
              <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
                <img
                  src={publication.image}
                  alt={publication.title}
                  className="w-[300px] h-[200px] object-cover object-top shadow-lg mx-auto"
                />
                <h2 className="text-[#00274D] font-medium mt-4 text-sm">
                  {publication.title}
                </h2>
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Publications;
