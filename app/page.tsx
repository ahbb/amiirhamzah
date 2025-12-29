import Image from "next/image";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-zinc-50 dark:bg-black">
      {/* Full-bleed portfolio section (dark background) */}
      <section className="w-full bg-gray-900 text-gray-100 flex-1">
        <main className="mx-auto w-full max-w-3xl flex-1 flex flex-col items-center justify-between py-32 px-16 sm:items-start">
          <Portfolio />
        </main>
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
