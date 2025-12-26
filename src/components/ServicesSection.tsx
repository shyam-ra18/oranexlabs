import { useRef } from "react";
import { GridSection } from "@/components/ui/GridContainer";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Cpu, ShoppingCart, Paintbrush, PlayCircle } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "High-performance web applications built with React, Next.js, and modern tools. We focus on scalability, speed, and clean code architecture.",
        icon: Monitor,
        bg: "bg-white",
        text: "text-zinc-900",
        tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
        title: "App Development",
        description: "Native-quality cross-platform mobile experiences using React Native. We build intuitive interfaces that keep users engaged on any device.",
        icon: Smartphone,
        bg: "bg-zinc-100",
        text: "text-zinc-900",
        tags: ["iOS", "Android", "React Native", "Firebase"],
    },
    {
        title: "AI Solutions",
        description: "Intelligent agents, LLM integration, and smart automation for your business. Leverage the power of AI to transform your operations.",
        icon: Cpu,
        bg: "bg-zinc-900",
        text: "text-white",
        tags: ["OpenAI", "LangChain", "Automation", "LLMs"],
    },
    {
        title: "E-commerce",
        description: "Scaling digital storefronts with robust architectures. We build seamless shopping experiences that convert visitors into customers.",
        icon: ShoppingCart,
        bg: "bg-white",
        text: "text-zinc-900",
        tags: ["Shopify", "Stripe", "Headless", "UX"],
    },
    {
        title: "UI Design",
        description: "Beautiful, functional, and modern designs that tell your brand story. We push the boundaries of innovation through our creative UI designs.",
        icon: Paintbrush,
        bg: "bg-zinc-100",
        text: "text-zinc-900",
        tags: ["Figma", "Branding", "Prototyping", "Design Systems"],
    },
    {
        title: "Animation & Graphics",
        description: "Dynamic motion graphics and interactive elements that bring your site to life. We offer top-tier animations in various forms.",
        icon: PlayCircle,
        bg: "bg-zinc-900",
        text: "text-white",
        tags: ["Framer Motion", "Lottie", "SVG", "Motion Design"],
    },
];

export function ServicesSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <GridSection className="relative bg-[#FAFAFA]" hasBorderBottom={true}>
            <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
                <div className="text-left">
                    <div className="inline-block px-3 py-1 border border-black/10 text-accent-orange text-xs font-medium tracking-widest uppercase mb-6">
                        Services
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-medium text-zinc-900 tracking-tight leading-[1.1]">
                        We are <span className="italic text-zinc-400">experts</span> at <br />
                        providing digital solutions.
                    </h2>
                </div>
                <div className="max-w-md pt-12 md:pt-24 font-sans text-zinc-500">
                    <p className="leading-relaxed">
                        From design to deployment, we provide end-to-end digital services that help your business scale and succeed in a competitive landscape.
                    </p>
                </div>
            </div>

            <div ref={containerRef} className="relative flex flex-col gap-10 md:gap-20">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} total={services.length} />
                ))}
            </div>
        </GridSection>
    );
}

function ServiceCard({ service, index, total }: { service: typeof services[0], index: number, total: number }) {
    return (
        <div
            className="sticky top-24 md:top-32 w-full mb-10 md:mb-20"
            style={{
                zIndex: index + 1,
                height: "auto"
            }}
        >
            <motion.div
                className={`relative w-full ${service.bg} border border-zinc-200 rounded-none overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[400px] md:min-h-[500px]`}
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
                <div className="p-8 md:p-16 flex-1 flex flex-col justify-between">
                    <div>
                        <div className={`inline-flex items-center justify-center p-4 bg-zinc-400/10 mb-8 ${service.text}`}>
                            <service.icon size={32} />
                        </div>
                        <h3 className={`text-4xl md:text-6xl font-display font-medium mb-6 ${service.text}`}>
                            {service.title}
                        </h3>
                        <p className={`text-lg md:text-xl max-w-xl leading-relaxed mb-10 ${service.text === 'text-white' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                            {service.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto">
                        {service.tags.map((tag) => (
                            <span
                                key={tag}
                                className={`text-xs uppercase tracking-widest font-medium px-4 py-2 border ${service.text === 'text-white' ? 'border-white/10 text-white/60' : 'border-black/5 text-zinc-500'}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex flex-1 relative items-center justify-center overflow-hidden h-full">
                    <div className={`absolute inset-0 opacity-5 ${service.text === 'text-white' ? 'bg-white' : 'bg-black'}`} />
                    <motion.div
                        animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 p-20"
                    >
                        <service.icon size={260} strokeWidth={0.5} className={`${service.text === 'text-white' ? 'text-white/20' : 'text-zinc-900/10'}`} />
                        <div className={`absolute top-0 right-0 w-20 h-20 border-t border-r ${service.text === 'text-white' ? 'border-white/20' : 'border-zinc-900/20'}`} />
                        <div className={`absolute bottom-0 left-0 w-20 h-20 border-b border-l ${service.text === 'text-white' ? 'border-white/20' : 'border-zinc-900/20'}`} />
                    </motion.div>
                </div>

                <div className={`absolute top-8 right-8 text-sm font-sans tracking-widest ${service.text === 'text-white' ? 'text-white/30' : 'text-zinc-400'}`}>
                    0{index + 1} / 0{total}
                </div>
            </motion.div>
        </div>
    );
}
