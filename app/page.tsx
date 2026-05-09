import Entertainment from "./components/Entertainment/page";
import Events from "./components/Events/page";
import FinalSection from "./components/FinalSection/page";
import Leasing from "./components/Leasing/page";
import Property from "./components/Property/page";
import Retail from "./components/Retail/page";
import Dining from "./components/dining/page";
export default function Home() {
  return (
    <>
    <main className="relative h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/videos/demo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      
      <nav className="absolute top-0 left-0 z-20 flex w-full items-center justify-between px-8 py-6">
        <h1 className="text-xl font-semibold tracking-[0.3em] text-white">
          LUXMALL
        </h1>

        <div className="flex gap-8 text-sm uppercase tracking-widest text-white">
          <button className="hover:opacity-70">Retail</button>
          <button className="hover:opacity-70">Dining</button>
          <button className="hover:opacity-70">Events</button>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gray-300">
          The Future of Destination Retail
        </p>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          More Than a Mall.
          <br />
          A Global Experience.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
          Retail. Entertainment. Culture. Luxury.
          One iconic destination redefining how the world gathers.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          
          <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:scale-105">
            Explore Property
          </button>

          <button className="rounded-full border border-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-black">
            Watch Film
          </button>

        </div>
      </section>

      
    </main>
    <Property/>
    <Retail/>
    <Leasing/>
     <Dining/>
     <Entertainment/>
     <Events/>
     <FinalSection/>
    </>
  );
}
