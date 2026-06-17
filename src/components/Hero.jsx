import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Custom Brand Icons matching Lucide's style
const GithubIcon = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const Hero = () => {
    const heroRef = useRef(null);
    const [typedText, setTypedText] = useState('');
    const roles = ["Full Stack Developer", "MERN Stack Dev", "React Enthusiast"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Typewriter Effect Logic
    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 100;
        const currentRole = roles[roleIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting && typedText === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && typedText === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                setTypedText(
                    currentRole.substring(0, typedText.length + (isDeleting ? -1 : 1))
                );
            }
        }, typeSpeed);
        return () => clearTimeout(timeout);
    }, [typedText, isDeleting, roleIndex]);

    // Entrance Animation
    useEffect(() => {
        gsap.fromTo(".hero-element",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out", delay: 0.2 }
        );
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20" ref={heroRef}>
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-6xl w-full z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="hero-element text-blue-600 font-mono text-sm mb-4">Hello World, I am</h2>
                    <h1 className="hero-element text-5xl md:text-7xl font-bold font-display text-slate-900 mb-4 tracking-tight">
                        Soham Gajjar.
                    </h1>
                    <h2 className="hero-element text-2xl md:text-3xl font-display text-slate-500 mb-6 h-10">
                        {typedText}<span className="animate-pulse">|</span>
                    </h2>
                    <p className="hero-element text-lg max-w-lg mb-8 leading-relaxed">
                        I build clean, scalable, and exceptional digital experiences for the web. Obsessed with code quality and modern UI architecture.
                    </p>
                    <div className="hero-element flex flex-wrap gap-4">
                        <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
                            View My Work
                        </a>
                        <a href="/resume.pdf" target="_blank" className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors shadow-sm">
                            Download Resume
                        </a>
                    </div>
                    <div className="hero-element flex gap-6 mt-10">
                        <a href="https://github.com/sohamgajjar" className="text-slate-400 hover:text-blue-600 transition-colors"><GithubIcon size={24} /></a>
                        <a href="https://www.linkedin.com/in/gajjar-soham/" className="text-slate-400 hover:text-blue-600 transition-colors"><LinkedinIcon size={24} /></a>
                    </div>
                </div>

                <div className="hero-element hidden md:flex justify-center relative">
                    <div className="w-80 h-80 bg-blue-50 rounded-full absolute -z-10 blur-3xl opacity-50"></div>
                    <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-xl shadow-slate-200/50 transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm w-full">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <pre className="font-mono text-sm text-slate-600 overflow-hidden">
                            <code>
                                <span className="text-blue-600">const</span> developer = {'{'}<br />
                                &nbsp;&nbsp;name: <span className="text-emerald-600">'Soham Gajjar'</span>,<br />
                                &nbsp;&nbsp;role: <span className="text-emerald-600">'MERN Fresher'</span>,<br />
                                &nbsp;&nbsp;status: <span className="text-emerald-600">'Ready for Impact'</span><br />
                                {'}'};<br /><br />
                                developer.buildWorldClassUI();
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;