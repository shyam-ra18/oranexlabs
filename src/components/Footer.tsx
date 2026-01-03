
import { Twitter, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-background border-t border-white/10">
            <div className="max-w-[1440px] mx-auto">

                {/* --- ROW 1: Navigation Links (4 Columns) --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 border-b border-white/10">
                    <FooterColumn
                        title="Services"
                        links={["Web Platforms", "Mobile Engineering", "AI Agent Systems", "Cloud Architecture"]}
                    />
                    <FooterColumn
                        title="Company"
                        links={["About Oranex", "Case Studies", "Careers", "Contact"]}
                    />
                    <FooterColumn
                        title="Resources"
                        links={["Engineering Blog", "Open Source", "System Status", "Brand Assets"]}
                    />

                    {/* Social Column */}
                    <div className="relative group p-8 md:p-12 border-b md:border-b-0 border-white/10 flex flex-col justify-between h-full hover:bg-white/[0.02] transition-colors">
                        {/* THE HOVER GRADIENT LINE */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-vibranium to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="text-xs font-mono text-vibranium uppercase tracking-[0.2em] mb-8">
                            Social_Grid
                        </div>
                        <div className="flex gap-4">
                            <SocialIcon icon={Twitter} />
                            <SocialIcon icon={Linkedin} />
                            <SocialIcon icon={Github} />
                            <SocialIcon icon={Instagram} />
                        </div>
                    </div>
                </div>

                {/* --- ROW 2: Brand & Contact (2 Columns) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">

                    {/* Left: Brand Identity */}
                    <div className="relative group p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors">
                        {/* THE HOVER GRADIENT LINE */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-vibranium to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-vibranium sharp-edge flex items-center justify-center">
                                <span className="text-white font-bold text-lg">O</span>
                            </div>
                            <h2 className="text-2xl font-display font-bold text-white tracking-tight uppercase group-hover:text-vibranium transition-colors">
                                Oranex Labs
                            </h2>
                        </div>
                        <div className="space-y-1 text-zinc-500 text-sm font-sans">
                            <p>Global HQ: San Francisco, CA</p>
                            <p>Engineering: Pune, MH, India</p>
                        </div>
                    </div>

                    {/* Right: Direct Contact */}
                    <div className="relative group p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-white/[0.02] transition-colors">
                        {/* THE HOVER GRADIENT LINE */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-vibranium to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div>
                            <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">
                                New Business
                            </div>
                            <a href="mailto:hello@oranexlabs.com" className="text-xl md:text-2xl text-white font-display uppercase hover:text-vibranium transition-colors flex items-center gap-2">
                                hello@oranexlabs.com <ArrowUpRight size={18} className="text-vibranium" />
                            </a>
                        </div>
                        <div>
                            <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">
                                Emergency Ops
                            </div>
                            <div className="text-zinc-400 font-mono text-sm">
                                +1 (415) 555-0199
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

function FooterColumn({ title, links }: { title: string, links: string[] }) {
    return (
        <div className="relative group p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors">
            {/* THE HOVER GRADIENT LINE */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-vibranium to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h4 className="text-xs font-mono text-vibranium uppercase tracking-[0.2em] mb-8">
                {title}
            </h4>
            <ul className="space-y-4">
                {links.map((link, i) => (
                    <li key={i}>
                        <a href="#" className="text-zinc-400 text-sm font-bold uppercase tracking-wide hover:text-white hover:pl-2 transition-all duration-300 block">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function SocialIcon({ icon: Icon }: { icon: any }) {
    return (
        <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-vibranium hover:border-vibranium hover:text-white transition-all duration-300 sharp-edge">
            <Icon size={18} />
        </a>
    )
}