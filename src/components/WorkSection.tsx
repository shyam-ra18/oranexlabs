import { GridSection } from "@/components/ui/GridContainer";

const projects = [
    {
        title: "Lumina Finance",
        category: "Fintech Web App",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        size: "large"
    },
    {
        title: "Apex Architecture",
        category: "Portfolio Site",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop",
        size: "small"
    },
    {
        title: "Vortex AI",
        category: "SaaS Dashboard",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
        size: "small"
    },
    {
        title: "Echo Sound",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1000&auto=format&fit=crop",
        size: "wide"
    }
];

export function WorkSection() {
    return (
        <GridSection className="text-left" hasBorderBottom={true}>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
                <div>
                    <div className="inline-block px-3 py-1 border border-black/10 text-accent-orange text-xs font-medium tracking-widest uppercase mb-4">
                        Selected Work
                    </div>
                    <h2 className="text-2xl md:text-5xl font-serif text-zinc-900">
                        Case <span className="italic text-zinc-400">studies</span>.
                    </h2>
                </div>
                <a href="#" className="hidden md:block text-sm text-zinc-600 hover:text-accent-orange transition-colors">
                    View All Projects &rarr;
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className={`group relative aspect-[4/3] overflow-hidden bg-zinc-100 ${project.size === 'wide' ? 'md:col-span-2 aspect-[2/1]' : ''}`}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />

                        {/* Overlay Content - Keeping dark overlay for text readability but only on bottom */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-end items-start bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-accent-orange text-xs uppercase tracking-widest font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {project.category}
                                </p>
                                <h3 className="text-2xl md:text-3xl font-serif text-white">{project.title}</h3>
                            </div>
                        </div>

                        {/* Arrow Icon - White on image is fine */}
                        <div className="absolute top-8 right-8 w-10 h-10 bg-white text-black flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                            &nearr;
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <a href="#" className="text-sm text-zinc-600 hover:text-accent-orange transition-colors">
                    View All Projects &rarr;
                </a>
            </div>
        </GridSection>
    );
}
