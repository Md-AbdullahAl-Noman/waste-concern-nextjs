//seventh

"use client";
import React from "react";
import Link from "next/link";

const WhatWeDoSection: React.FC = () => {
  const items = [
    { logo: "/logo/consultancy.png", label: "Consultancy", link: "/consultancy" },
    { logo: "/logo/services.png", label: "Services", link: "/services" },
    { logo: "/logo/projects.png", label: "Projects", link: "/projects" },
    { logo: "/logo/publications.png", label: "Publications", link: "/publications" },
    { logo: "/logo/seminars.png", label: "Seminars", link: "/seminar" },
    { logo: "/logo/training.png", label: "Training", link: "/training" },
    { logo: "/logo/waste-database.png", label: "Waste Database", link: "/waste-database" },
    { logo: "/logo/gallery.png", label: "Gallery", link: "/picture-gallery" },
  ];

  return (
    <section className="bg-[#D4CFC4] py-14 flex justify-center">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#00274D] mb-8">What We Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-4 hover:bg-[#f2ebe0] hover:shadow-md rounded-md"
              style={{
                width: "200px", 
                height: "220px", 
                backgroundClip: "padding-box",
                border: "2px solid transparent",
                borderRadius: "8px",
              }}
            >
              <img
                src={item.logo}
                alt={item.label}
                className="w-12 h-12 mb-8" 
              />
              <p className="text-[#00274D] font-medium text-sm group-hover:text-[#1B5E20]">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
