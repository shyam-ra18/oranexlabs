import { motion } from "framer-motion";
import { GridSection } from "@/components/ui/GridContainer";
import { Terminal, Cpu, Zap, ShieldCheck } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Intelligence Gathering",
        description: "Comprehensive audit of your current technical ecosystem and product objectives.",
        icon: Terminal
    },
    {
        id: "02",
        title: "Architecture Design",
        description: "Drafting the blueprint for high-performance, scalable systems and AI workflows.",
        icon: Cpu
    },
    {
        id: "03",
        title: "Rapid Implementation",
        description: "Agile CI/CD pipelines deploying production-ready code in optimized cycles.",
        icon: Zap
    },
    {
        id: "04",
        title: "Stability Protocol",
        description: "Rigorous automated testing and security audits for maximum system uptime.",
        icon: ShieldCheck
    }
];

export function ProcessSection() {
    return (
        <GridSection id="process" className="bg-background py-32 border-b border-white/5">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-8 text-center md:text-left">
                    <div className="space-y-6">
                        <div className="text-[10px] md:text-xs font-mono text-vibranium uppercase tracking-widest">
                            Execution_Framework_v4.0
                        </div>
                        <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase leading-[0.9]">
                            Our <br className="hidden md:block" />
                            <span className="text-vibranium">Protocol</span>
                        </h2>
                    </div>
                    <div className="max-w-sm text-zinc-500 font-sans text-sm md:text-base leading-relaxed md:text-left">
                        A systematic approach to digital engineering that eliminates latency between vision and production.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group p-8 border border-white/10 sharp-edge hover:bg-surface hover:border-vibranium/30 transition-all duration-500 overflow-hidden h-full flex flex-col"
                        >
                            {/* Number Accent */}
                            <div className="absolute top-4 right-4 text-4xl font-display font-black text-white/5 group-hover:text-vibranium/10 transition-colors">
                                {step.id}
                            </div>

                            <div className="mb-8">
                                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-vibranium group-hover:bg-vibranium/10 transition-colors sharp-edge">
                                    <step.icon size={20} />
                                </div>
                            </div>

                            <h3 className="text-xl font-display font-bold text-white mb-4 uppercase  group-hover:text-vibranium transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-zinc-500 text-sm font-sans leading-relaxed group-hover:text-zinc-400 transition-colors">
                                {step.description}
                            </p>

                            {/* Background Line Accent */}
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-vibranium/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </GridSection>
    );
}
