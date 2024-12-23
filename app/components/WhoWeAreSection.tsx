//Second
"use client";
import React from "react";
import Link from "next/link"; 

const WhoWeAreSection: React.FC = () => {
  return (
    <section className="bg-[#F5F2EB] py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {/* Left: Image */}
        <div>
          <img
            src="/images/image3.jpg"
            alt="Organic Waste Processing"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00274D]">
            Who we are
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Waste Concern established in 1995, is a research and development
            organization. Since its inception, Waste Concern has been involved in
            the experiment, piloting, and disseminating appropriate technologies
            for the waste management, wastewater, and sanitation sectors. Moreover,
            Waste Concern has also assisted the Government in developing appropriate
            strategies, guidelines, and rules for the waste management sector and
            climate change mitigation projects. Over the last twenty-nine years,
            Waste Concern has developed and disseminated innovative technologies
            suitable for Bangladesh and similar economies in the Asia Pacific region.
          </p>
          <Link
            href="/who-are-we"
            className="inline-block bg-[#00274D] text-white px-2 py-2  text-sm font-medium shadow-lg hover:bg-lime-600 transition rounded-l-none rounded-full"
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
               marginRight: '460px' ,
            }}
          >
            Read More ➞
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
