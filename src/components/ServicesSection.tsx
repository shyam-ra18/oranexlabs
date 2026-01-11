import { GridSection } from "@/components/ui/GridContainer";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --- SERVICE DATA ---
const services = [
    {
        id: "01",
        title: "Web Platforms",
        description: "Next.js architectures built for velocity. SEO-optimized applications that feel like native software.",
        tags: ["React", "Next.js", "Vercel"],
    },
    {
        id: "02",
        title: "Autonomous AI",
        description: "Agentic workflows that think. Fine-tuned LLMs and RAG pipelines to automate complex business logic.",
        tags: ["Python", "LangChain", "OpenAI"],
    },
    {
        id: "03",
        title: "Mobile Engineering",
        description: "60fps everywhere. React Native solutions that share code while delivering uncompromising performance.",
        tags: ["React Native", "Expo", "Swift"],
    },
    {
        id: "04",
        title: "Product Design",
        description: "Technical aesthetics. Bridging the gap between Figma and code with a systematic design approach.",
        tags: ["Figma", "Design Systems", "UX"],
    },
    {
        id: "05",
        title: "Cloud Infra",
        description: "Serverless scalability. AWS/GCP architectures designed for 99.99% uptime and zero maintenance.",
        tags: ["AWS", "Docker", "Terraform"],
    },
    {
        id: "06",
        title: "SaaS Systems",
        description: "Business OS. Custom CRM and dashboard solutions with real-time data sync and role-based security.",
        tags: ["PostgreSQL", "Redis", "Realtime"],
    }
];

export function ServicesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    // GSAP ANIMATION LOGIC
    useGSAP(() => {
        const cards = cardsRef.current;

        gsap.fromTo(cards,
            {
                autoAlpha: 0,
                y: 100,
                filter: "blur(10px)"
            },
            {
                duration: 1,
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, { scope: containerRef });

    return (
        <GridSection hasBorderBottom={true} className="bg-[#050505] py-32 overflow-hidden" id="services">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 px-6 md:px-0">
                <div className="space-y-6">
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight leading-[0.9]">
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

            {/* The Grid System with Spacing */}
            <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-6 md:px-0">
                {services.map((service, index) => (
                    <div
                        key={index}
                        ref={(el) => { if (el) cardsRef.current[index] = el }}
                        className="opacity-0 visibility-hidden h-full"
                    >
                        <ServiceCard {...service} />
                    </div>
                ))}
            </div>
        </GridSection>
    );
}

// --- INDIVIDUAL CARD COMPONENT ---
function ServiceCard({ id, title, description, tags }: any) {
    return (
        <div className="group relative bg-[#0A0A0A] border border-white/10 sharp-edge overflow-hidden flex flex-col h-[500px] transition-all duration-500 hover:border-[#8B5CF6]/50 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]">

            {/* 1. TOP: Grainy Gradient Zone (45% Height) */}
            <div className="relative h-[45%] w-full overflow-hidden">

                {/* Grain Texture Overlay */}
                <div className="absolute inset-0 z-10 opacity-30 pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 400 400%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noiseFilter%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noiseFilter)%27/%3E%3C/svg%3E")' }}
                />

                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-[#050505] to-[#8B5CF6]/5 group-hover:from-[#8B5CF6]/40 group-hover:to-[#8B5CF6]/10 transition-all duration-1000 ease-in-out" />

                {/* SVG Curves on Hover */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                    <img
                        src="/curvess.svg"
                        alt=""
                        className="w-full h-full object-cover scale-150 group-hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                </div>

                {/* Moving Light Orb */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_50%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_0%,transparent_60%)] transition-all duration-1000"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 45, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />


                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 z-20">
                    <ArrowUpRight className="text-white/50 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" size={20} />
                </div>
            </div>

            {/* 2. BOTTOM: Content Zone (55% Height) */}
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-between border-t border-white/10 bg-[#0A0A0A] group-hover:bg-[#0F0F0F] transition-colors">
                <div>
                    <h3 className="text-3xl font-display font-bold text-white uppercase tracking-tight mb-4 group-hover:text-[#8B5CF6] transition-colors">
                        {title}
                    </h3>

                    <p className="text-zinc-500 text-sm leading-relaxed font-sans max-w-sm group-hover:text-zinc-400 transition-colors">
                        {description}
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6">
                    {tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1.5 border border-white/10 text-[10px] font-mono uppercase text-zinc-500 sharp-edge group-hover:border-[#8B5CF6]/30 group-hover:text-[#8B5CF6] transition-colors bg-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}