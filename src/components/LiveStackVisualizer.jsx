import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Monitor, Server, Database } from 'lucide-react';

const LiveStackVisualizer = () => {
    const containerRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) return;

            const packet = '.data-packet';
            const logs = gsap.utils.toArray('.term-log');
            const nodes = {
                client: '.node-client',
                server: '.node-server',
                db: '.node-db'
            };

            // Reset state
            gsap.set(packet, { autoAlpha: 0, xPercent: -50, yPercent: -50 });
            gsap.set(logs, { autoAlpha: 0, y: 10 });
            gsap.set(Object.values(nodes), { borderColor: '#27272a' }); // zinc-800

            tl.current = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

            // Node coordinates (Relative to container)
            const pos = {
                client: { left: '20%', top: '25%' },
                server: { left: '80%', top: '25%' },
                db: { left: '50%', top: '65%' }
            };

            // Helper function to pulse a node
            const pulseNode = (nodeClass, color) => {
                return gsap.to(nodeClass, {
                    borderColor: color,
                    boxShadow: `0 0 20px ${color}40`,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1
                });
            };

            tl.current
                // 1. Start at Client (React)
                .set(packet, { left: pos.client.left, top: pos.client.top, autoAlpha: 1 })
                .add(pulseNode(nodes.client, '#38bdf8')) // Cyan for React
                .to(logs[0], { autoAlpha: 1, y: 0, duration: 0.3 }, "<")

                // 2. Travel to Server (Node)
                .to(packet, { left: pos.server.left, top: pos.server.top, duration: 0.8, ease: "power1.inOut" }, "+=0.2")
                .add(pulseNode(nodes.server, '#4ade80')) // Green for Node
                .to(logs[0], { autoAlpha: 0, y: -10, duration: 0.2 }, "<")
                .to(logs[1], { autoAlpha: 1, y: 0, duration: 0.3 }, "<")

                // 3. Travel to DB (MongoDB)
                .to(packet, { left: pos.db.left, top: pos.db.top, duration: 0.8, ease: "power1.inOut" }, "+=0.2")
                .add(pulseNode(nodes.db, '#10b981')) // Emerald for DB
                .to(logs[1], { autoAlpha: 0, y: -10, duration: 0.2 }, "<")
                .to(logs[2], { autoAlpha: 1, y: 0, duration: 0.3 }, "<")

                // 4. Return to Server (JSON Response)
                .to(packet, { left: pos.server.left, top: pos.server.top, duration: 0.8, ease: "power1.inOut" }, "+=0.4")
                .add(pulseNode(nodes.server, '#4ade80'))
                .to(logs[2], { autoAlpha: 0, y: -10, duration: 0.2 }, "<")
                .to(logs[3], { autoAlpha: 1, y: 0, duration: 0.3 }, "<")

                // 5. Return to Client (UI Update)
                .to(packet, { left: pos.client.left, top: pos.client.top, duration: 0.8, ease: "power1.inOut" }, "+=0.2")
                .add(pulseNode(nodes.client, '#38bdf8'))
                .to(logs[3], { autoAlpha: 0, y: -10, duration: 0.2 }, "<")
                .to(logs[4], { autoAlpha: 1, y: 0, duration: 0.3 }, "<")

                // 6. Fade out packet to restart loop
                .to(packet, { autoAlpha: 0, duration: 0.3 }, "+=0.5")
                .to(logs[4], { autoAlpha: 0, duration: 0.3 }, "<");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => tl.current && tl.current.pause()}
            onMouseLeave={() => tl.current && tl.current.play()}
            className="relative w-full max-w-sm h-[26rem] bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 overflow-hidden backdrop-blur-sm mx-auto shadow-2xl flex flex-col"
        >
            {/* Title */}
            <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-4">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-zinc-500 text-xs font-mono ml-2">MERN_Data_Flow.jsx</span>
            </div>

            {/* Network Canvas area */}
            <div className="relative flex-1 w-full">
                {/* SVG Dashed Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
                    <line x1="20%" y1="25%" x2="80%" y2="25%" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="80%" y1="25%" x2="50%" y2="65%" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
                    <line x1="50%" y1="65%" x2="20%" y2="25%" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                {/* The Animated Data Packet */}
                <div className="data-packet absolute w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.8)] z-20"></div>

                {/* Node: React (Client) */}
                <div className="node-client absolute top-[25%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col items-center justify-center z-10 transition-colors">
                    <Monitor size={20} className="text-zinc-300" />
                    <span className="text-[10px] text-zinc-500 mt-1 font-mono">React</span>
                </div>

                {/* Node: Node.js (Server) */}
                <div className="node-server absolute top-[25%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col items-center justify-center z-10 transition-colors">
                    <Server size={20} className="text-zinc-300" />
                    <span className="text-[10px] text-zinc-500 mt-1 font-mono">Node</span>
                </div>

                {/* Node: MongoDB (Database) */}
                <div className="node-db absolute top-[65%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-xl flex flex-col items-center justify-center z-10 transition-colors">
                    <Database size={20} className="text-zinc-300" />
                    <span className="text-[10px] text-zinc-500 mt-1 font-mono">Mongo</span>
                </div>
            </div>

            {/* Simulated Terminal Console */}
            <div className="h-20 w-full bg-zinc-950 rounded-lg border border-zinc-800 p-3 mt-4 relative overflow-hidden font-mono text-xs shadow-inner">
                <div className="text-zinc-600 mb-1">~ terminal</div>
                <div className="relative h-full text-indigo-300">
                    <div className="term-log absolute top-0 left-0 w-full truncate">&gt; GET /api/v1/users ...</div>
                    <div className="term-log absolute top-0 left-0 w-full truncate text-green-400">&gt; Node: Processing request</div>
                    <div className="term-log absolute top-0 left-0 w-full truncate text-emerald-400">&gt; MongoDB: db.users.find()</div>
                    <div className="term-log absolute top-0 left-0 w-full truncate text-green-400">&gt; Node: 200 OK (Sending JSON)</div>
                    <div className="term-log absolute top-0 left-0 w-full truncate text-cyan-400">&gt; React: State updated. UI rendered.</div>
                </div>
            </div>
        </div>
    );
};

export default LiveStackVisualizer;