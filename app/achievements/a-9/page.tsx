"use client";
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AwardPage9 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />

      {/* Title Section */}
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
          Waste Concern Receives ‘Best Urban Practices’ Award February 2, 2012
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-10 py-8 text-black">
        {/* Image and Description Section */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <img
              src="/awards/awards9.jpg" 
              alt="Global Green Innovation Award 2015"
              className="w-80  shadow-lg" 
            />
          </div>

          {/* Description Section */}
          <div className="text-sm leading-7">
            <p>
              During the First Session of the Event Organized by Bangladesh Urban Forum (BUF) in Dhaka, Bangladesh,
              December 5-7, 2011
            </p>
            <p>
              Bangladesh Urban Forum (BUF) is an initiative of the Government of Bangladesh (GoB) with support from
              leading stakeholders of the urban sector in a bid to design a broad-based action plan, and to develop
              consensus on an array of issues related to rapid urbanization in the country. The first-ever session of
              the Bangladesh Urban Forum (BUF) ended on December 7, 2011, with the call for Inclusive Urbanization
              aimed at sustainable growth and equity for all urban dwellers.
            </p>
            <p>
            The forum also called for prosperous but equitable, greener, and fully sustainable future for urban
            Bangladesh, where the rights of all Bangladeshis are recognized. The declaration issued jointly by a forum
            of over 70 government, national/local, and international organizations, NGOs, and citizens groups resolved
            that there is a need for more proactive national strategic management of urbanization in Bangladesh, which
            accentuates the gains and limits of the weaknesses of the process. The forum jointly endorsed 21 thematic
            areas of the Urban Sector Policy which include: Patterns and processes of urbanization; Local urban
            planning; Local economic development and employment; Urban local finance and resource mobilization; Urban
            land management; and Urban housing as the major components of the declaration.
          </p>
          </div>
        </div>

        <div className="mt-2 text-sm leading-7">
          <p>
            The forum also called for prosperous but equitable, greener, and fully sustainable future for urban
            Bangladesh, where the rights of all Bangladeshis are recognized. The declaration issued jointly by a forum
            of over 70 government, national/local, and international organizations, NGOs, and citizens groups resolved
            that there is a need for more proactive national strategic management of urbanization in Bangladesh, which
            accentuates the gains and limits of the weaknesses of the process. The forum jointly endorsed 21 thematic
            areas of the Urban Sector Policy which include: Patterns and processes of urbanization; Local urban
            planning; Local economic development and employment; Urban local finance and resource mobilization; Urban
            land management; and Urban housing as the major components of the declaration.
          </p>
          <p className="mt-4">
            One of the key events of the first session of the BUF was Urban Exhibition on Best Practices & Innovations
            to make cities and towns work for all. A total of 12 (twelve) urban subsectors were selected which
            presented best practices and innovations that make cities and towns work for all. Three ‘Best Urban
            Practices’ were awarded at the closing session and Waste Concern was honored as one of the best practices
            for its contribution in the waste sector of Bangladesh.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AwardPage9;
