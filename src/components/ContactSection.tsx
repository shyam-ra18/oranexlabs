import { GridSection } from "@/components/ui/GridContainer";

export function ContactSection() {
    return (
        <GridSection className="text-center" hasBorderBottom={true}>
            <div className="max-w-xl mx-auto">
                <div className="inline-block px-3 py-1 border border-black/10 text-accent-orange text-xs font-medium tracking-widest uppercase mb-4">
                    Get in Touch
                </div>
                <h2 className="text-2xl md:text-5xl font-serif text-zinc-900 mb-6 px-4">
                    Ready to start your <br /><span className="italic text-zinc-400">next project?</span>
                </h2>
                <p className="text-zinc-500 mb-12">
                    Tell us about your vision. We'll help you build it.
                </p>

                <form className="space-y-4 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-white border border-zinc-200 p-4 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all shadow-sm"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Email</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-white border border-zinc-200 p-4 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs uppercase text-zinc-500 font-bold tracking-wider">Message</label>
                        <textarea
                            placeholder="Tell us about your project..."
                            rows={4}
                            className="w-full bg-white border border-zinc-200 p-4 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all shadow-sm resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-accent-orange text-white font-semibold uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </GridSection>
    );
}
