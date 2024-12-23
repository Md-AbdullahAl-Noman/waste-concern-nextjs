"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const trainings = [
  {
    image: "/path/to/image1.jpg",
    title: "Training Workshop on Integrated Resource Recovery Training of Key Stakeholders in Waste Management in Harare, Zimbabwe",
    date: "June 13, 2024",
    link: "/training1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "Dhaka Host Training on Integrated Resource and Recovery Center (IRRC)",
    date: "March 21, 2024",
    link: "/training2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "On Job Training at Mathavanga Compost & Pyrolysis Plant in Khulna",
    date: "March 12, 2024",
    link: "/training3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "Training Imparted to Prism Bangladesh for Operation and Maintenance of Medical Waste Incinerator in Jalkuri, Narayanganj City Corporation",
    date: "December 26, 2023",
    link: "/training4",
  },
  {
    image: "/path/to/image1.jpg",
    title: "Two Day Training of Trainers (TOT) Organized for 6 (six) Municipalities organized by Waste Concern",
    date: "November 28, 2023",
    link: "/training1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "Stakeholder Consultation Meeting on Environmental and Social Impact Assessment (ESIA) Study of Pilot Non-Network Sanitation System in Chattogram City",
    date: "April 5, 2023",
    link: "/training2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Training on Medical Waste Management for City Corporation Workers in Narayanganj City Corporation (NCC) Area",
    date: "March 18, 2022",
    link: "/training3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "Training on Medical Waste Management for Municipal Staffs & Workers",
    date: "December 22, 2021",
    link: "/training4",
  },
  {
    image: "/path/to/image1.jpg",
    title: "Waste Concern Organizes Training on Waste to Energy Using Anaerobic Digestion for Indonesian Delegation Dhaka, Bangladesh",
    date: "December 4, 2017",
    link: "/training1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "Managerial Training Program on Integrated Resource Recovery Center (IRRC) Organized for the participants from South Asia and South East Asian Countries",
    date: "November 23, 2014",
    link: "/training2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Training Program on Monitoring of Programmatic CDM Project.",
    date: "March 30, 2014",
    link: "/training3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "High officials from government, NGOs and educational Institutes visits Recycling Training Centre (RTC) Plant at Kanchpur, Dhaka",
    date: "February 19, 2014",
    link: "/training4",
  },
  {
    image: "/path/to/image1.jpg",
    title: "High Level Delegation from 6 City Corporations of Project UPEHSDP Visits Waste Concern’s CDM Based Compost Plant at Bulta, Roopganj",
    date: "December 1, 2011",
    link: "/training1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "Meeting of Partners for Pro-Poor and Sustainable Solid Waste Management Project for Secondary Cities and Small Towns in Asia",
    date: "January 24, 2011",
    link: "/training2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "A Government Delegation from Nepal Visits Waste Concern’s Compost Facilities",
    date: "January 10, 2011",
    link: "/training3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "Two Day Training of Trainers (TOT) Organized for 6 (six) Municipalities organized by Waste Concern",
    date: "December 2, 2010",
    link: "/training4",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Training on Implementation of the Integrated Resource Recovery Center Approach for Secondary Cities and Small Towns",
    date: "November 1, 2010",
    link: "/training3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "High Level Delegation from 6 City Corporations of Project UPEHSDP Visits Waste Concern’s CDM Based Compost Plant at Bulta, Roopganj",
    date: "January 24, 2006",
    link: "/training4",
  },
];

const Training: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EB] flex flex-col">
      <Header />
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Training</h1>
      </div>
      <div className="container mx-auto px-6 py-6 text-gray-800">
        <p className="text-sm mb-4">
          Waste Concern has been imparting training to a range of target groups with a specific focus towards source separation of waste, integrated resource recovery centers (IRRCs), composting, waste to energy, refuse-derived fuel, landfill management, business plan development, carbon trading, faecal sludge management, operation and maintenance of IRRCs and decentralized wastewater treatment.
        </p>
        <p className="text-sm mb-4">
          We have developed 6 (six) training modules on the aforesaid topics. These training modules have been used for trainings organized by Waste Concern in Dhaka as well as in other cities of Bangladesh and in South and South-East Asia. The training modules are targeted to municipal and other local government officials, policymakers, and private sector NGOs and CBOs.
        </p>
        <p className="text-sm mb-6">
          Waste Concern professionals are also engaged as guest lecturers and resource persons for training programs/workshops on solid waste management, recycling, composting, clinical waste management, faecal sludge management, sanitation, waste to energy, business plan development, urban environmental management, municipal infrastructure planning, resource efficiency, circular economy, sustainable development, and environmental impact assessment. The trainees are drawn from officials/staff of municipalities, government, and non-governmental organizations.
        </p>
      </div>
      <div className="flex-grow container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainings.map((training, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <a
                href={training.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full"
              >
                {/* Image */}
                <img
                  src={training.image}
                  alt={training.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                {/* Content */}
                <div className="flex-grow p-4 flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 flex-grow">
                    {training.title}
                  </h3>
                </div>
                <hr className="border-gray-300 my-3 w-full" />
                <div className="px-2 pb-3 flex">
                  <p className="text-xs text-gray-500 ml-2">{training.date}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Training;
