import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LiveBuildCard = () => {
    const containerRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const ctx = gsap.context(() => {
            const elements = {
                cursor: '.lb-cursor',
                nav: '.lb-nav',
                heading: '.lb-heading',
                texts: '.lb-text',
                button: '.lb-btn',
                card: '.lb-card',
                highlights: '.lb-highlight'
            };

            if (prefersReducedMotion) {
                // Freeze on final state
                gsap.set([elements.nav, elements.heading, elements.texts, elements.button, elements.card], { autoAlpha: 1 });
                gsap.set(elements.nav, { width: '100%' });
                return;
            }

            tl.current = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

            tl.current
                .set([elements.nav, elements.heading, elements.texts, elements.button, elements.card], { autoAlpha: 0 })
                .set(elements.nav, { width: '0%' })
                .set([elements.heading, elements.texts], { y: 10 })
                .set(elements.button, { scale: 0 })
                .set(elements.card, { x: 20 })

                // 1. Blinking cursor
                .to(elements.cursor, { opacity: 0, duration: 0.1, repeat: 5, yoyo: true })
                .set(elements.cursor, { opacity: 0 })

                // 2. Nav draws
                .to(elements.nav, { autoAlpha: 1, width: '100%', duration: 0.4, ease: "power2.inOut" })

                // 3. Text block fades up
                .to([elements.heading, ...gsap.utils.toArray(elements.texts)], {
                    y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.1, ease: "power2.out"
                })

                // 4. Button pops
                .to(elements.button, { autoAlpha: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)" })

                // 5. Card slides in
                .to(elements.card, { autoAlpha: 1, x: 0, duration: 0.4, ease: "power2.out" })

                // 6. Highlight sequence
                .to(elements.highlights, {
                    outline: "1px solid #6366f1",
                    outlineOffset: "2px",
                    duration: 0.2,
                    stagger: 0.2,
                    yoyo: true,
                    repeat: 1
                })
                .set(elements.highlights, { outline: "none" }) // Reset cleanly

                // 7. Fade to restart
                .to(containerRef.current, { autoAlpha: 0, duration: 0.5, delay: 1.5 })
                .set(containerRef.current, { autoAlpha: 1 }); // Prep for loop

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => tl.current && tl.current.pause()}
            onMouseLeave={() => tl.current && tl.current.play()}
            className="relative w-full max-w-sm h-96 border border-zinc-800 bg-zinc-900/40 rounded-xl p-8 flex flex-col gap-5 overflow-hidden backdrop-blur-sm mx-auto shadow-2xl"
        >
            <div className="lb-cursor absolute top-8 left-8 w-0.5 h-4 bg-indigo-500" />

            <div className="lb-nav lb-highlight h-2 bg-zinc-700/50 rounded-full w-full" />

            <div className="mt-4 flex flex-col gap-3">
                <div className="lb-heading lb-highlight h-4 bg-zinc-600 rounded w-3/4" />
                <div className="lb-text h-2 bg-zinc-800 rounded w-full" />
                <div className="lb-text h-2 bg-zinc-800 rounded w-5/6" />
            </div>

            <div className="lb-btn lb-highlight mt-2 w-28 h-9 bg-indigo-500/20 border border-indigo-500/50 rounded-md" />

            <div className="lb-card lb-highlight mt-auto h-28 bg-zinc-800/40 border border-zinc-700/50 rounded-lg" />
        </div>
    );
};

export default LiveBuildCard;