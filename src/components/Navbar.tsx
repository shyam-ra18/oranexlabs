import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect, type MouseEvent as ReactMouseEvent } from "react";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
    { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Track scroll for sticky transition
    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    const handleScroll = (e: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out",
                    isScrolled
                        ? "py-4 md:py-6 px-4 md:px-8"
                        : "py-0 px-0"
                )}
            >
                <div className={cn(
                    "relative w-full mx-auto transition-all duration-500 ease-in-out",
                    isScrolled
                        ? "max-w-7xl bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl px-6 md:px-10 py-3"
                        : "max-w-[1440px] bg-transparent border-b border-white/10 px-6 md:px-12 py-6"
                )}>
                    <div className="flex items-center justify-between">
                        {/* 1. Logo Section */}
                        <a
                            href="#"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center gap-4 group relative z-50"
                        >
                            <div className="relative flex items-center justify-start overflow-hidden">
                                <img
                                    src="/oranex-logo.svg"
                                    alt="Oranex Logo"
                                    className="w-[35px] md:w-[45px] h-auto transition-all duration-300"
                                />
                            </div>
                            <span className={cn(
                                "text-white text-xs md:text-sm font-display font-bold tracking-[0.2em] transition-opacity duration-300",
                                isScrolled ? "opacity-100" : "opacity-0 md:opacity-100"
                            )}>
                                ORANEX<span className="text-vibranium">.LABS</span>
                            </span>
                        </a>

                        {/* 2. Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className="relative py-2 text-[10px] font-bold text-zinc-400 hover:text-white transition-colors uppercase tracking-[0.2em] group overflow-hidden"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-vibranium to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                                </a>
                            ))}
                        </div>

                        {/* 3. Actions */}
                        <div className="flex items-center gap-6 relative z-50">
                            <a
                                href="#contact"
                                onClick={(e) => handleScroll(e, "#contact")}
                                className={cn(
                                    "px-6 py-2.5 font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300",
                                    isScrolled
                                        ? "bg-white text-black hover:bg-vibranium hover:text-white"
                                        : "bg-vibranium text-white hover:bg-white hover:text-black"
                                )}
                            >
                                Start Project
                            </a>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden text-white hover:text-vibranium transition-colors p-2"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Decorative Corner Accents (Visible only when stuck) */}
                    <AnimatePresence>
                        {isScrolled && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 pointer-events-none"
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 pointer-events-none"
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 pointer-events-none"
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 pointer-events-none"
                                />
                            </>
                        )}
                    </AnimatePresence>
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
                            <div className="flex flex-col w-full px-6 pt-8">
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
                                    <div className="w-10 h-10 flex items-center justify-center bg-vibranium text-black sharp-edge group-hover:bg-white transition-colors">
                                        <ArrowRight size={18} />
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