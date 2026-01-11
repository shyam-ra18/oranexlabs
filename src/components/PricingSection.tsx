import { GridSection } from "@/components/ui/GridContainer";
import { cn } from "@/lib/utils";
import { Check, Sparkle, Zap } from "lucide-react";
import { useState } from "react";

// --- SUBSCRIPTION PLANS ---
const plans = [
    {
        name: "Core",
        price: 1299,
        yearlyPrice: 12500, // Approx 2 months free
        description: "Maintenance & small feature iteration.",
        features: [
            "One request at a time",
            "Web Development (React/Next.js)",
            "UI/UX Improvements",
            "Bug Fixes & Maintenance",
            "48-hour Turnaround"
        ],
        cta: "Subscribe to Core",
        highlight: false,
    },
    {
        name: "Growth",
        price: 2999,
        yearlyPrice: 28800,
        description: "Active full-stack development & shipping.",
        features: [
            "One active request at a time",
            "Web & Mobile Apps (React Native)",
            "API & Backend Integration",
            "App Store Submission",
            "24-48h Turnaround"
        ],
        cta: "Subscribe to Growth",
        highlight: true, // Recommended for Dev
    },
    {
        name: "Scale",
        price: 5999,
        yearlyPrice: 57500,
        description: "AI-Native solutions & complex infrastructure.",
        features: [
            "Two active requests at a time",
            "AI Agents & LLM Integration",
            "DevOps & Cloud Architecture",
            "Priority Support (Slack)",
            "Same-day updates available"
        ],
        cta: "Subscribe to Scale",
        highlight: false,
    },
];

export function PricingSection() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

    return (
        <GridSection className="py-32 bg-[#050505] flex flex-col items-center" id="pricing">

            {/* 1. Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 px-6">
                <h2 className="text-3xl md:text-6xl font-display font-bold text-white uppercase leading-[1.1] md:leading-none mb-6">
                    Engineering {" "} as a <br className="hidden md:block" />
                    <span className="text-vibranium">
                        Service
                    </span>
                </h2>
                <p className="text-zinc-500 font-sans text-base md:text-lg leading-relaxed">
                    A dedicated development team for a flat monthly fee.<br />
                    Pause or cancel anytime. No hidden contracts.
                </p>
            </div>

            {/* 2. Centered Toggle Switch */}
            <div className="flex flex-col items-center mb-20">
                <div className="relative p-1 bg-[#0A0A0A] border border-white/10 sharp-edge inline-flex">
                    <button
                        onClick={() => setBilling("monthly")}
                        className={cn(
                            "relative z-10 px-8 py-3 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 min-w-[120px]",
                            billing === "monthly" ? "text-black" : "text-zinc-500 hover:text-white"
                        )}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBilling("yearly")}
                        className={cn(
                            "relative z-10 px-8 py-3 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300 min-w-[120px]",
                            billing === "yearly" ? "text-black" : "text-zinc-500 hover:text-white"
                        )}
                    >
                        Yearly
                    </button>

                    {/* Sliding White Pill */}
                    <div
                        className={cn(
                            "absolute top-1 bottom-1 bg-white sharp-edge transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                            billing === "monthly" ? "left-1 w-[calc(50%-4px)]" : "left-[calc(50%+4px)] w-[calc(50%-8px)]"
                        )}
                    />
                </div>

                {/* Savings Badge */}
                <div className={cn(
                    "mt-4 text-[10px] font-mono text-[#8B5CF6] uppercase tracking-widest transition-opacity duration-300 flex items-center gap-2",
                    billing === "yearly" ? "opacity-100" : "opacity-0"
                )}>
                    <Sparkle size={12} /> Yearly Savings Applied (20% OFF)
                </div>
            </div>

            {/* 3. The 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl px-6">
                {plans.map((plan) => {
                    const displayPrice = billing === "monthly" ? plan.price : Math.round(plan.yearlyPrice / 12);

                    return (
                        <div
                            key={plan.name}
                            className={cn(
                                "group relative p-8 border flex flex-col sharp-edge transition-all duration-500",
                                plan.highlight
                                    ? "bg-[#8B5CF6]/5 border-[#8B5CF6] z-10 md:scale-105 shadow-[0_0_40px_-10px_rgba(139,92,246,0.15)]"
                                    : "bg-[#0A0A0A] border-white/10 hover:border-white/30 hover:bg-[#0A0A0A]/80"
                            )}
                        >
                            {/* Recommended Badge (Center Card) */}
                            {plan.highlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8B5CF6] text-white text-[9px] uppercase font-mono font-bold px-3 py-1 tracking-widest sharp-edge shadow-[0_0_15px_-3px_#8B5CF6]">
                                    Best_Value
                                </div>
                            )}

                            {/* Header */}
                            <div className="mb-8 text-center">
                                <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase ">
                                    {plan.name}
                                </h3>
                                <p className="text-zinc-500 text-xs font-sans leading-relaxed h-8">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="flex justify-center items-baseline gap-1 mb-8 border-b border-white/5 pb-8">
                                <span className="text-zinc-400 font-mono text-base">$</span>
                                <span className="text-4xl md:text-5xl font-display font-bold text-white">
                                    {displayPrice.toLocaleString()}
                                </span>
                                <span className="text-zinc-600 font-mono text-xs">/mo</span>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 text-xs text-zinc-400 font-sans group-hover:text-zinc-300 transition-colors">
                                        <div className={cn(
                                            "w-4 h-4 flex items-center justify-center sharp-edge mt-0.5 flex-shrink-0",
                                            plan.highlight ? "border border-vibranium text-vibranium" : "border border-white/20 text-zinc-500"
                                        )}>
                                            {plan.highlight ? <Zap size={10} /> : <Check size={10} strokeWidth={3} />}
                                        </div>
                                        <span className="uppercase tracking-wide leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <button className={cn(
                                "w-full py-4 text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all border sharp-edge relative overflow-hidden group/btn",
                                plan.highlight
                                    ? "bg-[#8B5CF6] border-[#8B5CF6] text-white hover:bg-white hover:text-black hover:border-white"
                                    : "bg-transparent border-white/20 text-zinc-400 hover:border-[#8B5CF6] hover:text-white"
                            )}>
                                <span className="relative z-10">{plan.cta}</span>
                                {/* Hover Fill Effect */}
                                <div className={cn(
                                    "absolute inset-0 transform translate-y-full transition-transform duration-300 ease-out group-hover/btn:translate-y-0",
                                    plan.highlight ? "bg-white" : "bg-[#8B5CF6]"
                                )} />
                            </button>
                        </div>
                    );
                })}
            </div>
        </GridSection>
    );
}