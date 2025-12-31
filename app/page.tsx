import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-zinc-50 dark:bg-black">
      <Navbar />

      <section className="w-full bg-gray-900 text-gray-100 flex-1">
        {/* Hero section - main landing page */}
        <main className="mx-auto w-full max-w-3xl items-center justify-between px-4">
          <section className="h-screen flex flex-col items-center justify-center text-center">
            <p className="text-7xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Amiir Hamzah
            </p>
            <p className="text-3xl text-gray-300 leading-relaxed max-w-2xl mb-10 pt-3">
              I enjoy transforming complex challenges into elegant and intuitive
              solutions.
            </p>
            
            <a
              href="#about"
              className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition duration-300 font-semibold"
            >
              View my work
            </a>
          </section>
        </main>

        <About />
        <Experience />
        <Projects />
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
