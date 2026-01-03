import { GridSection } from "@/components/ui/GridContainer";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --- SERVICE DATA ---
const services = [
    {
        id: "01",
        title: "Web Platforms",
        description: "Next.js architectures built for velocity. We engineer SEO-optimized applications that feel like native software.",
        tags: ["React", "Next.js", "Vercel"],
        visual: "web"
    },
    {
        id: "02",
        title: "Autonomous AI",
        description: "Agentic workflows that think. We fine-tune LLMs and build RAG pipelines to automate complex business logic.",
        tags: ["Python", "LangChain", "OpenAI"],
        visual: "ai"
    },
    {
        id: "03",
        title: "Mobile Engineering",
        description: "60fps everywhere. React Native solutions that share code while delivering uncompromising native performance.",
        tags: ["React Native", "Expo", "Swift"],
        visual: "mobile"
    },
    {
        id: "04",
        title: "Product Design",
        description: "Technical aesthetics. We bridge the gap between Figma and code with a systematic design approach.",
        tags: ["Figma", "Design Systems", "UX"],
        visual: "design"
    },
    {
        id: "05",
        title: "Cloud Infra",
        description: "Serverless scalability. AWS/GCP architectures designed for 99.99% uptime and zero maintenance.",
        tags: ["AWS", "Docker", "Terraform"],
        visual: "cloud"
    },
    {
        id: "06",
        title: "SaaS Systems",
        description: "Business OS. Custom CRM and dashboard solutions with real-time data sync and role-based security.",
        tags: ["PostgreSQL", "Redis", "Realtime"],
        visual: "saas"
    }
];

export function ServicesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    // GSAP ANIMATION LOGIC
    useGSAP(() => {
        const cards = cardsRef.current;

        // Random start positions for "Chaotic Entry"
        const getRandomStart = () => {
            const dirs = [{ x: -100, y: 0 }, { x: 100, y: 0 }, { x: 0, y: 100 }, { x: 0, y: -100 }];
            return dirs[Math.floor(Math.random() * dirs.length)];
        };

        // Create animation
        gsap.fromTo(cards,
            {
                autoAlpha: 0,
                // Using function-based values for randomness
                x: () => Math.random() * 200 - 100,
                y: () => Math.random() * 200 + 100,
                scale: 0.8,
                filter: "blur(10px)"
            },
            {
                duration: 1.2,
                autoAlpha: 1,
                x: 0,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                stagger: 0.1, // Sequential delay
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%", // Triggers when top of section hits 75% of viewport
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: containerRef });

    return (
        <GridSection hasBorderBottom={true} className="bg-[#050505] py-32 overflow-hidden" id="services">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 px-6 md:px-0">
                <div className="space-y-6">
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase leading-[0.9]">
                        Our <br />
                        <span className="text-[#8B5CF6]">
                            Expertise
                        </span>
                    </h2>
                </div>
                <p className="text-zinc-500 text-lg max-w-sm text-right font-sans leading-relaxed">
                    We don't just write code.<br />
                    We engineer digital assets that compound in value.
                </p>
            </div>

            {/* The Grid System */}
            <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={(el) => { if (el) cardsRef.current[index] = el }} // Assign ref
                        className="opacity-0 visibility-hidden" // Hide initially for GSAP
                    >
                        <ServiceCard {...service} />
                    </div>
                ))}
            </div>
        </GridSection>
    );
}

// --- INDIVIDUAL CARD COMPONENT ---
function ServiceCard({ id, title, description, tags, visual }: any) {
    return (
        <div className="group relative border-b border-r border-white/10 bg-[#050505] hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden flex flex-col h-[500px]">

            {/* 1. TOP: Abstract Visual Zone (50% Height) */}
            <div className="h-1/2 w-full relative overflow-hidden flex items-center justify-center border-b border-white/5 p-8">
                {/* Background Grid Pattern in visual zone */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.07)_1px,transparent_1px)] bg-[size:20px_20px]" />

                {/* The Abstract Art */}
                <div className="relative z-10 transition-transform duration-700 group-hover:scale-110">
                    <AbstractArt variant={visual} />
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* 2. BOTTOM: Content Zone (50% Height) */}
            <div className="h-1/2 p-8 md:p-10 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-mono text-[#8B5CF6] uppercase tracking-widest">
                            {id}
                        </span>
                        <ArrowUpRight className="text-zinc-600 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" size={20} />
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white uppercase  mb-4 group-hover:text-[#8B5CF6] transition-colors">
                        {title}
                    </h3>

                    <p className="text-zinc-500 text-sm leading-relaxed font-sans max-w-xs group-hover:text-zinc-400 transition-colors">
                        {description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag: string) => (
                        <span key={tag} className="px-2 py-1 border border-white/10 text-[10px] font-mono uppercase text-zinc-500 sharp-edge group-hover:border-[#8B5CF6]/30 group-hover:text-[#8B5CF6] transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

// --- CSS ABSTRACT ART GENERATOR ---
function AbstractArt({ variant }: { variant: string }) {
    switch (variant) {
        case "web":
            return (
                <div className="relative w-32 h-24 border border-white/20 bg-zinc-900/50 backdrop-blur-sm sharp-edge flex flex-col group-hover:border-[#8B5CF6]/50 transition-colors">
                    <div className="h-6 border-b border-white/10 flex items-center px-2 gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="p-2 space-y-1.5">
                        <div className="w-3/4 h-1.5 bg-white/10 animate-pulse" />
                        <div className="w-1/2 h-1.5 bg-white/10" />
                        <div className="w-full h-1.5 bg-white/5" />
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 -bottom-4 w-12 h-12 border border-[#8B5CF6] bg-black/80 sharp-edge flex items-center justify-center"
                        >
                            <span className="text-[8px] font-mono text-[#8B5CF6]">JS</span>
                        </motion.div>
                    </div>
                </div>
            );
        case "ai":
            return (
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#8B5CF6]/20 border border-[#8B5CF6] sharp-edge rotate-45 flex items-center justify-center relative z-10">
                        <div className="w-4 h-4 bg-[#8B5CF6] sharp-edge" />
                    </div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-white/10 rounded-full"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-zinc-800 border border-white/20 sharp-edge" />
                    </motion.div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 border border-white/10 rounded-full"
                    >
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-2 h-2 bg-[#8B5CF6] sharp-edge" />
                    </motion.div>
                </div>
            );
        case "mobile":
            return (
                <div className="relative w-20 h-32 border border-white/20 bg-zinc-900/50 backdrop-blur-sm sharp-edge flex flex-col items-center py-2 group-hover:border-[#8B5CF6]/50 transition-colors">
                    <div className="w-8 h-1 bg-white/10 rounded-full mb-4" />
                    <div className="grid grid-cols-2 gap-2">
                        <div className="w-6 h-6 bg-white/5 sharp-edge" />
                        <div className="w-6 h-6 bg-white/5 sharp-edge" />
                        <div className="w-6 h-6 bg-[#8B5CF6]/20 sharp-edge" />
                        <div className="w-6 h-6 bg-white/5 sharp-edge" />
                    </div>
                </div>
            );
        case "design":
            return (
                <div className="relative w-24 h-24">
                    <motion.div
                        className="absolute top-0 left-0 w-16 h-16 border border-white/20 bg-transparent sharp-edge z-10"
                        animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-0 w-16 h-16 border border-[#8B5CF6] bg-[#8B5CF6]/10 sharp-edge"
                        animate={{ x: [0, -10, 0], y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1 h-12 bg-white/20 rotate-45" />
                        <div className="w-1 h-12 bg-white/20 -rotate-45" />
                    </div>
                </div>
            );
        case "cloud":
            return (
                <div className="relative w-32 h-20 flex items-center justify-center gap-4">
                    <div className="w-16 h-16 border border-dashed border-white/20 sharp-edge flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/5 sharp-edge" />
                    </div>
                    <motion.div
                        className="flex gap-1"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="w-1 h-1 bg-[#8B5CF6]" />
                        <div className="w-1 h-1 bg-[#8B5CF6]" />
                        <div className="w-1 h-1 bg-[#8B5CF6]" />
                    </motion.div>
                    <div className="w-12 h-12 border border-[#8B5CF6] bg-[#8B5CF6]/10 sharp-edge flex items-center justify-center">
                        <div className="w-1 h-4 bg-[#8B5CF6]" />
                        <div className="w-4 h-1 bg-[#8B5CF6] absolute" />
                    </div>
                </div>
            );
        default:
            // SaaS / Dashboard
            return (
                <div className="w-32 h-20 border border-white/20 bg-zinc-900/50 sharp-edge p-2 grid grid-cols-3 gap-1">
                    <div className="col-span-1 bg-[#8B5CF6]/20 h-full w-full" />
                    <div className="col-span-2 space-y-1">
                        <div className="w-full h-1/2 bg-white/5" />
                        <div className="flex gap-1 h-1/2">
                            <div className="w-1/2 bg-white/5" />
                            <div className="w-1/2 bg-white/5" />
                        </div>
                    </div>
                </div>
            );
    }
}