import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Background = () => {
    const blobLayerRef = useRef(null);

    useEffect(() => {
        // Parallax effect: Blobs move slower than the scroll speed
        gsap.to(blobLayerRef.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            }
        });
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-zinc-950 pointer-events-none">
            {/* Blueprint Grid Layer with Spotlight Mask */}
            <div
                className="absolute inset-0 opacity-40 z-10"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
                    backgroundSize: '4rem 4rem',
                    // Multiplying by 1px turns the raw CSS variables into valid pixel coordinates
                    maskImage: 'radial-gradient(circle 500px at calc(var(--mouse-x) * 1px) calc(var(--mouse-y) * 1px), black 10%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle 500px at calc(var(--mouse-x) * 1px) calc(var(--mouse-y) * 1px), black 10%, transparent 100%)'
                }}
            />

            {/* GSAP Animated Gradient Blobs */}
            <div ref={blobLayerRef} className="absolute inset-0 w-full h-[120vh] -top-[10vh] z-0">
                <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/20 blur-[120px]" />
                <div className="absolute top-[60%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-purple-900/10 blur-[100px]" />
            </div>
        </div>
    );
};

export default Background;