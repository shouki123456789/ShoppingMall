

export default function Events() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#150000] via-black to-[#220000] py-32 text-white">


      <div className="absolute right-0 top-20 h-150 w-150 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">

   
        <p className="text-sm uppercase tracking-[0.5em] text-gray-500">
          Events & Platform
        </p>

      
        <div className="mt-6 max-w-6xl">
          <h2 className="text-5xl font-bold leading-tight md:text-7xl">
            Built for
            <br />
            Global Moments.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            From immersive brand activations and live entertainment
            to large-scale launches and cultural experiences,
            the destination operates as a year-round platform
            for visibility, engagement, and unforgettable impact.
          </p>
        </div>

      
        <div className="group relative mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/3 backdrop-blur-xl">

          <div className="relative h-187.5">

           
            <img
              src="https://t4.ftcdn.net/jpg/18/18/11/09/360_F_1818110934_v93sfyrt3FsRBHhslyf31mxaW8Tk3xJr.jpg"
              alt="Events Platform"
              className="h-full w-full object-cover transition duration-1000 group-hover:scale-105"
            />
  
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

            
            <div className="absolute bottom-12 left-12 max-w-3xl">

              <p className="text-sm uppercase tracking-[0.4em] text-gray-300">
                Destination-Scale Experiences
              </p>

              <h3 className="mt-4 text-5xl font-bold leading-tight">
                A Global Stage
                <br />
                for Brands & Culture
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                High-impact environments designed for concerts,
                launches, experiential marketing, celebrity appearances,
                and immersive audience engagement at scale.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:scale-105">
                  Book an Event
                </button>

                <button className="rounded-full border border-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-white hover:text-black">
                  Explore Sponsorship
                </button>

              </div>

            </div>

          </div>

        </div>

        
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">

          {/* Card 1 */}
          <div className="rounded-[30px] border border-white/5 bg-white/3 p-8 backdrop-blur-xl transition duration-500 hover:bg-white/5">

            <h3 className="text-3xl font-bold">
              Concerts
            </h3>

            <p className="mt-5 leading-relaxed text-gray-300">
              Large-scale live entertainment experiences designed
              to attract regional and global audiences.
            </p>

          </div>

          {/* Card 2 */}
          <div className="rounded-[30px] border border-white/5 bg-white/3 p-8 backdrop-blur-xl transition duration-500 hover:bg-white/5">

            <h3 className="text-3xl font-bold">
              Brand Activations
            </h3>

            <p className="mt-5 leading-relaxed text-gray-300">
              Immersive environments engineered for audience interaction,
              visibility, and experiential storytelling.
            </p>

          </div>

          {/* Card 3 */}
          <div className="rounded-[30px] border border-white/5 bg-white/3 p-8 backdrop-blur-xl transition duration-500 hover:bg-white/5">

            <h3 className="text-3xl font-bold">
              Product Launches
            </h3>

            <p className="mt-5 leading-relaxed text-gray-300">
              Premium launch environments built for media attention,
              influencer engagement, and cultural relevance.
            </p>

          </div>

          {/* Card 4 */}
          <div className="rounded-[30px] border border-white/5 bg-white/3 p-8 backdrop-blur-xl transition duration-500 hover:bg-white/5">

            <h3 className="text-3xl font-bold">
              Corporate Events
            </h3>

            <p className="mt-5 leading-relaxed text-gray-300">
              Flexible destination-scale venues supporting conferences,
              summits, private events, and executive experiences.
            </p>

          </div>

        </div>

        
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-[30px] border border-white/5 bg-white/3 p-10 backdrop-blur-xl">

            <h3 className="text-6xl font-bold">200+</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Annual Events
            </p>

          </div>

          <div className="rounded-[30px] border border-white/5 bg-white/3 p-10 backdrop-blur-xl">

            <h3 className="text-6xl font-bold">5M+</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Event Visitors
            </p>

          </div>

          <div className="rounded-[30px] border border-white/5 bg-white/3 p-10 backdrop-blur-xl">

            <h3 className="text-6xl font-bold">Global</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Brand Visibility
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}