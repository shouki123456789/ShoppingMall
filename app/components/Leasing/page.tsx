// components/LeasingModule.tsx

"use client";

import { useState } from "react";

const leasingData = {
  luxury: {
    title: "Luxury Leasing",
    description:
      "Premium flagship environments crafted for globally recognized luxury brands seeking prestige, visibility, and immersive customer experiences.",
    image: "/images/lease1.png",
    stats: "Luxury Flagship Opportunities",
    cta: "Explore Luxury Spaces",
  },

  retail: {
    title: "Retail Opportunities",
    description:
      "High-traffic retail environments designed for global brands, experiential storefronts, and next-generation consumer engagement.",
    image: "/images/lease22.png",
    stats: "500+ Global Retail Brands",
    cta: "View Retail Leasing",
  },

  dining: {
    title: "Dining Destinations",
    description:
      "Lifestyle-driven culinary spaces curated for premium restaurants, cafés, rooftop concepts, and social dining experiences.",
    image:  "/images/lease2.png",
    stats: "Destination Dining Experiences",
    cta: "Explore Dining Concepts",
  },

  popup: {
    title: "Pop-Up Experiences",
    description:
      "Flexible high-visibility spaces designed for emerging brands, seasonal activations, collaborations, and cultural moments.",
    image: "/images/lease5.png",
    stats: "Flexible Activation Spaces",
    cta: "Launch a Pop-Up",
  },
};

export default function Leasing() {

  const [activeTab, setActiveTab] = useState("luxury");

  const current = leasingData[activeTab as keyof typeof leasingData];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#0a0a0a] via-[#220000] to-[#110000] py-32 text-white">

      
      <div className="absolute left-1/2 top-20 h-125 w-125 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        
        <p className="text-sm uppercase tracking-[0.5em] text-gray-500">
          Leasing Opportunities
        </p>

        {/* Heading */}
        <div className="mt-6 max-w-5xl">
          <h2 className="text-5xl font-bold leading-tight md:text-7xl">
            Built for
            <br />
            Global Brands.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Flexible retail environments designed for flagship stores,
            immersive experiences, culinary destinations,
            and next-generation brand activations.
          </p>
        </div>

       
        <div className="mt-16 flex flex-wrap gap-4">

          {Object.keys(leasingData).map((tab) => (

            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition duration-300
              
              ${
                activeTab === tab
                  ? "bg-white text-black"
                  : "border border-white/10 bg-white/3 text-white hover:bg-white hover:text-black"
              }`}
            >
              {tab}
            </button>

          ))}

        </div>

        
        <div className="mt-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

          
          <div>

            <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
              {current.stats}
            </p>

            <h3 className="mt-6 text-4xl font-bold md:text-6xl">
              {current.title}
            </h3>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300">
              {current.description}
            </p>

           
            <button className="mt-10 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:scale-105">
              {current.cta}
            </button>

          </div>

          
          <div className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/3 backdrop-blur-xl">

            <div className="relative h-162.5">

              <img
                src={current.image}
                alt={current.title}
                className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
              />

              
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}