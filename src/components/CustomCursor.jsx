// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const CustomCursor = () => {
//     const cursorRef = useRef(null);

//     useEffect(() => {
//         const moveCursor = (e) => {
//             gsap.to(cursorRef.current, {
//                 x: e.clientX,
//                 y: e.clientY,
//                 duration: 0.15,
//                 ease: "power2.out"
//             });
//         };
//         window.addEventListener('mousemove', moveCursor);
//         return () => window.removeEventListener('mousemove', moveCursor);
//     }, []);

//     return (
//         <div
//             ref={cursorRef}
//             className="fixed top-0 left-0 w-4 h-4 bg-blue-600 rounded-full mix-blend-multiply pointer-events-none z-50 hidden md:block -translate-x-1/2 -translate-y-1/2 opacity-60"
//         />
//     );
// };

// export default CustomCursor;


import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    useEffect(() => {
        // quickTo is highly optimized for performance-heavy continuous updates
        const xTo = gsap.quickTo(document.documentElement, "--mouse-x", { duration: 0.2, ease: "power3.out" });
        const yTo = gsap.quickTo(document.documentElement, "--mouse-y", { duration: 0.2, ease: "power3.out" });

        const updateMousePosition = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    // No visual DOM element rendered — it purely manages the CSS variables
    return null;
};

export default CustomCursor;