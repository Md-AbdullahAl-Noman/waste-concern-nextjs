"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const VideoGallery = () => {
  const videos = [
    {
      title: "Medical waste management",
      duration: "1:44",
      src: "https://www.example.com/video1.mp4",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      title: "Integrated Landfill and Resource Recovery Facility Jashore",
      duration: "16:21",
      src: "https://www.example.com/video2.mp4",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      title: "Waste as Resource",
      duration: "5:43",
      src: "https://www.example.com/video3.mp4",
      thumbnail: "https://via.placeholder.com/150",
    },
    
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F2EB]">
      <Header />
      {/* Top Section */}
      <div className="bg-[#D4CFC4] px-6 py-3">
        <h1 className="text-left text-3xl font-bold text-[#00274D]">
          Video Gallery
        </h1>
      </div>
      {/* Video Gallery Content */}
      <main className="flex-grow container mx-auto px-5 py-10">
        <div className="flex">
          {/* Playlist Section */}
          <div className="w-1/3 overflow-y-auto pr-4">
            <h2 className="font-bold text-lg mb-4">Playlist</h2>
            <ul className="space-y-4">
              {videos.map((video, index) => (
                <li
                  key={index}
                  className={`flex items-center space-x-3 cursor-pointer ${
                    currentVideo.src === video.src ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setCurrentVideo(video)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-16 h-10 object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-[#00274D]">
                      {video.title}
                    </p>
                    <span className="text-xs text-gray-500">{video.duration}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Video Display Section */}
          <div className="w-2/3">
            <video
              src={currentVideo.src}
              controls
              className="w-full h-96 bg-black"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideoGallery;
