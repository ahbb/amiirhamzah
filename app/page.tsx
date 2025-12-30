import Image from "next/image";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-zinc-50 dark:bg-black">
      {/* Navbar section */}
      <Navbar />

      <section className="w-full bg-gray-900 text-gray-100 flex-1">

        {/* Hero section - main landing page */}
        <main className="mx-auto w-full max-w-3xl flex-1 flex flex-col items-center justify-between py-40 px-20 sm:items-start">
          <section className="h-screen flex-col items-start justify-center">
            <p className="text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Amiir Hamzah
            </p>
            <p className="text-3xl text-gray-300 leading-relaxed max-w-2xl mb-10 pt-3">
              I enjoy transforming complex challenges into elegant and intuitive solutions.
            </p>

            {/* Button */}
            <a href="#about" className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition duration-300 font-semibold">
              View my work
            </a>
          </section>
        </main>

        <Portfolio />
      </section>

      {/* Footer uses the same full-bleed background color */}
      <div className="w-full bg-gray-900 text-gray-100">
        <div className="mx-auto w-full max-w-3xl px-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}
