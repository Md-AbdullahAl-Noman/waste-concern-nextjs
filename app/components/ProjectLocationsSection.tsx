//Third
"use client";
import React from "react";
import Link from "next/link";

const ProjectLocationsSection: React.FC = () => {
  const countries = [
    "Pakistan",
    "India",
    "Nepal",
    "Bhutan",
    "Bangladesh",
    "Laos",
    "Thailand",
    "Cambodia",
    "Vietnam",
    "Solomon Island",
    "Indonesia",
    "Sri Lanka",
    "Argentina",
  ];

  return (
    <section className="bg-[#FFFFFF] pt-10 pb-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00274D] mb-6">
          Project Locations
        </h2>
        <div className="flex flex-col items-center">
          
          <div className="relative w-full md:w-[80%] lg:w-[70%] mx-auto">
            <img
              src="/images/map.png"
              alt="Project Locations Map"
              className="w-full h-auto"
            />
            
            <div className="absolute top-[15%] right-[-26%] w-1/4 flex flex-col text-left space-y-12">
              <ul className="space-y-1.5">
                {countries.map((country, index) => (
                  <li key={index} className="group">
                    <Link
                      href={`/countries/${country.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`text-sm md:text-base font-medium ${
                        country === "Bangladesh"
                          ? "text-[#1B5E20] font-bold text-lg md:text-xl"
                          : "text-[#00274D] hover:text-[#1B5E20]"
                      } transition-transform duration-300 group-hover:transform group-hover:scale-105 `}
                      style={{
                        transition: "font-size 0.3s ease, transform 0.2s ease",
                        fontSize: country === "Bangladesh" ? "1.25rem" : "1rem",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.fontSize =
                          country === "Bangladesh" ? "1.5rem" : "1.25rem";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.fontSize =
                          country === "Bangladesh" ? "1.25rem" : "1rem";
                      }}
                    >
                      {country}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLocationsSection;
