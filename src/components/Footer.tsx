
import { cn } from "@/lib/utils";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Footer() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        // Only prevent default if it's a hash link
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                // @ts-ignore
                if (window.lenis) {
                    // @ts-ignore
                    window.lenis.scrollTo(target, {
                        duration: 2.0,
                        easing: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
                    });
                } else {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <footer ref={containerRef} className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden perspective-[1000px]">
            {/* Background Watermark (Subtle) - Static for depth contrast */}
            <div className="absolute -bottom-[4%] left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03]">
                <span className="text-[15vw] md:text-[20vw] font-bold tracking-tighter text-text-primary">ORANEX</span>
            </div>

            {/* Floating Card Container - 3D Animated */}
            <motion.div
                style={{ rotateX, scale, opacity, y }}
                className="max-w-[1400px] mx-auto bg-gradient-to-t from-white/40 to-white/5 shadow-xl shadow-black/5 border border-black/5 p-8 md:p-16 relative z-10 origin-bottom"
            >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                    {/* Brand Column (Left - Spans 4 cols) */}
                    <div className="md:col-span-5 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <img src="/oranex-logo.svg" alt="Oranex" className="h-6 w-auto" />
                                <span className="font-serif font-bold text-xl tracking-tight text-zinc-900">Oranex Labs</span>
                            </div>
                            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                                Oranex Labs empowers ambitious brands to transform visions into premium digital experiences. We craft with precision, passion, and purpose.
                            </p>
                        </div>

                        {/* Socials (Desktop place) */}
                        <div className="hidden md:flex gap-4 mt-8">
                            <SocialIcon icon={Twitter} href="#" />
                            <SocialIcon icon={Instagram} href="#" />
                            <SocialIcon icon={Linkedin} href="#" />
                            <SocialIcon icon={Github} href="#" />
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:col-span-3" />

                    {/* Links Columns (Right - Spans 4 cols) */}
                    <div className="md:col-span-4 grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">Company</h4>
                            <ul className="space-y-2.5 text-sm text-zinc-500">
                                <li><a href="#services" onClick={(e) => handleScroll(e, "#services")} className="hover:text-accent-orange transition-colors">Services</a></li>
                                <li><a href="#work" onClick={(e) => handleScroll(e, "#work")} className="hover:text-accent-orange transition-colors">Case Studies</a></li>
                                <li><a href="#" className="hover:text-accent-orange transition-colors">Process</a></li>
                                <li><a href="#" className="hover:text-accent-orange transition-colors">About</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">Connect</h4>
                            <ul className="space-y-2.5 text-sm text-zinc-500">
                                <li><a href="#" className="hover:text-accent-orange transition-colors">Twitter / X</a></li>
                                <li><a href="#" className="hover:text-accent-orange transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-accent-orange transition-colors">Instagram</a></li>
                                <li><a href="mailto:hello@oranexlabs.com" className="hover:text-accent-orange transition-colors">Email</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Socials (Bottom of grid) */}
                    <div className="md:hidden flex gap-4 mt-4">
                        <SocialIcon icon={Twitter} href="#" />
                        <SocialIcon icon={Instagram} href="#" />
                        <SocialIcon icon={Linkedin} href="#" />
                        <SocialIcon icon={Github} href="#" />
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-zinc-200 my-10" />

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-medium">
                    <p>&copy; {new Date().getFullYear()} Oranex Labs. All rights reserved.</p>
                    <div className="flex gap-6">
                        <p>Designed with intention.</p>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}

function SocialIcon({ icon: Icon, href }: { icon: any, href: string }) {
    return (
        <a href={href} className="w-8 h-8 flex items-center justify-center bg-zinc-100 text-zinc-600 hover:bg-accent-orange hover:text-white transition-all duration-300">
            <Icon size={16} />
        </a>
    )
}