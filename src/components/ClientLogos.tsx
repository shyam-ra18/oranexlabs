import { cn } from "@/lib/utils";

const brands = [
    "Stripe", "OpenAI", "Anthropic", "Vercel", "DeepMind", "Nvidia", "Supabase", "Linear"
];

export function ClientLogos() {
    return (
        <section className="relative w-full border-b border-white/10 bg-[#050505] py-0 overflow-hidden">

            {/* --- GRADIENT MASKS (To fade edges) --- */}
            <div className="absolute top-0 left-0 z-20 h-full w-32 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 z-20 h-full w-32 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />

            {/* --- SCROLLING TRACKS --- */}
            <div className="flex relative w-full overflow-hidden select-none border-t border-white/10">

                {/* Track 1 */}
                <div className="flex shrink-0 min-w-full items-center animate-infinite-scroll [animation-duration:60s]">
                    {[...brands, ...brands].map((brand, i) => (
                        <LogoItem key={`t1-${brand}-${i}`} name={brand} />
                    ))}
                </div>

                {/* Track 2 (Duplicate for seamless loop) */}
                <div className="flex shrink-0 min-w-full items-center animate-infinite-scroll [animation-duration:60s]" aria-hidden="true">
                    {[...brands, ...brands].map((brand, i) => (
                        <LogoItem key={`t2-${brand}-${i}`} name={brand} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function LogoItem({ name }: { name: string }) {
    return (
        <div className={cn(
            "relative h-24 min-w-[200px] md:min-w-[280px] flex items-center justify-center",
            "border-l border-r border-white/5", // Static borders
            "cursor-default"
        )}>

            {/* The Brand Name - Static */}
            <span className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-zinc-700">
                {name}
            </span>

        </div>
    );
}