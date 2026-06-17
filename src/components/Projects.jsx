import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ExternalLink } from 'lucide-react';

// Custom Github Icon
const GithubIcon = ({ size = 20, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const Projects = () => {
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

    const projects = [
        {
            title: "DevBoard",
            desc: "Agile Project Management for Modern Teams with Kanban boards, real-time updates, and drag-and-drop tasks.",
            tech: ['React', 'Node.js', 'MongoDB', 'Socket.io']
        },
        {
            title: "ShopNest",
            desc: "Multi-Vendor E-Commerce Platform featuring Stripe payments, analytics dashboards, and Cloudinary integrations.",
            tech: ['React', 'Stripe', 'Express', 'Tailwind']
        },
        {
            title: "QuickChat",
            desc: "Real-Time Messaging Application supporting private/group chats, typing indicators, and emoji integration.",
            tech: ['React', 'Socket.io', 'Node.js', 'Redux']
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 bg-white" ref={sectionRef}>
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold font-display text-slate-900">Featured Work</h2>
                    <div className="h-px bg-slate-200 flex-1 max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                            <div className="h-48 bg-slate-200 relative overflow-hidden">
                                <img src={`https://placehold.co/600x400/e2e8f0/475569?text=${project.title}`} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                                    <a href="#" className="bg-white text-slate-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><GithubIcon size={20} /></a>
                                    <a href="#" className="bg-white text-slate-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-blue-600 font-mono text-xs mb-2">Full Stack</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                                <p className="text-sm mb-4 line-clamp-2">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded-md">{t}</span>
                                    ))}
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