import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

    return (
        <nav className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold font-display text-slate-900 tracking-tighter">
                    SG<span className="text-blue-600">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm font-medium hover:text-blue-600 transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Drawer */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 absolute w-full pb-4 px-6 flex flex-col space-y-4 shadow-lg">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-lg font-medium text-slate-800"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;