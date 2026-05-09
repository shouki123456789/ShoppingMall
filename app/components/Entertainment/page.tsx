"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const entmntImages = [
  "/images/ent1.png",
  "https://storage.googleapis.com/stateless-www-live-traveldailymedia/2025/07/2514051a-boombastic-s3.jpg",
  "https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format=webp,w=720/QwRY54Li1HMwD7oNfqXaOnoJHrO19dqg8LflCSQMEV",
  "https://funatpuno.com/wp-content/uploads/2025/05/VR-Games-In-Lucknow-1.png",
];
export default function Entertainment() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-black via-[#170000] to-[#0a0a0a] py-32 text-white">

   
      <div className="absolute left-0 top-30 h-125 w-125 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

       
        <p className="text-sm uppercase tracking-[0.5em] text-gray-500">
          Attractions & Entertainment
        </p>

        {/* Heading */}
        <div className="mt-6 max-w-6xl">
          <h2 className="text-5xl font-bold leading-tight md:text-7xl">
            Entertainment
            <br />
            at Destination Scale.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Immersive attractions, world-class experiences,
            and unforgettable moments transforming the property
            into a year-round entertainment ecosystem.
          </p>
        </div>

     
        <div className="group relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/3">

          <div className="relative h-175">
          <Swiper modules={[Autoplay]} autoplay={{
                                 delay: 2500,
                                disableOnInteraction: false, }}
  speed={3500} loop={true} className="h-175">
              {entmntImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt="Entertainment"  className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

           
            <div className="absolute bottom-12 left-12 max-w-3xl">

              <p className="text-sm uppercase tracking-[0.4em] text-gray-300">
                Immersive Experiences
              </p>

              <h3 className="mt-4 text-5xl font-bold leading-tight">
                Built to Capture
                <br />
                Global Attention.
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                From indoor theme parks and live performances
                to large-scale attractions and interactive experiences,
                every space is designed to drive excitement,
                footfall, and unforgettable engagement.
              </p>

            </div>

          
                </SwiperSlide>
              ))}

              
            </Swiper>
  
            
</div>
  

        </div>

    
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-4xl border border-white/5 bg-white/3 backdrop-blur-xl">

            <div className="relative h-105">

              <img
                src="https://images.ctfassets.net/dsbipkqphva2/3gx2ynIfHUswPTQxPDBwsa/052a51d9e458a76791ae0d237a711063/LEAD-best-theme-parks-in-kl-malaysia.png"
                alt="Theme Park"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">

                <h3 className="text-3xl font-bold">
                  Theme Park
                </h3>

                <p className="mt-3 text-gray-300">
                  Large-scale immersive attractions designed
                  for families and global visitors.
                </p>

              </div>

            </div>

          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-4xl border border-white/5 bg-white/3 backdrop-blur-xl">

            <div className="relative h-105">

              <img
                src="https://amusementlogic.com/wp-content/uploads/2024/04/The-worlds-largest-indoor-theme-park-Zhuhai-China-9.jpg"
                alt="Aquarium"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">

                <h3 className="text-3xl font-bold">
                  Immersive Attractions
                </h3>

                <p className="mt-3 text-gray-300">
                  Signature experiences driving destination-level engagement.
                </p>

              </div>

            </div>

          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-4xl border border-white/5 bg-white/3 backdrop-blur-xl">

            <div className="relative h-105">

              <img
                src="https://cdn.prod.website-files.com/673613aae2ea8c20504cbf6e/682f3449c7de1f19b5562ca0_concert-anthony-delanoix.jpg"
                alt="Live Events"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">

                <h3 className="text-3xl font-bold">
                  Live Experiences
                </h3>

                <p className="mt-3 text-gray-300">
                  Concerts, performances, and large-scale entertainment moments.
                </p>

              </div>

            </div>

          </div>

        </div>

      
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-[30px] border border-white/5 bg-white/3 p-8 backdrop-blur-xl">

            <h3 className="text-5xl font-bold">365</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Days of Experiences
            </p>

          </div>

          <div className="rounded-[30px] border border-white/5 bg-white/3 p-8 backdrop-blur-xl">

            <h3 className="text-5xl font-bold">World-Class</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Entertainment Platform
            </p>

          </div>

          <div className="rounded-[30px] border border-white/5 bg-white/3 p-8 backdrop-blur-xl">

            <h3 className="text-5xl font-bold">Millions</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Annual Experiences
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}