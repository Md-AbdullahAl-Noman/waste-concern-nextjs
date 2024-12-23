"use client";
import React from "react";
import Link from "next/link";

const NewsAndInsights: React.FC = () => {
  const cards = [
    {
      image: "/images/image2.png",
      title:
        "Consultation Workshop: Town-level Stakeholders Consultation Workshop for Climate Resilient City Action Plan of Savar Municipality, Dhaka",
      date: "August 31, 2024",
      link: "/workshop-details",
    },
    {
      image: "/images/workshop.jpg",
      title: "Job Opportunity for Short-Term Consultancy Assignment",
      date: "October 8, 2024",
      link: "/job-short-term-consultancy",
    },
    {
      image: "/images/workshop.jpg",
      title:
        "Job Opportunity for the Position of Project Engineer (Water, Sanitation, and Waste Management)",
      date: "August 30, 2024",
      link: "/job-project-engineer",
    },
  ];

  return (
    <section className="bg-[#F5F2EB] py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#00274D]">News & Insights</h2>
          <Link
            href="/blogs"
            className="inline-block bg-[#00274D] text-white px-4 py-2 text-sm font-medium shadow-lg hover:bg-lime-600 transition rounded-r-full rounded-l-none"
          >
            See more ➞
          </Link>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-lg hover:shadow-2xl transition flex flex-col h-[420px] w-[380px]"
            >
              {/* Image Section */}
              <div
                className="w-full h-[220px] bg-white rounded-t-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              {/* Content Section */}
              <div className="flex-grow flex flex-col justify-center p-4">
                <h3 className="text-[#00274D] font-semibold text-sm mb-2">
                  {card.title}
                </h3>
              </div>
              <hr className="border-gray-300 my-3 w-full" />
              <div className="px-4 pb-3 flex">
                <p className="text-xs text-gray-500">{card.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndInsights;
