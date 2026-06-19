// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { Mail, MapPin, Send } from 'lucide-react';

// const Contact = () => {
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

//     return (
//         <section id="contact" className="py-24 px-6 bg-white" ref={sectionRef}>
//             <div className="max-w-6xl mx-auto">
//                 <div className="grid md:grid-cols-2 gap-16">
//                     <div>
//                         <h2 className="text-4xl font-bold font-display text-slate-900 mb-6 tracking-tight">Let's Build Something Together.</h2>
//                         <p className="text-lg mb-8">
//                             Currently open to fresher roles, internships, and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
//                         </p>

//                         <div className="space-y-4">
//                             <a href="mailto:hello@example.com" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors">
//                                 <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full border border-slate-100"><Mail size={20} /></div>
//                                 <span className="font-medium">hello@example.com</span>
//                             </a>
//                             <div className="flex items-center gap-4 text-slate-600">
//                                 <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-full border border-slate-100"><MapPin size={20} /></div>
//                                 <span className="font-medium">Ahmedabad, Gujarat</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
//                         <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//                             <div>
//                                 <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
//                                 <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="John Doe" />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
//                                 <input type="email" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="john@example.com" />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
//                                 <textarea rows="4" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none" placeholder="How can I help you?"></textarea>
//                             </div>
//                             <button className="w-full bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group">
//                                 Send Message
//                                 <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending');

        // Replace this URL with your actual Formspree endpoint (e.g., https://formspree.io/f/your_id)
        const formEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
        const formData = new FormData(e.target);

        try {
            const response = await fetch(formEndpoint, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setFormStatus('success');
                e.target.reset();
                setTimeout(() => setFormStatus(null), 5000); // Clear toast after 5s
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-display text-zinc-50 mb-4">Get In Touch</h2>
                    <p className="text-zinc-400 font-sans">Currently open to fresher roles and engineering opportunities.</p>
                    <a href="mailto:sohamgajjar@email.com" className="inline-block mt-4 text-indigo-400 font-medium hover:text-indigo-300">
                        sohamgajjar@email.com
                    </a>
                </div>

                <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 max-w-2xl mx-auto relative">

                    {/* Toast Notification */}
                    {formStatus === 'success' && (
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-500/10 text-green-400 border border-green-500/20 px-4 py-2 rounded text-sm font-sans w-full max-w-md text-center">
                            Message sent successfully! I'll get back to you soon.
                        </div>
                    )}
                    {formStatus === 'error' && (
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-red-500/10 text-red-400 border border-red-500/20 px-4 py-2 rounded text-sm font-sans w-full max-w-md text-center">
                            Oops! Something went wrong. Please try again or email me directly.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2 font-sans">Name</label>
                            <input type="text" name="name" required className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 text-zinc-300 font-sans" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2 font-sans">Email</label>
                            <input type="email" name="email" required className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 text-zinc-300 font-sans" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2 font-sans">Message</label>
                            <textarea name="message" rows="4" required className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 text-zinc-300 font-sans resize-none"></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={formStatus === 'sending'}
                            className="btn-animated w-full bg-zinc-50 text-zinc-950 font-medium px-6 py-3 rounded-md hover:bg-zinc-200 transition-colors disabled:opacity-50 font-sans"
                        >
                            <span className="btn-animated-text">
                                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                                {formStatus !== 'sending' && <Send size={18} className="btn-animated-icon" />}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;