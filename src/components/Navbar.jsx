// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

//     return (
//         <nav className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
//             <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//                 <a href="#home" className="text-2xl font-bold font-display text-slate-900 tracking-tighter">
//                     SG<span className="text-blue-600">.</span>
//                 </a>

//                 {/* Desktop Nav */}
//                 <div className="hidden md:flex space-x-8">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link}
//                             href={`#${link.toLowerCase()}`}
//                             className="text-sm font-medium hover:text-blue-600 transition-colors"
//                         >
//                             {link}
//                         </a>
//                     ))}
//                 </div>

//                 {/* Mobile Menu Toggle */}
//                 <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                     {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </div>

//             {/* Mobile Nav Drawer */}
//             {isMenuOpen && (
//                 <div className="md:hidden bg-white border-b border-slate-100 absolute w-full pb-4 px-6 flex flex-col space-y-4 shadow-lg">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link}
//                             href={`#${link.toLowerCase()}`}
//                             className="text-lg font-medium text-slate-800"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             {link}
//                         </a>
//                     ))}
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;




// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState('home');
//     const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Journey', 'Contact'];

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = document.querySelectorAll('section');
//             let current = 'home';
//             sections.forEach((section) => {
//                 const sectionTop = section.offsetTop;
//                 if (window.scrollY >= sectionTop - 150) {
//                     current = section.getAttribute('id');
//                 }
//             });
//             setActiveSection(current);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav className="fixed top-0 w-full z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 transition-all duration-300">
//             <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//                 <a href="#home" className="text-2xl font-bold font-display text-zinc-50 tracking-wide">
//                     SG<span className="text-indigo-500">.</span>
//                 </a>

//                 <div className="hidden md:flex space-x-8">
//                     {navLinks.map((link) => {
//                         const lowerLink = link.toLowerCase();
//                         return (
//                             <a
//                                 key={link}
//                                 href={`#${lowerLink}`}
//                                 className={`text-sm font-medium transition-all ${activeSection === lowerLink
//                                         ? 'text-indigo-500 border-b-2 border-indigo-500 pb-1'
//                                         : 'text-zinc-400 hover:text-zinc-100 pb-1 border-b-2 border-transparent'
//                                     }`}
//                             >
//                                 {link}
//                             </a>
//                         )
//                     })}
//                 </div>

//                 <button className="md:hidden text-zinc-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                     {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </div>

//             {isMenuOpen && (
//                 <div className="md:hidden bg-zinc-950 border-b border-zinc-900 absolute w-full pb-4 px-6 flex flex-col space-y-4 shadow-lg">
//                     {navLinks.map((link) => (
//                         <a
//                             key={link}
//                             href={`#${link.toLowerCase()}`}
//                             className="text-lg font-medium text-zinc-300 hover:text-indigo-500"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             {link}
//                         </a>
//                     ))}
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            // Exclude experience/journey from the tracker
            const sections = document.querySelectorAll('section:not(#experience):not(#journey)');
            let current = 'home';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 transition-all duration-300">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold font-display text-zinc-50 tracking-wide">
                    SG<span className="text-indigo-500">.</span>
                </a>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => {
                        const target = link === 'Home' ? 'home' : link.toLowerCase();
                        return (
                            <a
                                key={link}
                                href={`#${target}`}
                                className={`text-sm font-medium transition-all ${activeSection === target
                                        ? 'text-indigo-400 border-b-2 border-indigo-500 pb-1'
                                        : 'text-zinc-400 hover:text-zinc-100 pb-1 border-b-2 border-transparent'
                                    }`}
                            >
                                {link}
                            </a>
                        )
                    })}
                </div>

                <button className="md:hidden text-zinc-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-zinc-950 border-b border-zinc-900 absolute w-full pb-4 px-6 flex flex-col space-y-4 shadow-lg">
                    {navLinks.map((link) => {
                        const target = link === 'Home' ? 'home' : link.toLowerCase();
                        return (
                            <a
                                key={link}
                                href={`#${target}`}
                                className="text-lg font-medium text-zinc-300 hover:text-indigo-500"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link}
                            </a>
                        )
                    })}
                </div>
            )}
        </nav>
    );
};

export default Navbar;