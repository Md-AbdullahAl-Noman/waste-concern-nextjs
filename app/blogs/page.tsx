"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogs = [
  {
    image: "/images/workshop.jpg",
    title:
      "Consultation Workshop: Town-level Stakeholders Consultation Workshop for Climate Resilient City Action Plan of Savar Municipality, Dhaka",
    link: "/workshop-details",
  },
  {
    image: "/images/workshop.jpg",
    title: "Job Opportunity for Short-Term Consultancy Assignment",
    link: "/job-short-term-consultancy",
  },
  {
    image: "/images/workshop.jpg",
    title:
      "Job Opportunity for the Position of Project Engineer (Water, Sanitation, and Waste Management)",
    link: "/job-project-engineer",
  },
  {
    image: "/images/workshop.jpg",
    title:
      "Orientation Workshop on Integrated Urban Water Management at the Centre of Municipal Public Services and Climate Action Plan for Savar Municipality",
    link: "/orientation-workshop",
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EB] flex flex-col">
      <Header />
      <div className="bg-[#D4CFC4] pl-24 pr-6 py-3">
          <h1 className="text-left text-3xl font-bold text-[#00274D]">News and Updates</h1>
      </div>
      <section className="bg-[#F5F2EB] py-12">
      
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition flex flex-col"
              >
                {/* Image */}
                <div className="h-48 w-full  rounded-t-lg overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Title */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#00274D]">
                    {blog.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
