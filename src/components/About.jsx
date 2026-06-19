// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { Terminal, Code2, Database, Layout } from 'lucide-react';

// const About = () => {
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         gsap.fromTo(sectionRef.current,
//             { y: 50, opacity: 0 },
//             {
//                 y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: sectionRef.current,
//                     start: "top 80%",
//                 }
//             }
//         );
//     }, []);

//     return (
//         <section id="about" className="py-24 px-6 bg-white" ref={sectionRef}>
//             <div className="max-w-6xl mx-auto">
//                 <div className="flex items-center gap-4 mb-12">
//                     <h2 className="text-3xl font-bold font-display text-slate-900">About Me</h2>
//                     <div className="h-px bg-slate-200 flex-1 max-w-xs"></div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-12 items-center">
//                     <div>
//                         <p className="text-lg leading-relaxed mb-6">
//                             I am a final-year Computer Engineering student at SAL Institute of Technology (GTU) with a relentless passion for building functional, beautiful web applications. From conceptualizing architecture to writing flawless React components, I care deeply about the user experience.
//                         </p>
//                         <p className="text-lg leading-relaxed mb-6">
//                             Currently gearing up for technical placements in 2026, I spend my days mastering the MERN stack, contributing to open-source labs, and turning complex problems into elegant, minimalist interfaces.
//                         </p>
//                         <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-500 mt-8">
//                             "Simplicity is the soul of efficiency."
//                         </blockquote>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                         {[
//                             { label: 'Cups of Coffee', value: '847+', icon: <Terminal size={20} /> },
//                             { label: 'Lines of Code', value: '50k+', icon: <Code2 size={20} /> },
//                             { label: 'Bugs Squashed', value: 'Countless', icon: <Database size={20} /> },
//                             { label: 'Projects Built', value: '10+', icon: <Layout size={20} /> },
//                         ].map((stat, i) => (
//                             <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-100 transition-colors">
//                                 <div className="text-blue-600 mb-3">{stat.icon}</div>
//                                 <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
//                                 <div className="text-sm font-medium text-slate-500">{stat.label}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;

import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold font-display text-zinc-50">About</h2>
                    <div className="h-px bg-zinc-800 flex-1 max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-lg text-zinc-400 leading-relaxed mb-6 font-sans">
                            I am a final-year Computer Engineering student at Gujarat Technological University (GTU). I specialize in the MERN stack, transitioning from vanilla web technologies to modern React-based architectures over the last two years.
                        </p>
                        <p className="text-lg text-zinc-400 leading-relaxed mb-6 font-sans">
                            Currently preparing for 2026 placements, my goal is to join a product or service-based company where I can contribute to core engineering challenges and continue refining my frontend capabilities.
                        </p>
                        <blockquote className="border-l-2 border-indigo-500 pl-4 text-zinc-300 mt-8 font-medium">
                            "Great software is built by understanding the user's problem first, and writing code second."
                        </blockquote>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: 'Current Status', value: '8th Sem (GTU)' },
                            { label: 'Primary Stack', value: 'MERN' },
                            { label: 'Core Projects', value: '2' },
                            { label: 'Years Coding', value: '3' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                                <div className="text-2xl font-display font-bold text-zinc-50 mb-1">{stat.value}</div>
                                <div className="text-sm font-sans text-zinc-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;