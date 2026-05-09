"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const retailImages = [
  "/images/retail1.png",
  "/images/retail2.png",
"/images/retail3.png",
  "/images/retail4.png",
];

export default function Retail() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-black via-[#1a1a1a] to-[#101010]  text-white">

     
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

       
        <p className="text-sm uppercase tracking-[0.5em] text-gray-500">
          Retail Experience
        </p>

        {/* Heading */}
        <div className="mt-6 max-w-5xl">
          <h2 className="text-5xl font-bold leading-tight md:text-7xl">
            Where Global Brands
            <br />
            Take Center Stage.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            A next-generation retail ecosystem blending flagship experiences,
            luxury destinations, immersive storefronts, and high-energy
            consumer engagement at unprecedented scale.
          </p>
        </div>

       
        <div className="mt-10 overflow-hidden rounded-[36px] border border-white/10 bg-white/3 backdrop-blur-xl">

            <Swiper modules={[Autoplay, EffectFade]} effect="fade" autoplay={{ delay: 3500, disableOnInteraction: false,}}
            loop={true} className="h-175">

            {retailImages.map((image, index) => (
              <SwiperSlide key={index}>

                <div className="group relative h-full w-full overflow-hidden">

                  <img
                    src={image}
                    alt="Retail"
                    className="h-full w-full object-cover transition duration-4000 group-hover:scale-105"
                  />

                
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                
                  <div className="absolute bottom-12 left-12 max-w-2xl">

                    <p className="text-sm uppercase tracking-[0.4em] text-gray-300">
                      Premium Retail Destination
                    </p>

                    <h3 className="mt-4 text-5xl font-bold leading-tight">
                      Designed for
                      <br />
                      Global Visibility.
                    </h3>

                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-[30px] border border-white/5 bg-white/3 p-10 backdrop-blur-xl transition duration-500 hover:bg-white/5">

            <h3 className="text-5xl font-bold">500+</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Retail Brands
            </p>

            <p className="mt-6 leading-relaxed text-gray-300">
              A curated mix of luxury flagships, global icons,
              emerging concepts, and experiential retail.
            </p>

          </div>

          {/* Card 2 */}
          <div className="rounded-[30px] border border-white/5 bg-white/3 p-10 backdrop-blur-xl transition duration-500 hover:bg-white/5">

            <h3 className="text-5xl font-bold">2M+</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Sq Ft Retail Space
            </p>

            <p className="mt-6 leading-relaxed text-gray-300">
              Large-format flagship opportunities designed
              for immersive brand storytelling and scale.
            </p>

          </div>

          {/* Card 3 */}
          <div className="rounded-[30px] border border-white/5 bg-white/3 p-10 backdrop-blur-xl transition duration-500 hover:bg-white/5">

            <h3 className="text-5xl font-bold">40M+</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Annual Footfall
            </p>

            <p className="mt-6 leading-relaxed text-gray-300">
              A powerful audience ecosystem attracting visitors,
              tourists, shoppers, and entertainment seekers year-round.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}