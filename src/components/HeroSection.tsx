import { GridSection } from "@/components/ui/GridContainer";
import { motion } from "framer-motion";

export function HeroSection() {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            // Check if Lenis is on window (we'll ensure SmoothScroll puts it there)
            // @ts-ignore
            if (window.lenis) {
                // @ts-ignore
                // "slow high slow" -> easeInOutExpo or similar with longer duration
                window.lenis.scrollTo(target, {
                    duration: 2.0,
                    easing: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2 // EaseInOutCubic
                });
            } else {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <GridSection className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden" hasBorderBottom={true}>

            {/* Background Animated Rays/Glass Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Central warmth */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-orange/5 blur-[100px] rounded-full" />

                {/* Animated Ray 1 */}
                <motion.div
                    animate={{ rotate: [0, 5, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] left-[20%] w-[400px] h-[800px] bg-gradient-to-b from-white/80 to-transparent rotate-12 blur-3xl opacity-40 mix-blend-overlay"
                />
                {/* Animated Ray 2 */}
                <motion.div
                    animate={{ rotate: [0, -5, 0], scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -top-[20%] right-[20%] w-[500px] h-[900px] bg-gradient-to-b from-accent-orange/10 to-transparent -rotate-12 blur-3xl opacity-30"
                />
            </div>


            {/* Hero Copy - Centered and confident */}
            <div className="text-center space-y-8 max-w-4xl mx-auto relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-3 py-1 border border-black/10 text-accent-orange text-xs font-medium tracking-widest uppercase mb-4"
                >
                    Premier Digital Agency
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-zinc-900 leading-tight"
                >
                    Designing <span className="italic text-zinc-400">quiet</span>, confident <br />
                    digital experiences.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    Oranex Labs creates premium web applications, mobile experiences, and AI solutions that elevate your brand story.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a
                        onClick={(e) => handleScroll(e, "#work")}
                        href="#work" className="px-8 py-3 bg-accent-orange text-white font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                        View Our Work
                    </a>
                    <a
                        onClick={(e) => handleScroll(e, "#contact")}
                        href="#contact" className="px-8 py-3 border border-zinc-200 text-zinc-600 font-medium hover:bg-zinc-50 transition-colors">
                        Start a Project
                    </a>
                </motion.div>
            </div>

            {/* Bottom fade - Adjusted for light mode */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none" />
        </GridSection>
    );
}
