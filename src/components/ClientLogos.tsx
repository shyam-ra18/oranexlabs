import { GridSection } from "@/components/ui/GridContainer";

const brands = [
    "LogoIpsum", "Sisyphus", "Prometheus", "Nirvana", "Boltshift", "Quotient", "Hourglass", "Command+R"
];

export function ClientLogos() {
    return (
        <GridSection className="py-12 md:py-16 overflow-hidden" hasBorderBottom={true}>
            {/* Flex container for the marquee */}
            <div className="flex w-full overflow-hidden">
                {/* First ticker content */}
                <div className="flex flex-none items-center gap-16 md:gap-32 pr-16 md:pr-32 animate-infinite-scroll whitespace-nowrap will-change-transform">
                    {[...brands, ...brands].map((brand, i) => (
                        <span key={i} className="text-2xl md:text-3xl font-serif font-bold text-black/10 uppercase tracking-tighter hover:text-accent-orange/50 transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>

                {/* Duplicate ticker content for seamless loop */}
                <div className="flex flex-none items-center gap-16 md:gap-32 pr-16 md:pr-32 animate-infinite-scroll whitespace-nowrap will-change-transform" aria-hidden="true">
                    {[...brands, ...brands].map((brand, i) => (
                        <span key={`dup-${i}`} className="text-2xl md:text-3xl font-serif font-bold text-black/10 uppercase tracking-tighter hover:text-accent-orange/50 transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </GridSection>
    );
}
