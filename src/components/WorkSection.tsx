import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

// --- AGENCY PROJECTS DATA ---
const projects = [
    {
        id: "01",
        title: "Lumina Finance",
        category: "Fintech Core",
        year: "2025",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2600&auto=format&fit=crop",
    },
    {
        id: "02",
        title: "Apex Neural",
        category: "AI Infra",
        year: "2024",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2600&auto=format&fit=crop",
    },
    {
        id: "03",
        title: "Vortex Systems",
        category: "SaaS Platform",
        year: "2024",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2600&auto=format&fit=crop",
    },
    {
        id: "04",
        title: "Echo Protocol",
        category: "DeFi / Web3",
        year: "2023",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2600&auto=format&fit=crop",
    },
    {
        id: "05",
        title: "Mono Space",
        category: "Architecture",
        year: "2023",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2600&auto=format&fit=crop",
    }
];

export function WorkSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });
    const x = useMotionValue(0);

    // Calculate drag constraints (how far left/right we can go)
    useEffect(() => {
        const calculateConstraints = () => {
            if (containerRef.current && trackRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const trackWidth = trackRef.current.scrollWidth;
                // We drag negative X to move right. Max drag is track width - container width
                const maxDrag = -(trackWidth - containerWidth) - 48; // 48px padding buffer
                setConstraints({ left: maxDrag, right: 0 });
            }
        };

        calculateConstraints();
        window.addEventListener("resize", calculateConstraints);
        return () => window.removeEventListener("resize", calculateConstraints);
    }, []);

    // Button Navigation
    const scroll = (direction: "left" | "right") => {
        const currentX = x.get();
        const cardWidth = 500; // Approximate scroll distance per click
        let newX = direction === "left" ? currentX + cardWidth : currentX - cardWidth;

        // Clamp values to constraints
        newX = Math.max(Math.min(newX, constraints.right), constraints.left);

        animate(x, newX, {
            type: "spring",
            stiffness: 300,
            damping: 30,
        });
    };

    return (
        <section className="relative w-full bg-background border-b border-white/10 py-32 overflow-hidden" id="work">

            {/* Header & Controls */}
            <div className="max-w-[1440px] mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-8 relative z-20">
                <div>
                    <div className="text-vibranium text-xs font-mono uppercase tracking-[0.25em] mb-4">
                        Selected_Works
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tight">
                        Digital <span className="text-vibranium">Archive</span>
                    </h2>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => scroll("left")}
                        className="w-12 h-12 border border-white/20 flex items-center justify-center sharp-edge hover:bg-vibranium hover:border-vibranium hover:text-black text-white transition-all duration-300"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-12 h-12 border border-white/20 flex items-center justify-center sharp-edge hover:bg-vibranium hover:border-vibranium hover:text-black text-white transition-all duration-300"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* DRAGGABLE CANVAS */}
            <div ref={containerRef} className="w-full overflow-hidden pl-6 md:pl-12 cursor-grab active:cursor-grabbing">
                <motion.div
                    ref={trackRef}
                    style={{ x }}
                    drag="x"
                    dragConstraints={constraints}
                    dragElastic={0.1} // Resistance at edges
                    className="flex gap-8 w-max pr-12 pb-12"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </motion.div>
            </div>


        </section>
    );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
    return (
        <motion.div
            className="group relative min-w-[320px] md:min-w-[550px] h-[50vh] md:h-[65vh] flex-shrink-0 bg-surface sharp-edge border border-white/10 overflow-hidden"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
        >
            {/* Image Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out pointer-events-none"
                    whileHover={{ scale: 1.1 }}
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-center mb-4 border-b border-white/20 pb-4">
                        <span className="text-vibranium font-mono text-xs uppercase tracking-widest">
                            {project.id} // {project.category}
                        </span>
                        <span className="text-zinc-400 font-mono text-xs">
                            {project.year}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight mb-2">
                        {project.title}
                    </h3>
                </div>
            </div>

            {/* Hover Action */}
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center sharp-edge">
                    <ArrowUpRight className="text-white" size={24} />
                </div>
            </div>
        </motion.div>
    );
}