import { cn } from "@/lib/utils";
// @ts-ignore
// Actually, since we set up Lenis in SmoothScroll.tsx, we need a way to access that instance or just rely on native behavior if we can't access it.
// However, the user specifically asked for "slow high slow" scroll on click.
// We can use a custom scroll function here if we don't have global access to the Lenis instance.

// Let's try to grab lenis from window if attached, or just use a custom scrollTo implementation.
// For now, simpler approach: The SmoothScroll component sets up Lenis. We can dispatch a custom event to it, or make it global.
// A common pattern is to put Lenis on window.lenis.


export function Navbar() {

    const navLinks = [
        { name: "WORK", href: "#work" },
        { name: "SERVICES", href: "#services" },
        { name: "TESTIMONIALS", href: "#testimonials" },
    ];

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
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90vw] md:max-w-fit">
            <nav
                className={cn(
                    "flex items-center justify-between md:justify-start gap-1 p-1 bg-white/80 backdrop-blur-md border border-black/5 shadow-xl shadow-black/5 transition-all duration-300 rounded-lg md:rounded-none" // Added rounded-lg for mobile aesthetics if needed, or stick to sharp. Staying sharp as per guidelines.
                )}
            >
                <div className="px-4 py-2 hover:bg-black/5 transition-all cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                    <img src="/oranex-logo.svg" alt="Oranex Labs" className="h-4 w-auto" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center">
                    <div className="w-[1px] h-4 bg-black/10 mx-1" />
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="px-4 py-2 text-[10px] md:text-xs font-bold text-zinc-500 hover:text-black hover:bg-black/5 transition-all uppercase tracking-wider"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="w-[1px] h-4 bg-black/10 mx-1" />
                </div>

                {/* Mobile CTA (Directly visible, no menu for simplicity as per requirement to fix overlap) */}
                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "#contact")}
                    className="px-4 py-2 text-[10px] md:text-xs font-bold text-white bg-black hover:bg-zinc-800 transition-all uppercase tracking-wider shadow-lg ml-auto md:ml-0"
                >
                    Start a Project
                </a>
            </nav>
        </div>
    );
}
