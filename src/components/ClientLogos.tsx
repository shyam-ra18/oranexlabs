

const brands = [
    "Stripe", "OpenAI", "Anthropic", "Vercel", "DeepMind", "Nvidia", "Supabase", "Linear"
];

export function ClientLogos() {
    return (
        <section className="relative w-full border-t border-b border-white/10 overflow-hidden">

            {/* --- GRADIENT FADES (Left & Right) --- */}
            {/* Left Fade */}
            <div className="absolute top-0 left-0 z-20 h-full w-24 md:w-48 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            {/* Right Fade */}
            <div className="absolute top-0 right-0 z-20 h-full w-24 md:w-48 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            {/* --- SCROLLING TRACKS --- */}
            <div className="flex relative w-full overflow-hidden select-none">
                {/* Track 1 */}
                <div className="flex shrink-0 min-w-full items-center justify-around animate-infinite-scroll [animation-duration:80s]">
                    {[...brands, ...brands].map((brand, i) => (
                        <LogoCell key={`t1-${brand}-${i}`} name={brand} />
                    ))}
                </div>

                {/* Track 2 */}
                <div className="flex shrink-0 min-w-full items-center justify-around animate-infinite-scroll [animation-duration:80s]" aria-hidden="true">
                    {[...brands, ...brands].map((brand, i) => (
                        <LogoCell key={`t2-${brand}-${i}`} name={brand} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function LogoCell({ name }: { name: string }) {
    return (
        <div className="relative group flex items-center justify-center w-[200px] md:w-[280px] h-32 border-r border-white/10 bg-zinc-900/40 transition-colors hover:bg-white/[0.02]">

            {/* --- The "Circuit Nodes" (Corner accents) --- */}

            {/* Top Left Node */}
            <div className="absolute -top-[1.5px] -left-[1.5px] w-[2px] h-[10px] bg-zinc-800 group-hover:bg-vibranium group-hover:shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all duration-300 z-10" />
            <div className="absolute -top-[1.5px] -left-[1.5px] w-[10px] h-[2px] bg-zinc-800 group-hover:bg-vibranium group-hover:shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all duration-300 z-10" />

            {/* Bottom Left Node */}
            <div className="absolute -bottom-[1.5px] -left-[1.5px] w-[2px] h-[10px] bg-zinc-800 group-hover:bg-vibranium group-hover:shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all duration-300 z-10" />
            <div className="absolute -bottom-[1.5px] -left-[1.5px] w-[10px] h-[2px] bg-zinc-800 group-hover:bg-vibranium group-hover:shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all duration-300 z-10" />

            {/* Top Right Node */}
            <div className="absolute -top-[1.5px] -right-[1.5px] w-[10px] h-[2px] bg-zinc-800 group-hover:bg-vibranium group-hover:shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all duration-300 z-10" />
            <div className="absolute -top-[1.5px] -right-[1.5px] w-[2px] h-[10px] bg-zinc-800 group-hover:bg-vibranium group-hover:shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all duration-300 z-10" />

            {/* Bottom Right Node */}
            <div className="absolute -bottom-[1.5px] -right-[1.5px] w-[10px] h-[2px] bg-zinc-800 group-hover:bg-vibranium group-hover:shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all duration-300 z-10" />
            <div className="absolute -bottom-[1.5px] -right-[1.5px] w-[2px] h-[10px] bg-zinc-800 group-hover:bg-vibranium group-hover:shadow-[0_0_8px_rgba(139,92,246,0.5)] transition-all duration-300 z-10" />

            {/* --- The Logo/Text --- */}
            <span className="text-xl md:text-2xl font-display font-bold text-zinc-600 uppercase  group-hover:text-white transition-colors duration-300 cursor-default">
                {name}
            </span>
        </div>
    );
}