// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ExternalLink } from 'lucide-react';

// // Custom Github Icon
// const GithubIcon = ({ size = 20, className = "" }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//         <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//         <path d="M9 18c-4.51 2-5-2-7-2" />
//     </svg>
// );

// const Projects = () => {
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         gsap.fromTo(sectionRef.current,
//             { y: 50, opacity: 0 },
//             {
//                 y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
//                 scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
//             }
//         );
//     }, []);

//     const projects = [
//         {
//             title: "DevBoard",
//             desc: "Agile Project Management for Modern Teams with Kanban boards, real-time updates, and drag-and-drop tasks.",
//             tech: ['React', 'Node.js', 'MongoDB', 'Socket.io']
//         },
//         {
//             title: "ShopNest",
//             desc: "Multi-Vendor E-Commerce Platform featuring Stripe payments, analytics dashboards, and Cloudinary integrations.",
//             tech: ['React', 'Stripe', 'Express', 'Tailwind']
//         },
//         {
//             title: "QuickChat",
//             desc: "Real-Time Messaging Application supporting private/group chats, typing indicators, and emoji integration.",
//             tech: ['React', 'Socket.io', 'Node.js', 'Redux']
//         }
//     ];

//     return (
//         <section id="projects" className="py-24 px-6 bg-white" ref={sectionRef}>
//             <div className="max-w-6xl mx-auto">
//                 <div className="flex items-center gap-4 mb-12">
//                     <h2 className="text-3xl font-bold font-display text-slate-900">Featured Work</h2>
//                     <div className="h-px bg-slate-200 flex-1 max-w-xs"></div>
//                 </div>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {projects.map((project, index) => (
//                         <div key={index} className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
//                             <div className="h-48 bg-slate-200 relative overflow-hidden">
//                                 <img src={`https://placehold.co/600x400/e2e8f0/475569?text=${project.title}`} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                                 <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 backdrop-blur-sm">
//                                     <a href="#" className="bg-white text-slate-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><GithubIcon size={20} /></a>
//                                     <a href="#" className="bg-white text-slate-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><ExternalLink size={20} /></a>
//                                 </div>
//                             </div>
//                             <div className="p-6">
//                                 <div className="text-blue-600 font-mono text-xs mb-2">Full Stack</div>
//                                 <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
//                                 <p className="text-sm mb-4 line-clamp-2">{project.desc}</p>
//                                 <div className="flex flex-wrap gap-2">
//                                     {project.tech.map(t => (
//                                         <span key={t} className="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-md">{t}</span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Projects;




// import React from 'react';
// import { ExternalLink } from 'lucide-react';

// // Custom Github Icon
// const GithubIcon = ({ size = 20, className = "" }) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//         <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//         <path d="M9 18c-4.51 2-5-2-7-2" />
//     </svg>
// );

// const Projects = () => {
//     const projects = [
//         {
//             title: "DevBoard",
//             desc: "Agile project management application featuring real-time task updates and drag-and-drop Kanban boards.",
//             tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
//             img: "https://placehold.co/600x400/18181b/6366f1?text=DevBoard+Screenshot",
//             github: "#",
//             live: "#"
//         },
//         {
//             title: "ShopNest",
//             desc: "Multi-vendor e-commerce platform with integrated Stripe payments and a comprehensive analytics dashboard.",
//             tech: ['React', 'Stripe', 'Express', 'Tailwind'],
//             img: "https://placehold.co/600x400/18181b/6366f1?text=ShopNest+Screenshot",
//             github: "#",
//             live: "#"
//         }
//     ];

//     return (
//         <section id="projects" className="py-24 px-6 bg-zinc-950">
//             <div className="max-w-6xl mx-auto">
//                 <div className="flex items-center gap-4 mb-12">
//                     <h2 className="text-3xl font-bold font-display text-zinc-50">Projects</h2>
//                     <div className="h-px bg-zinc-800 flex-1 max-w-xs"></div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-8">
//                     {projects.map((project, index) => (
//                         <div key={index} className="bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden flex flex-col">
//                             <div className="h-56 bg-zinc-800 relative">
//                                 <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
//                             </div>

//                             <div className="p-6 flex-1 flex flex-col">
//                                 <h3 className="text-xl font-display font-bold text-zinc-50 mb-2">{project.title}</h3>
//                                 <p className="text-sm text-zinc-400 mb-6 font-sans flex-1">{project.desc}</p>

//                                 <div className="flex flex-wrap gap-2 mb-6">
//                                     {project.tech.map(t => (
//                                         <span key={t} className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-zinc-500 text-xs rounded font-sans">{t}</span>
//                                     ))}
//                                 </div>

//                                 <div className="flex gap-4 mt-auto">
//                                     <a href={project.github} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors">
//                                         <GithubIcon size={16} /> Code
//                                     </a>
//                                     <a href={project.live} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors">
//                                         <ExternalLink size={16} /> Live Preview
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Projects;



import React from 'react';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 20, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
);

const Projects = () => {
    const projects = [
        {
            tag: "01",
            category: "Full Stack",
            title: "DevBoard",
            desc: "Agile project management application featuring real-time task updates and drag-and-drop Kanban boards.",
            tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
            img: "https://placehold.co/600x400/18181b/6366f1?text=DevBoard",
            github: "#",
            live: "#"
        },
        {
            tag: "02",
            category: "Full Stack",
            title: "ShopNest",
            desc: "Multi-vendor e-commerce platform with integrated Stripe payments and a comprehensive analytics dashboard.",
            tech: ['React', 'Stripe', 'Express', 'Tailwind'],
            img: "https://placehold.co/600x400/18181b/6366f1?text=ShopNest",
            github: "#",
            live: "#"
        },
        {
            tag: "03",
            category: "Frontend",
            title: "WeatherNow",
            desc: "Dynamic weather dashboard integrating public API data, Chart.js visualizations, and live geolocation.",
            tech: ['React', 'Chart.js', 'REST API', 'Tailwind'],
            img: "https://placehold.co/600x400/18181b/6366f1?text=WeatherNow",
            github: "#",
            live: "#"
        },
        {
            tag: "04",
            category: "Full Stack",
            title: "QuickChat",
            desc: "Real-time messaging application supporting private/group chats, typing indicators, and emoji integration.",
            tech: ['React', 'Socket.io', 'Node.js', 'Redux'],
            img: "https://placehold.co/600x400/18181b/6366f1?text=QuickChat",
            github: "#",
            live: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold font-display text-zinc-50">Projects</h2>
                    <div className="h-px bg-zinc-800 flex-1 max-w-xs"></div>
                </div>

                {/* Updated to lg:grid-cols-2 for a perfect 2x2 grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.tag} className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-zinc-800 overflow-hidden flex flex-col group hover:border-indigo-500/30 transition-colors">
                            <div className="h-56 bg-zinc-800 relative overflow-hidden">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-indigo-400 font-mono text-xs tracking-wider">{project.category}</div>
                                    <div className="text-zinc-600 font-display font-bold text-lg">{project.tag}</div>
                                </div>

                                <h3 className="text-2xl font-display font-bold text-zinc-50 mb-3">{project.title}</h3>
                                <p className="text-sm text-zinc-400 mb-6 font-sans flex-1 leading-relaxed">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-zinc-400 text-xs rounded-full font-sans">{t}</span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a href={project.github} className="btn-animated bg-zinc-800 text-zinc-300 px-4 py-2 rounded text-sm hover:text-white">
                                        <span className="btn-animated-text">
                                            <GithubIcon size={16} className="btn-animated-icon" /> Code
                                        </span>
                                    </a>
                                    <a href={project.live} className="btn-animated bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-4 py-2 rounded text-sm hover:border-indigo-500">
                                        <span className="btn-animated-text">
                                            <ExternalLink size={16} className="btn-animated-icon" /> Live Preview
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;