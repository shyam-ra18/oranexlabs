import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-background border-t border-white/10">
            <div className="max-w-[1440px] mx-auto">

                {/* --- MAIN FOOTER GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">

                    {/* Left: Brand Identity */}
                    <div className="relative group p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors">
                        {/* THE HOVER GRADIENT LINE */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-vibranium to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative flex items-center justify-start overflow-hidden">
                                <img
                                    src="/oranex-logo.svg"
                                    alt="Oranex Logo"
                                    className="w-[50px] md:w-[65px] h-auto"
                                />
                            </div>
                            <h2 className="text-xl md:text-2xl font-display font-bold text-white uppercase cursor-pointer tracking-wider pt-1">
                                Oranex Labs
                            </h2>
                        </div>
                        <div className="text-zinc-500 text-sm font-mono uppercase tracking-widest">
                            Engineering the <span className="text-vibranium/80">Autonomous</span> Future
                        </div>
                    </div>

                    {/* Right: Socials & Contact */}
                    <div className="relative group p-8 md:p-12 flex flex-col justify-center hover:bg-white/[0.02] transition-colors">
                        {/* THE HOVER GRADIENT LINE */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-vibranium to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="space-y-8">
                            <div>
                                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">
                                    Connect_Deep
                                </div>
                                <div className="flex gap-4">
                                    <SocialIcon icon={Twitter} />
                                    <SocialIcon icon={Linkedin} />
                                    <SocialIcon icon={Github} />
                                    <SocialIcon icon={Instagram} />
                                </div>
                            </div>

                            {/* Separator Line */}
                            <div className="w-full h-px bg-white/10" />

                            <div>
                                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">
                                    New Business
                                </div>
                                <a href="mailto:hello@oranexlabs.com" className="text-lg md:text-xl text-white font-display uppercase hover:text-vibranium transition-colors flex items-center gap-2">
                                    hello@oranexlabs.com <ArrowUpRight size={18} className="text-vibranium" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- ROW 3: Legal & Metadata --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:px-12 py-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest hover:text-zinc-500 transition-colors">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4 md:mb-0">
                        <span>&copy; 2026 Oranex Labs Inc.</span>
                        <a href="#" className="hover:text-vibranium transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-vibranium transition-colors">Terms of Service</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-vibranium animate-pulse rounded-full" />
                        <span>All Systems Operational</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}

// --- SUB-COMPONENTS ---

function SocialIcon({ icon: Icon }: { icon: any }) {
    return (
        <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-vibranium hover:border-vibranium hover:text-white transition-all duration-300 sharp-edge">
            <Icon size={18} />
        </a>
    )
}