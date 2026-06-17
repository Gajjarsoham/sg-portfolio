import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Layout, Database } from 'lucide-react';

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        // Reveal section
        gsap.fromTo(sectionRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
            }
        );

        // Animate skill bars specifically
        gsap.utils.toArray('.skill-bar').forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            gsap.fromTo(bar,
                { width: 0 },
                {
                    width: `${targetWidth}%`, duration: 1.5, ease: "power2.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
                }
            );
        });
    }, []);

    return (
        <section id="skills" className="py-24 px-6" ref={sectionRef}>
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold font-display text-slate-900">Technical Arsenal</h2>
                    <div className="h-px bg-slate-200 flex-1 max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Frontend */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Layout className="text-blue-600" size={24} /> Frontend Development
                        </h3>
                        <div className="space-y-6">
                            {[
                                { name: 'React.js', val: 90 }, { name: 'JavaScript (ES6+)', val: 85 },
                                { name: 'Tailwind CSS', val: 95 }, { name: 'HTML5/CSS3', val: 90 },
                            ].map(skill => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-slate-700">{skill.name}</span>
                                        <span className="text-sm text-slate-400">{skill.val}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 rounded-full skill-bar" data-width={skill.val}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            <Database className="text-blue-600" size={24} /> Backend & Tools
                        </h3>
                        <div className="space-y-6">
                            {[
                                { name: 'Node.js & Express', val: 80 }, { name: 'MongoDB', val: 85 },
                                { name: 'REST APIs', val: 90 }, { name: 'Git & GitHub', val: 85 },
                            ].map(skill => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium text-slate-700">{skill.name}</span>
                                        <span className="text-sm text-slate-400">{skill.val}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 rounded-full skill-bar" data-width={skill.val}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;