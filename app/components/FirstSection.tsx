"use client";

import React, { useState, useEffect } from "react";

interface Photo {
  src: string;
  alt: string;
  header: string;
}

const photos: Photo[] = [
  { src: "/images/image1.png", alt: "Legacy Waste Management", header: "Legacy Waste Management" },
  { src: "/images/image2.png", alt: "Recycling Initiatives", header: "Recycling Initiatives" },
  { src: "/images/image3.jpg", alt: "Sustainable Solutions", header: "Sustainable Solutions" },
];

const FirstSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimatingPhoto, setIsAnimatingPhoto] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [hasLooped, setHasLooped] = useState(false); 

  useEffect(() => {
    const photoInterval = setInterval(() => {
      setIsAnimatingPhoto(false); 
      setShowHeader(false); 
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % photos.length;
        setCurrentIndex(nextIndex); 
        setIsAnimatingPhoto(true); 
        setShowHeader(true); 

        if (nextIndex === 0) {
          setHasLooped(true);
        }
      }, 500); 
    }, 3500);

    return () => clearInterval(photoInterval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsAnimatingPhoto(false);
    setShowHeader(false);
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % photos.length;
      setCurrentIndex(nextIndex);
      setIsAnimatingPhoto(true);
      setShowHeader(true);

      if (nextIndex === 0) {
        setHasLooped(true);
      }
    }, 500);
  };

  const handlePrevious = () => {
    setIsAnimatingPhoto(false);
    setShowHeader(false);
    setTimeout(() => {
      const nextIndex = (currentIndex - 1 + photos.length) % photos.length;
      setCurrentIndex(nextIndex);
      setIsAnimatingPhoto(true);
      setShowHeader(true);

      if (nextIndex === 0) {
        setHasLooped(true);
      }
    }, 500);
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-white">
      {/* Background Image with Zoom Animation */}
      <div
        className={`absolute inset-0 transition-transform duration-1000 ease-out ${
          isAnimatingPhoto ? "animate-zoomIn" : ""
        }`}
        key={currentIndex}
      >
        <img
          src={photos[currentIndex].src}
          alt={photos[currentIndex].alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header Text */}
      {showHeader && (
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-3xl font-semibold ${
            currentIndex === 0 && !hasLooped
              ? "" // Static for the first photo initially
              : "animate-slideUpFromMiddleBottom" // Slide-up for subsequent photos or after looping back to the first photo
          }`}
        >
          {photos[currentIndex].header}
        </div>
      )}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-5xl w-14 h-14 flex items-center justify-center border-none focus:outline-none"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-5xl w-14 h-14 flex items-center justify-center border-none focus:outline-none"
      >
        &#8250;
      </button>
    </section>
  );
};

export default FirstSection;
