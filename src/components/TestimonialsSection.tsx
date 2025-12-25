import { GridSection } from "@/components/ui/GridContainer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const feedback = [
    {
        quote: "The attention to detail is unmatched. They turned our complex vision into a seamless reality.",
        author: "Sarah J.",
        role: "CTO, FinFlow",
        size: "large", // Spans 2 cols, 2 rows
        delay: 0.1,
        direction: { x: -100, y: -100 }
    },
    {
        quote: "A true partner in design. The results speak for themselves.",
        author: "Michael R.",
        role: "Founder, Luxe",
        size: "medium", // Spans 1 col, 1 row
        delay: 0.2,
        direction: { x: 0, y: -100 }
    },
    {
        quote: "Incredible velocity and quality. Highly recommended.",
        author: "Elena K.",
        role: "Product Lead, AI Core",
        size: "medium",
        delay: 0.3,
        direction: { x: 100, y: -100 }
    },
    {
        quote: "They understood our brand voice immediately.",
        author: "David L.",
        role: "CMO, Vertex",
        size: "wide", // Spans 2 cols, 1 row
        delay: 0.4,
        direction: { x: -100, y: 100 }
    },
    {
        quote: "Simply the best agency experience we've had.",
        author: "Anna M.",
        role: "Director, Nexus",
        size: "medium",
        delay: 0.5,
        direction: { x: 100, y: 100 }
    },
];

export function TestimonialsSection() {
    return (
        <GridSection className="text-left overflow-hidden min-h-screen flex flex-col justify-center" hasBorderBottom={true}>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
                <div className="w-full md:w-auto">
                    <div className="inline-block px-3 py-1 border border-black/10 text-accent-orange text-xs font-medium tracking-widest uppercase mb-4">
                        Client Stories
                    </div>
                    <h2 className="text-2xl md:text-5xl font-serif text-zinc-900">
                        Detailed <span className="italic text-zinc-400">impact</span>.
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[300px_300px] gap-4 md:gap-6">
                {feedback.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: item.direction.x, y: item.direction.y, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{
                            duration: 0.8,
                            delay: item.delay,
                            ease: [0.16, 1, 0.3, 1] // Custom ease for "fly in" snap
                        }}
                        className={cn(
                            "group p-8 md:p-10 bg-white border border-black/5 hover:border-accent-orange/30 shadow-lg shadow-black/5 flex flex-col justify-between transition-colors duration-500",
                            item.size === 'large' && "md:col-span-2 md:row-span-2 bg-gradient-to-br from-white to-zinc-50",
                            item.size === 'wide' && "md:col-span-2",
                            item.size === 'medium' && "md:col-span-1"
                        )}
                    >
                        <div>
                            <div className="text-4xl text-accent-orange font-serif mb-6 opacity-30 group-hover:opacity-100 transition-opacity">"</div>
                            <p className={cn(
                                "text-zinc-600 leading-relaxed",
                                item.size === 'large' ? "text-xl md:text-3xl font-serif text-zinc-800" : "text-base md:text-lg"
                            )}>
                                {item.quote}
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                            <div>
                                <div className="text-zinc-900 font-bold">{item.author}</div>
                                <div className="text-zinc-400 text-xs uppercase tracking-wider mt-1">{item.role}</div>
                            </div>
                            {/* Company Logo Placeholder - could be an icon */}
                            <div className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-400">
                                {item.company ? item.company[0] : 'C'}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </GridSection>
    );
}
