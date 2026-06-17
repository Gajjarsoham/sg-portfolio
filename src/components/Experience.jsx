import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(sectionRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
            }
        );
    }, []);

    return (
        <section id="experience" className="py-24 px-6" ref={sectionRef}>
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl font-bold font-display text-slate-900">Learning Journey</h2>
                    <div className="h-px bg-slate-200 flex-1 max-w-xs"></div>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
                    {[
                        { year: '2026', title: 'Preparing for Technical Placements', desc: 'Sharpening DSA skills and refining MERN stack architecture patterns.' },
                        { year: '2025', title: 'Built First Full-Stack MERN Apps', desc: 'Developed DevBoard and complex UI concepts, mastering React state management.' },
                        { year: '2024', title: 'Intensive JavaScript & React Focus', desc: 'Transitioned from vanilla web tech to modern framework ecosystems.' },
                        { year: '2023', title: 'Started BE Computer Engineering', desc: 'Began formal education at SAL Institute of Technology, laying down engineering fundamentals.' },
                    ].map((item, i) => (
                        <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-blue-100 group-hover:border-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors z-10">
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="font-mono text-blue-600 text-sm font-bold mb-1">{item.year}</div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;