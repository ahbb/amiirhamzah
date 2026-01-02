'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="fixed top-0 inset-x-0 bg-gray-900/95 backdrop-blur-sm shadow-lg z-50">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-end">

                {/* Hamburger Button - visible only on mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-300 hover:text-blue-400 transition"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop Navigation - hidden on mobile */}
                <div className="hidden md:flex gap-8">
                    <a href="#about" className="text-gray-300 hover:text-blue-400 transition">About</a>
                    <a href="#experience" className="text-gray-300 hover:text-blue-400 transition">Experience</a>
                    <a href="#projects" className="text-gray-300 hover:text-blue-400 transition">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a>
                    <a className="text-gray-300 hover:text-blue-400 transition">Resume</a>
                </div>
            </div>

            {/* Mobile Menu - with animation */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="flex flex-col gap-4 mt-4 pb-4 pl-4">
                    <a href="#about" className="text-gray-300 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#experience" className="text-gray-300 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Experience</a>
                    <a href="#projects" className="text-gray-300 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Contact</a>
                    <a href="#resume" className="text-gray-300 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Resume</a>
                </div>
            </div>

        </nav>
    );
}