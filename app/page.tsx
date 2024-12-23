import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstSection from "./components/FirstSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import ProjectLocationsSection from "./components/ProjectLocationsSection";
import ProjectsSection from "./components/ProjectsSection";
import SolidWasteManagementSection from "./components/SolidWasteManagementSection";
import WasteResourceSection from "./components/WasteResourceSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import NewsAndInsights from "./components/NewsAndInsights";
import TimelineSection from "./components/TimelineSection";
import StatsSection from "./components/StatsSection";


const HomePage: React.FC = () => {
  return (
    <div 
      className="relative bg-fixed bg-center bg-no-repeat bg-cover min-h-screen flex flex-col"
      style={{
        backgroundImage: `url('/images/A.png')`, 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div> 
      <div className="relative z-10">
        <Header />
        <main className="flex-grow">
          <FirstSection />
          <WhoWeAreSection /> 
          <ProjectLocationsSection />
          <StatsSection />
          <ProjectsSection />
          <SolidWasteManagementSection />
          <WasteResourceSection />
          <WhatWeDoSection />
          <TimelineSection /> 
          <NewsAndInsights />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
