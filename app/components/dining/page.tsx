
export default function Dining() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#120909] via-[#1a1010] to-black py-32 text-white">
      <div className="absolute right-0 top-20 h-125 w-125 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-8">

         
          <p className="text-sm uppercase tracking-[0.5em] text-gray-500">
            Dining & Lifestyle
          </p>

    
          <div className="mt-6 max-w-5xl">
            <h2 className="text-5xl font-bold leading-tight md:text-7xl">
              More Than Dining.
              <br />
              A Social Destination.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Curated culinary experiences, elevated social spaces,
              and lifestyle-driven destinations designed to extend
              engagement far beyond traditional retail.
            </p>
          </div>

         
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">

           
            <div className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/3 backdrop-blur-xl">

              <div className="relative h-full">

                <img  src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2024-03/BeFunky-collage%20-%202024-03-22T160707.051.jpg"  alt="Dining Experience"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/>

            
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"/>
                  <div className="absolute bottom-10 left-10 max-w-xl">

                    <p className="text-sm uppercase tracking-[0.4em] text-gray-300">
                      Elevated Experiences
                    </p>

                    <h3 className="mt-4 text-4xl font-bold leading-tight">
                      Curated Spaces
                      <br />
                      Designed to Gather.
                    </h3>

                    <p className="mt-6 leading-relaxed text-gray-300">
                      From luxury dining concepts to immersive cafés and
                      rooftop experiences, every environment is built
                      around culture, energy, and connection.
                    </p>

                  </div>

                </div>

            </div>


          <div className="flex flex-col gap-6">

            <div className="group relative overflow-hidden rounded-4xl border border-white/5 bg-white/3 backdrop-blur-xl">

              <div className="relative h-77.7">

                <img  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/3b/b3/5e/ambiance.jpg"
                  alt="Restaurants" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">

                  <h3 className="text-3xl font-bold">
                    Destination Dining
                  </h3>

                  <p className="mt-3 text-gray-300">
                    Signature restaurants and culinary landmarks.
                  </p>

                </div>

              </div>

            </div>

      
            <div className="group relative overflow-hidden rounded-4xl border border-white/5 bg-white/3 backdrop-blur-xl">

              <div className="relative h-77.5">

                <img src="https://img.freepik.com/premium-photo/3d-rendering-loft-luxury-hotel-reception-cafe-lounge-restaurant_105762-557.jpg"
                  alt="Lifestyle" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/>

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">

                  <h3 className="text-3xl font-bold">
                    Lifestyle Culture
                  </h3>

                  <p className="mt-3 text-gray-300">
                    Cafés, lounges, and social-driven environments.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-[30px] border border-white/5 bg-white/3 p-8 backdrop-blur-xl">

            <h3 className="text-5xl font-bold">100+</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Dining Concepts
            </p>

          </div>

          <div className="rounded-[30px] border border-white/5 bg-white/3 p-8 backdrop-blur-xl">

            <h3 className="text-5xl font-bold">24/7</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Lifestyle Energy
            </p>

          </div>

          <div className="rounded-[30px] border border-white/5 bg-white/3 p-8 backdrop-blur-xl">

            <h3 className="text-5xl font-bold">Global</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Culinary Appeal
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}