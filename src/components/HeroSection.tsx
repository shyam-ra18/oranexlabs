import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen w-full bg-background flex flex-col items-center justify-center overflow-hidden border-b border-white/10">

            {/* 1. BACKGROUND: Ultra-Thin Vibranium Streams */}
            <DataStreamBackground />

            {/* 2. CONTENT: Agency Focused */}
            <div className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto px-6 space-y-8 md:space-y-12 mt-10 md:mt-20">

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-wider leading-[1.2] md:leading-[0.95]"
                >
                    WEB. MOBILE. <br className="md:block" />
                    <span className="text-vibranium">
                        AUTONOMOUS AI.
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-zinc-500 text-base md:text-xl max-w-2xl font-sans leading-relaxed px-4"
                >
                    We engineer high-performance digital infrastructure. <br className="hidden md:block" />
                    From scalable mobile apps to custom intelligent agents.
                </motion.p>

                {/* Single Premium CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center pt-4"
                >
                    <FillButton
                        text="Start Your Project"
                        icon={<ArrowRight size={16} />}
                    />
                </motion.div>
            </div>

            {/* 3. METADATA FOOTER */}
            <div className="absolute bottom-0 w-full p-8 flex justify-between items-end pointer-events-none">
                <div className="hidden md:flex gap-8 text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-vibranium" />
                        Status: Accepting Clients
                    </div>
                    <div>Stack: React / Native / Python</div>
                </div>
                <div className="hidden md:block text-[10px] font-mono text-zinc-800 uppercase tracking-widest">
                    Est. 2026
                </div>
            </div>
        </section>
    );
}

// --- SUB-COMPONENTS ---

function FillButton({ text, icon }: { text: string; icon: ReactNode }) {
    return (
        <button className="group relative px-10 py-5 bg-white text-black font-bold uppercase text-xs tracking-[0.2em] sharp-edge overflow-hidden transition-all hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)]">
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                {text} {icon}
            </span>
            {/* The Fill Animation Layer - Uses brand-purple */}
            <div className="absolute inset-0 bg-vibranium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out will-change-transform" />
        </button>
    );
}

function DataStreamBackground() {
    // Generate random lines for the "Data Tunnel" effect
    // Reduced opacity range for a more subtle look
    const lines = Array(48).fill(null).map(() => ({
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 40 + 10}%`,
        duration: Math.random() * 8 + 5, // Slower for elegance
        delay: Math.random() * 5,
        opacity: Math.random() * 0.4 + 0.1,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Static Grid Lines - Faint Structure */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,theme(colors.vibranium/0.03)_50%,transparent_51%)] bg-[size:100%_80px]" />

            {/* Moving Data Lines */}
            {lines.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ x: "-100%" }}
                    animate={{ x: "110vw" }}
                    transition={{
                        duration: line.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: line.delay
                    }}
                    style={{ top: line.top }}
                    // Ultra thin h-[1px], strict Vibranium color
                    className="absolute h-[1px] bg-gradient-to-r from-transparent via-vibranium to-transparent"
                >
                    {/* The "Head" - Removed blur, kept it sharp and same height */}
                    <div className="absolute right-0 top-0 h-[1px] w-32 bg-gradient-to-r from-transparent to-vibranium opacity-80" />
                </motion.div>
            ))}

            {/* Deep Vignette to focus center */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,theme(colors.background)_90%)]" />
        </div>
    );
}