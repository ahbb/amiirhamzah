import { FaFlutter } from "react-icons/fa6";
import { SiPython, SiNextdotjs, SiMongodb, SiMysql } from 'react-icons/si';
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiDjango } from "react-icons/di";

export default function Portfolio() {
    return (
        // main div to return
        <div className="max-w-full flex-1 flex flex-col items-center justify-between py-16 sm:py-32 px-4 sm:px-8 md:px-72">
            {/* About section */}
            <div className="w-full">
                <section id="about" className="min-h-screen py-10 scroll-mt-20">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">About</h2>
                    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
                        <div className="pt-3">
                            <p className="text-gray-300 leading-relaxed text-xl">
                                Hi, I’m Amiir Hamzah, a technology enthusiast driven by a passion for building applications that create meaningful and positive impact. I enjoy developing digital solutions that simplify everyday processes, improve efficiency, and enhance the way people interact with technology.
                            </p>
                            <p className="text-gray-300 leading-relaxed py-5 text-xl">
                                Beyond coding, I aim to maintain a healthy lifestyle by regularly practicing calisthenics and running to stay fit. I also enjoy playing video games, for the immersive storytelling crafted by talented creators and to fuel my competitive spirit.
                            </p>
                        </div>

                        {/* Icons column (right side) */}
                        <div className="flex flex-col gap-5 w-full lg:pl-36">
                            <p className="text-gray-300">Some technologies I am working with:</p>
                            <div className="flex flex-wrap items-center gap-4 text-center">
                                <a className="text-yellow-300 hover:text-white transition">
                                    <DiDjango className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20" />
                                </a>
                                <a className="text-gray-300 hover:text-white transition">
                                    <SiNextdotjs className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12" />
                                    <p className="text-sm mt-2">Next.js</p>
                                </a>
                                <a className="hover:text-white transition">
                                    <FaFlutter className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12" />
                                    <p className="text-sm mt-2">Flutter</p>
                                </a>
                            </div>
                            <div className="flex flex-wrap items-center gap-8 text-center">
                                <a className="text-green-400 hover:text-white transition">
                                    <SiMongodb className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12" />
                                    <p className="text-sm mt-2">MongoDB</p>
                                </a>
                                <a className="hover:text-white transition">
                                    <SiMysql className="w-10 h-10 sm:w-12 sm:h-12 md:w-18 md:h-20" />
                                </a>
                                <a className="hover:text-white transition">
                                    <BiLogoSpringBoot className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12" />
                                    <p className="text-sm mt-2">Spring Boot</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Experience section */}
            <section id="experience" className="w-full mb-16 scroll-mt-20">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Experience</h2>
                <p className="text-gray-300 leading-relaxed">

                </p>
            </section>

            {/* Projects section */}
            <section id="projects" className="w-full mb-16 scroll-mt-20">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Projects</h2>
                <p className="text-gray-300 leading-relaxed">

                </p>
            </section>

            {/* Contact section */}
            <section id="contact" className="w-full mb-16 scroll-mt-20">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Contact</h2>
                <p className="text-gray-300 leading-relaxed">

                </p>
            </section>
        </div>
    );
}