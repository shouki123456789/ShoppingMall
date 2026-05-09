export default function Property() {
  return (
    <>
    <section className="relative overflow-hidden bg-linear-to-b from-[#0a0a0a] via-[#220000] to-[#110000] text-white py-32 px-8">
      
      
      <div className="absolute top-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-black/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.5em] text-gray-400">
           Where Entertainment, Retail & Culture Collide
          </p>
        </div>

        
        <div className="max-w-5xl">
          <h2 className="text-5xl font-bold leading-tight md:text-7xl">
            Positioned at the
            <br />
            Center of Attention.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
            More than a retail environment — this is a global gathering place
            engineered for scale, culture, entertainment, and unforgettable
            brand experiences.
          </p>
        </div>

        
        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition duration-500 hover:border-white/30 hover:bg-white/10">
            
            <h3 className="text-6xl font-bold">40M+</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Annual Visitors
            </p>

            <p className="mt-6 text-gray-300 leading-relaxed">
              A constant flow of local, regional, and international audiences
              driving year-round engagement.
            </p>

          </div>

          {/* Card 2 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition duration-500 hover:border-white/30 hover:bg-white/10">
            
            <h3 className="text-6xl font-bold">500+</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Global Brands
            </p>

            <p className="mt-6 text-gray-300 leading-relaxed">
              From flagship luxury experiences to emerging retail concepts,
              the destination attracts world-class tenants.
            </p>

          </div>

          {/* Card 3 */}
          <div className="group rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition duration-500 hover:border-white/30 hover:bg-white/10">
            
            <h3 className="text-6xl font-bold">#1</h3>

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-400">
              Entertainment Hub
            </p>

            <p className="mt-6 text-gray-300 leading-relaxed">
              A destination built around immersive attractions, live events,
              dining, and cultural moments that extend beyond shopping.
            </p>

          </div>

        </div>

      </div>
    </section>
    </>
  );
}