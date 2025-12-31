import { FaFlutter } from "react-icons/fa6";
import { SiFastapi, SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiDjango } from "react-icons/di";

export default function About() {
  return (
    <div className="max-w-full flex-1 flex flex-col items-center justify-between pb-48 px-4 lg:px-72">
      {/* About section */}
      <div className="w-full">
        <section id="about" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-4 text-white">
            About
          </h2>
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16">
            <div className="pt-3">
              <p className="text-gray-300 leading-relaxed text-lg">
                Hi, I’m Amiir Hamzah, a technology enthusiast driven by a
                passion for building applications that create meaningful and
                positive impact. I enjoy developing digital solutions that
                simplify everyday processes, improve efficiency, and enhance the
                way people interact with technology.
              </p>
              <p className="text-gray-300 leading-relaxed py-5 text-lg">
                Beyond coding, I aim to maintain a healthy lifestyle by
                regularly practicing calisthenics and running to stay fit. I
                also enjoy playing video games, for the immersive storytelling
                crafted by talented creators and to fuel my competitive spirit.
              </p>
            </div>

            {/* Icons column (right side) */}
            <div className="flex flex-col gap-5 w-full">
              <p className="text-gray-300 text-center">
                Some technologies I am working with:
              </p>
              <div className="flex flex-wrap items-center gap-12 text-center justify-center">
                <a className="text-yellow-300 hover:text-white transition">
                  <DiDjango className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20" />
                </a>
                <a className="hover:text-white transition">
                  <SiNextdotjs className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12" />
                  <p className="text-sm mt-2">Next.js</p>
                </a>
                <a className="hover:text-white transition">
                  <FaFlutter className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12" />
                  <p className="text-sm mt-2">Flutter</p>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-12 text-center justify-center">
                <a className="hover:text-white transition">
                  <SiMongodb className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12" />
                  <p className="text-sm mt-2">MongoDB</p>
                </a>
                <a className="hover:text-white transition">
                  <SiMysql className="w-10 h-10 sm:w-12 sm:h-12 md:w-18 md:h-20" />
                </a>
                <a className="hover:text-white transition">
                  <BiLogoSpringBoot className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12" />
                  <p className="text-sm mt-2">
                    Spring <br />
                    Boot
                  </p>
                </a>
              </div>
              <div className="flex flex-wrap items-center text-center justify-center">
                <a className="hover:text-white transition">
                  <SiFastapi className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
                  <p className="text-sm mt-2">Fast API</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
