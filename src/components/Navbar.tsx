import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, type MouseEvent as ReactMouseEvent } from "react";


const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
    { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = (e: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const target = document.querySelector(href);
        if (target) {
            // @ts-ignore
            if (window.lenis) {
                // @ts-ignore
                window.lenis.scrollTo(target, {
                    duration: 1.5,
                    easing: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
                });
            } else {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="fixed top-4 md:top-6 inset-x-0 mx-auto max-w-5xl z-50 px-4 md:px-0"
            >
                <div className="relative w-full bg-background/90 backdrop-blur-xl border border-white/10 flex items-center justify-between px-6 py-4 shadow-2xl sharp-edge">

                    {/* 1. Brand Logo */}
                    <a
                        href="#"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-3 group relative z-50"
                    >
                        <div className="w-8 h-8 bg-vibranium flex items-center justify-center sharp-edge group-hover:bg-white transition-colors duration-300">
                            <span className="font-bold text-black">O</span>
                        </div>
                        <span className="text-sm font-display font-bold tracking-[0.15em] text-white">
                            ORANEX<span className="text-vibranium">.LABS</span>
                        </span>
                    </a>

                    {/* 2. Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="relative py-2 text-[11px] font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-[0.2em] group overflow-hidden"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-vibranium to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                            </a>
                        ))}
                    </div>

                    {/* 3. Actions */}
                    <div className="flex items-center gap-4 relative z-50">
                        <a
                            href="#contact"
                            onClick={(e) => handleScroll(e, "#contact")}
                            className="hidden md:block px-6 py-2.5 bg-white text-black font-bold text-[10px] uppercase tracking-[0.2em] sharp-edge hover:bg-vibranium hover:text-white transition-all duration-300"
                        >
                            Start Project
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white hover:text-vibranium transition-colors p-2"
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 pointer-events-none" />
                </div>
            </motion.nav>

            {/* 4. PREMIUM MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background pt-32 px-0 md:hidden flex flex-col"
                    >
                        <div className="flex flex-col w-full h-full overflow-y-auto">

                            {/* Navigation List */}
                            <div className="flex flex-col w-full px-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.05), duration: 0.4 }}
                                        className="group w-full"
                                    >
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleScroll(e, link.href)}
                                            className="flex items-center gap-6 py-6 w-full"
                                        >
                                            {/* The Purple Square Marker */}
                                            <div className="w-1.5 h-1.5 bg-vibranium sharp-edge flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />

                                            {/* Text */}
                                            <span className="text-xl font-display font-bold text-white uppercase tracking-wider group-hover:text-vibranium transition-colors">
                                                {link.name}
                                            </span>
                                        </a>

                                        {/* Thin Gradient Separator Line */}
                                        <div className="w-full h-[1px] bg-gradient-to-r from-vibranium/40 via-vibranium/10 to-transparent" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Action Area */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-12 px-6"
                            >
                                <a
                                    href="#contact"
                                    onClick={(e) => handleScroll(e, "#contact")}
                                    className="group flex items-center justify-between w-full py-6 border-b border-white/10"
                                >
                                    <span className="text-sm font-mono text-vibranium uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                        Initiate Request
                                    </span>
                                    <div className="w-8 h-8 flex items-center justify-center bg-vibranium text-black sharp-edge group-hover:bg-white transition-colors">
                                        <ArrowRight size={16} />
                                    </div>
                                </a>
                                {/* Gradient Line for Bottom Action */}
                                <div className="w-full h-[1px] bg-gradient-to-r from-vibranium to-transparent" />
                            </motion.div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}