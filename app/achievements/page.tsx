"use client";
import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AchievementSlider from "../components/items/AchievementSlider";

const awardsData = [
  {
    image: "awards/awards2.jpg",
    title: "Outstanding Social Entrepreneurs 2003",
    link: "/achievements/a-2",
  },
  {
    image: "awards/awards3.jpg",
    title: "Waste Concern Receives Global Tech Museum Award 2003",
    link: "/achievements/a-3",
  },
  {
    image: "awards/awards4.jpg",
    title: "ASHOKA Fellowship for the Year 2000",
    link: "/achievements/a-4",
  },
  {
    image: "awards/awards5.png",
    title: "Clean Dhaka Ward Contest 2009",
    link: "/achievements/a-5",
  },
  {
    image: "awards/awards6.jpg",
    title: "Urban Participants Recognition 2010",
    link: "/achievements/a-6",
  },
  {
    image: "awards/awards7.jpg",
    title: "Best Community Initiative Award 2012",
    link: "/achievements/a-7",
  },
  {
    image: "awards/awards8.jpg",
    title: "Global Green Innovation Award 2015",
    link: "/achievements/a-8",
  },
  {
    image: "awards/awards9.jpg",
    title: "Global Green Innovation Award 2015",
    link: "/achievements/a-9",
  },
];

const Divider: React.FC<{ title: string }> = ({ title }) => (
  <section className="w-full flex items-center justify-center my-10">
    <div className="flex items-center w-full max-w-6xl px-6">
      <div className="flex-grow h-[2px] bg-white"></div>
      <h2 className="mx-3 text-xl font-semibold text-[#00274D] uppercase tracking-widest">
        {title}
      </h2>
      <div className="flex-grow h-[2px] bg-white"></div>
    </div>
  </section>
);

const Awards: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen bg-[#F5F2EB]">
        {/* Page Title */}
        <div className="bg-[#D4CFC4] pl-36 pr-30 py-3">
          <h1 className="text-left text-3xl font-bold text-[#00274D]">
            Awards & Achievements
          </h1>
        </div>

        {/* Awards Divider */}
        <Divider title="Awards" />

        {/* Awards Section */}
        <section className="w-full flex flex-col items-center px-10">
          <div className="max-w-sm bg-white rounded-md shadow-md flex flex-col mb-10">
            <Link href="/achievements/a-1">
              <div className="cursor-pointer">
                <div className="w-full h-1/2 overflow-hidden">
                  <img
                    src="awards/awards1.png"
                    alt="United Nation's ‘Race Against Poverty Award’ 2002"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="px-5 py-7 flex flex-col justify-between">
                  <h3 className="text-sm font-semibold text-[#00274D]">
                    United Nation’s ‘Race Against Poverty Award’ 2002
                  </h3>
                  <div className="mt-4 flex justify-end">
                    <button className="w-8 h-8">
                      <img
                        src="logo/next.png"
                        alt="Next Logo"
                        className="w-full h-full object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Cards */}
          <div className="w-full flex flex-wrap justify-center gap-x-6 gap-y-6 px-4 mb-16">
            {awardsData.map((award, index) => (
              <div key={index} className="w-[22%] bg-white rounded-md shadow-md flex flex-col">
                <Link href={award.link}>
                  <div className="w-full h-40 overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="px-5 py-4 flex flex-col flex-grow justify-between h-40">
                    <h3 className="text-sm font-semibold text-[#00274D]">
                      {award.title}
                    </h3>
                    <div className="mt-auto flex justify-end">
                      <button className="w-8 h-8">
                        <img
                          src="logo/next.png"
                          alt="Next Logo"
                          className="w-full h-full object-contain"
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Divider */}
        <Divider title="Achievements" />
        <AchievementSlider />
      </main>
      <Footer />
    </>
  );
};

export default Awards;
