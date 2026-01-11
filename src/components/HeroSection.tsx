import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] w-full bg-background flex flex-col items-center justify-center overflow-hidden border-b border-white/10 pt-32 pb-20">

            {/* 1. BACKGROUND: Ultra-Thin Data Streams */}
            <DataStreamBackground />

            {/* 2. CONTENT: Agency Focused */}
            <div className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto px-6 space-y-8">

                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-mono text-zinc-400 uppercase tracking-widest group cursor-pointer hover:border-vibranium/50 transition-colors"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-vibranium animate-pulse" />
                    Now Accepting Q1 Projects
                    <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl sm:text-6xl md:text-8xl font-display font-bold text-white tracking-tight leading-[1.1]"
                >
                    Turning Vision <br />
                    Into <span className="text-vibranium">Digital Assets</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-zinc-500 text-base md:text-lg max-w-2xl font-sans leading-relaxed"
                >
                    We engineer high-performance web platforms, mobile software, and <br className="hidden md:block" />
                    autonomous AI agents for founders who value velocity.
                </motion.p>

                {/* Firecrawl-style Input UI */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full max-w-2xl mt-4"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-vibranium/20 to-transparent blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex flex-col md:flex-row items-center gap-2 p-2 bg-[#0A0A0A] border border-white/10 sharp-edge shadow-2xl">
                            <div className="flex-1 flex items-center gap-3 px-4 py-3 md:py-0 w-full">
                                <Terminal size={18} className="text-zinc-600" />
                                <input
                                    type="text"
                                    placeholder="Briefly describe your project idea..."
                                    className="w-full bg-transparent border-none outline-none text-sm font-mono text-white placeholder-zinc-700"
                                />
                            </div>
                            <TechButton
                                text="ANALYZE_SCOPE"
                                icon={<ArrowRight size={14} />}
                                className="w-full md:w-auto"
                            />
                        </div>
                    </div>
                    {/* Input Sub-label */}
                    <div className="flex justify-between mt-3 px-2">
                        <div className="flex gap-4 text-[9px] font-mono text-zinc-700 uppercase tracking-wider">
                            <span>#NextJS</span>
                            <span>#AI_Agent</span>
                            <span>#Engineering</span>
                        </div>
                        <span className="text-[9px] font-mono text-vibranium/50 uppercase tracking-tighter">Enter to Initialize</span>
                    </div>
                </motion.div>
            </div>

            {/* Scrolling Decorative Lines */}
            <DataStreamBackground />
        </section>
    );
}

// --- SUB-COMPONENTS ---


function TechButton({ text, icon, className }: { text: string; icon: any; className?: string }) {
    return (
        <button className={cn(
            "group relative px-8 py-3 bg-vibranium text-white font-bold text-xs uppercase tracking-[0.2em] sharp-edge overflow-hidden transition-all hover:shadow-[0_0_30px_-5px_#8B5CF6]",
            className
        )}>
            <div className="relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors duration-300">
                {text} {icon}
            </div>

            {/* The Scanning Light Effect */}
            <div className="absolute inset-0 w-[50%] h-full bg-white/20 -skew-x-[45deg] -translate-x-[150%] group-hover:translate-x-[250%] transition-transform duration-700 ease-in-out" />

            {/* Corner Notch Overlay (Holographic feel) */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/40 group-hover:border-black/40 transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/40 group-hover:border-black/40 transition-colors" />

            {/* Background Fill */}
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </button>
    );
}

function DataStreamBackground() {
    // Generate random lines for the "Data Tunnel" effect
    // Reduced opacity range for a more subtle look
    const lines = Array(32).fill(null).map(() => ({
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 40 + 10}%`,
        duration: Math.random() * 8 + 6, // Slower for elegance
        delay: Math.random() * 7,
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
