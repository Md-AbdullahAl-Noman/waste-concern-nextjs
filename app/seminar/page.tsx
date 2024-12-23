"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const seminars = [
  {
    image: "images/image2.png",
    title: "Consultation Workshop: Town-level Stakeholders Consultation Workshop for Climate Resilient City Action Plan of Savar Municipality, Dhaka",
    date: "August 31, 2024",
    link: "/seminar1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "Orientation Workshop on Integrated Urban Water Management at the Centre of Municipal Public Services and Climate Action Plan for Savar Municipality",
    date: "July 6, 2024",
    link: "/seminar2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Stakeholder Consultation on Integrated Solid Waste Management Improvement Project (ISWMIP)",
    date: "April 4, 2023",
    link: "/seminar3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "Stakeholder Consultation in Rangpur City on Integrated Solid Waste Management Improvement Project (ISWMIP)",
    date: "April 3, 2023",
    link: "/seminar4",
  },
  {
    image: "images/image2.png",
    title: "Seminar on Solid Waste Management Jointly Organized by the Ministry of Environment, Forest and Climate Change (MOEFCC) and Waste Concern",
    date: "February 16, 2023",
    link: "/seminar1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "Bangladesh Waste Water Management Sector Webinar",
    date: "December 7, 2022",
    link: "/seminar2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Integrated Solid Waste Management Improvement Project (ISWMIP)",
    date: "December 7, 2022",
    link: "/seminar3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "Workshop on Integrated Solid Waste Management Improvement Project (ISWMIP) Organized by LGED",
    date: "December 6, 2022",
    link: "/seminar4",
  },
  {
    image: "images/image2.png",
    title: "Sharing of the Report Entitled `Bangladesh Waste Database 2021’ Organized by the Department of Environment (DoE) and Waste Concern",
    date: "November 29, 2022",
    link: "/seminar1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "Renewable Energy in Bangladesh",
    date: "November 19, 2022",
    link: "/seminar2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Iftekhar Enayetullah, Managing Partner of Waste Concern Consultants (WCC) participated in the Zoom Meeting on Circular Economy",
    date: "March 30, 2022",
    link: "/seminar3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "Webinar on Decentralized Solutions for Wastewater Management in Small and Medium Towns in Bangladesh",
    date: "April 3, 2023",
    link: "/seminar4",
  },
  {
    image: "images/image2.png",
    title: "Distribution of Protective Gear for Sanitation Workers",
    date: "February 9, 2022",
    link: "/seminar1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "Signing Ceremony Memorandum of Understanding",
    date: "January 9, 2022",
    link: "/seminar2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Expert Consultation Meeting on the Draft Solid Waste Management Rules 2020",
    date: "March 19, 2020",
    link: "/seminar3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "Workshop on Environmentally Sound Management of Mercury Containing Lighting Sources",
    date: "July 16, 2019",
    link: "/seminar4",
  },
  {
    image: "images/image2.png",
    title: "National Workshop on Sustainable Management of Plastic to Leverage Circular Economy and Achieve SDG in Bangladesh",
    date: "February 13, 2019",
    link: "/seminar1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "Plastic Waste Situation of Urban Areas of Bangladesh",
    date: "January 1, 2019",
    link: "/seminar2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Workshop on Integrated Resource Recovery and Urban Waste Management with Focus on FSM",
    date: "December 3, 2018",
    link: "/seminar3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "Regional Workshop on Enhancing Urban Resource Efficiency and Circular Economy in Asia and the Pacific in the United Nations Conference Centre (UNCC) organized by ESCAP Bangkok",
    date: "March 19, 2018",
    link: "/seminar4",
  },
  {
    image: "images/image2.png",
    title: "Waste Concern jointly organizing an event with UNESCAP in World Urban Forum 9, in Kuala Lumpur, Malaysia.",
    date: "February 8, 2018",
    link: "/seminar1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "World Urban Forum 9 Side Event: Supporting the Implementation of the New Urban Agenda: Pro-poor Local Approaches for Sustainable Urban Waste Management",
    date: "February 8, 2018",
    link: "/seminar2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Regional Workshop on Sustainable Development Benefits of Decentralized Municipal Solid Waste Management",
    date: "December 1, 2017",
    link: "/seminar3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "CityNet Congress 2017",
    date: "November 5, 2017",
    link: "/seminar4",
  },
  {
    image: "images/image2.png",
    title: "Waste Concern Participates in the Global Dialogue on Technology for Resilient Cities Osaka, Japan",
    date: "October 17, 2017",
    link: "/seminar1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "Separate policy stressed for promoting green tourism",
    date: "December 9, 2015",
    link: "/seminar2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Waste Concern Participants in the International Solid Waste Association (ISWA) World Congress 2015",
    date: "September 7, 2015",
    link: "/seminar3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "ISWA Beacon Conference on Waste to Energy Facilities in Emerging and Developing Economies: Challenges and Options",
    date: "April 16, 2015",
    link: "/seminar4",
  },
  {
    image: "images/image2.png",
    title: "The Gobeshona Conference on Research on Climate Change in Bangladesh",
    date: "January 10, 2015",
    link: "/seminar1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "Regional Policy Dialogue on Sustainable Urbanization in South Asia was organized in New Delhi",
    date: "December 18, 2014",
    link: "/seminar2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Regional Workshop on Nationally Appropriate Mitigation Actions (NAMA)in Asia and the Pacific",
    date: "March 19, 2014",
    link: "/seminar3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "Waste Concern Participates in the Fifth Regional 3R Forum",
    date: "February 25, 2014",
    link: "/seminar4",
  },
  {
    image: "images/image2.png",
    title: "Meeting of Partners for Pro-Poor and Sustainable Solid Waste Management Project for Secondary Cities and Small Towns in Asia",
    date: "February 1, 2011",
    link: "/seminar1",
  },
  {
    image: "/path/to/image2.jpg",
    title: "3Rs for Green Economy and Sound and Material- Cycle Society",
    date: "October 4, 2010",
    link: "/seminar2",
  },
  {
    image: "/path/to/image3.jpg",
    title: "Regional Workshop RETA 6337:Innovations for Scaling up Organic Waste Management in South Asia",
    date: "August 2, 2010",
    link: "/seminar3",
  },
  {
    image: "/path/to/image4.jpg",
    title: "Regional Exposure Workshop on Pro-poor and Sustainable Solid Waste Management in Secondary Cities and Small Towns- Dhaka, Bangladesh",
    date: "February 22, 2010",
    link: "/seminar4",
  },
  {
    image: "/path/to/image4.jpg",
    title: "Seminar on Unlocking Mitigation Potential Through Renewable Energy Technologies in Bangladesh",
    date: "July 1, 2008",
    link: "/seminar4",
  },
];

const Seminar: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EB] flex flex-col">
      <Header />
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">Seminars</h1>
      </div>
      <div className="flex-grow container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seminars.map((seminar, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <a
                href={seminar.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full"
              >
                {/* Image */}
                <img
                  src={seminar.image}
                  alt={seminar.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                {/* Content */}
                <div className="flex-grow p-4 flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-800 mb-2 flex-grow">
                    {seminar.title}
                  </h3>
                  </div>
                  <hr className="border-gray-300 my-3 w-full" />
                  <div className="px-2 pb-3 flex">
                  <p className="text-xs text-gray-500 ml-2">{seminar.date}</p>
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

export default Seminar;
