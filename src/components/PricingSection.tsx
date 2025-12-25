import { useState } from "react";
import { GridSection } from "@/components/ui/GridContainer";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Essential",
        price: 950,
        description: "Simple, focused, effective.",
        features: ["Custom landing page", "Basic SEO setup", "Mobile responsive", "1 week support"],
        cta: "Start with Essential",
    },
    {
        name: "Elevate",
        price: 1950,
        description: "Best for growing businesses and creative studios.",
        features: ["Multi-page application", "Advanced SEO & Animations", "CMS Integration", "1 month support"],
        cta: "Start with Elevate",
        highlight: true,
    },
];

export function PricingSection() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

    return (
        <GridSection className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 text-center">
                Two ways to <span className="italic text-zinc-500">begin</span>.
            </h2>

            {/* Toggle - Sharp corners */}
            <div className="flex items-center p-1 bg-white/5 border border-white/5 mb-16">
                <button
                    onClick={() => setBilling("monthly")}
                    className={cn(
                        "px-6 py-2 text-sm font-medium transition-all",
                        billing === "monthly" ? "bg-accent-orange text-white" : "text-zinc-400 hover:text-white"
                    )}
                >
                    Monthly
                </button>
                <button
                    onClick={() => setBilling("yearly")}
                    className={cn(
                        "px-6 py-2 text-sm font-medium transition-all",
                        billing === "yearly" ? "bg-accent-orange text-white" : "text-zinc-400 hover:text-white"
                    )}
                >
                    Yearly
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={cn(
                            "p-8 border transition-all duration-300 flex flex-col hover:border-accent-orange/50",
                            plan.highlight
                                ? "bg-white/[0.02] border-accent-orange/30 relative" // removed shadow for cleaner look
                                : "bg-transparent border-white/5"
                        )}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 right-0 bg-accent-orange text-white text-[10px] uppercase font-bold px-3 py-1">
                                Best Value
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                            <p className="text-zinc-500 text-sm mb-6">{plan.description}</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-serif text-white">${plan.price}</span>
                                {billing === "monthly" && <span className="text-zinc-500 text-sm">/mo</span>}
                            </div>
                        </div>

                        <div className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                                    <div className="w-5 h-5 bg-white/5 flex items-center justify-center text-accent-orange">
                                        <Check size={12} />
                                    </div>
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <button className={cn(
                            "w-full py-4 text-sm font-semibold transition-all border border-transparent",
                            plan.highlight
                                ? "bg-accent-orange text-white hover:bg-orange-600"
                                : "bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
                        )}>
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>
        </GridSection>
    );
}
