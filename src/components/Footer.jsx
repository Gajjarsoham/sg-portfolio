import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center border-t border-slate-200 bg-white">
            <a href="#home" className="text-xl font-bold font-display text-slate-900 tracking-tighter inline-block mb-4">
                SG<span className="text-blue-600">.</span>
            </a>
            <p className="text-sm font-medium">
                Designed & Built by Soham Gajjar &copy; 2026
            </p>
        </footer>
    );
};

export default Footer;