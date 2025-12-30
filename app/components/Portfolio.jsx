export default function Portfolio() {
    return (
        <div>
            {/* Main container with padding and max width for better readability */}
            <main className="max-w-4xl mx-auto px-6 py-10">

                {/* Hero section - full viewport height */}
                <section className="h-screen flex-col items-start justify-center">
                    <p className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-3">
                        Amiir Hamzah
                    </p>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
                        I am a software engineer specializing in building modern web and mobile applications. I enjoy transforming complex challenges into elegant and intuitive solutions.
                    </p>

                    {/* Button */}
                    <a href="#about" className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition duration-300 font-semibold">
                        View my work
                    </a>
                </section>

                {/* About section */}
                <section id="about" className="min-h-screen py-20 scroll-mt-20">
                    <h2 className="text-3xl font-bold mb-4 text-white">About</h2>
                    <p className="text-gray-300 leading-relaxed">
                        
                    </p>
                </section>

                {/* Experience section */}
                <section id="experience" className="mb-16 scroll-mt-20">
                    <h2 className="text-3xl font-bold mb-4 text-white">Experience</h2>
                    <p className="text-gray-300 leading-relaxed">
                        
                    </p>
                </section>

                {/* Projects section */}
                <section id="projects" className="mb-16 scroll-mt-20">
                    <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
                    <p className="text-gray-300 leading-relaxed">
                        
                    </p>
                </section>

                {/* Contact section */}
                <section id="contact" className="mb-16 scroll-mt-20">
                    <h2 className="text-3xl font-bold mb-4 text-white">Contact</h2>
                    <p className="text-gray-300 leading-relaxed">
                        
                    </p>
                </section>

            </main>
        </div>
    );
}