// components/FinalCTA.tsx

export default function FinalSection() {
  return (
    <section className="relative overflow-hidden bg-black py-40 text-white">

     
      <div className="absolute inset-0">
        <img
          src="/images/final.png"
          alt="Final section"
          className="h-full w-full object-cover opacity-90"
        />

        
        <div className="absolute inset-0 bg-black/50" />
      </div>

      
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

      
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-8 text-center">

        
        <p className="text-sm uppercase tracking-[0.5em] text-gray-400">
          The Opportunity
        </p>

       
        <h2 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
          Ready to Shape
          <br />
          the Next Global
          <br />
          Destination?
        </h2>

        
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Partner with a destination built for global visibility,
          immersive experiences, and next-generation audience engagement.
        </p>

        
        <div className="mt-14 flex flex-col gap-5 sm:flex-row">

         
          <button className="rounded-full bg-white px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-black transition duration-300 hover:scale-105">
            Explore Leasing
          </button>

          
          <button className="rounded-full border border-white px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-white hover:text-black">
            Book an Event
          </button>

          
          <button className="rounded-full border border-white/30 bg-white/3 px-10 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition duration-300 hover:bg-white hover:text-black">
            Sponsorship Opportunities
          </button>

        </div>

        {/* Footer */}
        <div className="mt-24 text-sm uppercase tracking-[0.3em] text-gray-500">
          © 2026 Destination Experience Presentation
        </div>

      </div>

    </section>
  );
}