import { GridSection } from "@/components/ui/GridContainer";
import { Monitor, Smartphone, Cpu } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "High-performance web applications built with React, Next.js, and modern tools.",
        icon: Monitor,
    },
    {
        title: "Mobile Apps",
        description: "Native-quality cross-platform mobile experiences using React Native.",
        icon: Smartphone,
    },
    {
        title: "AI Solutions",
        description: "Intelligent agents, LLM integration, and smart automation for your business.",
        icon: Cpu,
    },
];

export function ServicesSection() {
    return (
        <GridSection className="text-center" hasBorderBottom={true}>
            <h2 className="text-2xl md:text-5xl font-serif text-zinc-900 mb-16 px-4">
                What I can <span className="italic text-zinc-400">help</span> with.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="group relative bg-white p-8 md:p-12 hover:bg-zinc-50 transition-colors duration-500"
                    >
                        {/* Corner Accent on Hover */}
                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[3px] border-r-[3px] border-accent-orange opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-300" />

                        <div className="inline-flex items-center justify-center w-12 h-12 bg-zinc-100 mb-6 text-zinc-900 group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                            <service.icon size={24} />
                        </div>
                        <h3 className="text-xl font-medium text-zinc-900 mb-3">{service.title}</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mx-auto">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </GridSection>
    );
}
