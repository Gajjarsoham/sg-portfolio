import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
        <section id="contact" className="py-24 px-6 bg-white" ref={sectionRef}>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold font-display text-slate-900 mb-6 tracking-tight">Let's Build Something Together.</h2>
                        <p className="text-lg mb-8">
                            Currently open to fresher roles, internships, and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:hello@example.com" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors">
                                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full border border-slate-100"><Mail size={20} /></div>
                                <span className="font-medium">hello@example.com</span>
                            </a>
                            <div className="flex items-center gap-4 text-slate-600">
                                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full border border-slate-100"><MapPin size={20} /></div>
                                <span className="font-medium">Ahmedabad, Gujarat</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                <input type="email" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none" placeholder="How can I help you?"></textarea>
                            </div>
                            <button className="w-full bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group">
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;