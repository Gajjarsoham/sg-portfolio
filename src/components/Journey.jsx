import React from 'react';

const Journey = () => {
    return (
        <section id="journey" className="py-24 px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-3xl font-bold font-display text-zinc-50">My Journey</h2>
                    <div className="h-px bg-zinc-800 flex-1 max-w-xs"></div>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-zinc-800">
                    {[
                        { year: '2026', title: 'Technical Placements Prep', desc: 'Focusing on advanced MERN architecture and algorithms.' },
                        { year: '2025', title: 'Full-Stack Execution', desc: 'Shipped DevBoard and ShopNest, solidifying React state management.' },
                        { year: '2024', title: 'React & JS Focus', desc: 'Shifted from vanilla web technologies to modern JavaScript frameworks.' },
                        { year: '2023', title: 'Engineering Foundations', desc: 'Began Computer Engineering degree at GTU.' },
                    ].map((item, i) => (
                        <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                                <div className="font-display text-indigo-400 text-sm font-bold mb-1">{item.year}</div>
                                <h4 className="text-lg font-bold text-zinc-50 mb-2 font-display">{item.title}</h4>
                                <p className="text-sm text-zinc-400 font-sans">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;