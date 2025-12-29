export default function Portfolio() {
    return (
        <div>
            {/* Main container with padding and max width for better readability */}
            <main className="max-w-4xl mx-auto px-6 py-20">

                {/* Header section with name and title */}
                <header className="mb-12">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Amiir Hamzah
                    </h1>
                    <p className="text-xl text-gray-400"></p>
                </header>

                {/* Summary/About section */}
                <section className="mb-16">
                    <p className="text-gray-300 leading-relaxed">
                        I am a passionate software developer specializing in building modern web and mobile applications. I enjoy transforming complex challenges into elegant and intuitive solutions. Beyond coding, I maintain an active lifestyle through calisthenics and running, and I unwind by playing video games to fuel my competitive spirit.
                    </p>
                </section>
                
            </main>
        </div>
    );
}