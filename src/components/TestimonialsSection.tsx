import { motion } from "framer-motion";

const testimonials = [
    { text: "Automatic powerpoint generation is a HUGE enterprise agent use case. This team excels.", author: "Jerry Liu", handle: "@jerry_l", company: "LlamaIndex" },
    { text: "Composio is set out to build better tools for AI Agents and guess what they have a native integration.", author: "Joao Moura", handle: "@joao_m", company: "CrewAI" },
    { text: "Big shoutout to the team. I've never seen problems resolved so quickly. 10/10 support.", author: "Burca Paul", handle: "@burca_p", company: "Together AI" },
    { text: "The architectural depth they brought to our core infra was unmatched.", author: "Sarah J.", handle: "@sarah_j", company: "FinFlow" },
    { text: "Finally an agency that understands vector databases at scale.", author: "Mike R.", handle: "@miker", company: "VectorX" },
    { text: "Velocity is frighteningly good. Production in 6 weeks.", author: "Elena K.", handle: "@elena_k", company: "Quantum" }
];

export function TestimonialsSection() {
    return (
        <section className="relative w-full py-32 bg-background border-b border-white/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* --- LEFT: Sticky Content --- */}
                <div className="relative h-full flex flex-col justify-center">
                    <div className="sticky top-32 space-y-8">
                        <div className="text-9xl text-vibranium font-bold font-display leading-none -ml-4 select-none">“</div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight -mt-12">
                            Built a workflow that <br />
                            used to take <br />
                            <span className="text-vibranium">3 services</span> and <br />
                            <span className="text-vibranium">2 meetings.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-md border-l border-white/20 pl-6">
                            See why the founders of the world's leading AI platforms trust us to build their internal tooling.
                        </p>

                        <button className="group flex items-center gap-3 text-white text-sm font-mono uppercase tracking-widest hover:text-vibranium transition-colors">
                            Read Case Studies <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>

                {/* --- RIGHT: Vertical Marquee Grid --- */}
                <div className="relative h-[800px] overflow-hidden mask-gradient-vertical">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        {/* Column 1: Moves UP */}
                        <MarqueeColumn items={[...testimonials, ...testimonials]} direction="up" speed={40} />

                        {/* Column 2: Moves DOWN (or slower UP) */}
                        <MarqueeColumn items={[...testimonials, ...testimonials]} direction="up" speed={60} className="hidden md:flex mt-[-200px]" />
                    </div>
                </div>

            </div>
        </section>
    );
}

function MarqueeColumn({ items, direction = "up", speed, className }: any) {
    return (
        <div className={`flex flex-col gap-6 ${className}`}>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: direction === "up" ? "-50%" : "0%" }}
                transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-6"
            >
                {items.map((item: any, i: number) => (
                    <div key={i} className="p-8 bg-zinc-900/70 border border-white/10 backdrop-blur-sm sharp-edge hover:border-vibranium/50 transition-colors group">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-zinc-800 sharp-edge flex items-center justify-center text-xs text-white font-bold">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white text-xs font-bold uppercase">{item.author}</div>
                                    <div className="text-zinc-500 text-[10px] font-mono">{item.handle}</div>
                                </div>
                            </div>
                            <div className="text-zinc-600 group-hover:text-vibranium transition-colors">↗</div>
                        </div>
                        <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                            {item.text}
                        </p>
                        <div className="text-vibranium text-[10px] font-mono uppercase tracking-wider">
                            #{item.company}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}