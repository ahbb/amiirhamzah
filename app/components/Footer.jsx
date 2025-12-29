import { siGithub, siGmail } from 'simple-icons';
import { Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-700 bg-transparent z-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex justify-center items-center gap-6">
                    <a
                        href="https://github.com/ahbb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-100 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d={siGithub.path} />
                        </svg>
                    </a>

                    <a
                        href="mailto:amiir9955@gmail.com"
                        className="text-gray-100 hover:text-white transition-colors"
                        aria-label="Email"
                    >
                        <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d={siGmail.path} />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/amiir-bakri/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-100 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                </div>

                <p className="text-center text-sm text-gray-300 mt-4">
                    © {new Date().getFullYear()} Amiir Hamzah
                </p>
            </div>
        </footer>
    );
}