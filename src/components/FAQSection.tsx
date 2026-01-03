import { GridSection } from "@/components/ui/GridContainer";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Most high-impact systems are architected and deployed within 4-12 weeks. We operate in high-velocity sprints to maintain market momentum."
    },
    {
        question: "Do you handle both architecture and implementation?",
        answer: "Yes. We providing end-to-end full-stack engineering, from core architecture and AI model integration to premium front-end delivery."
    },
    {
        question: "What is your tech stack of choice?",
        answer: "We are industry-agnostic but favor high-performance tools: React/Next.js, Node.js/Go, Python for AI, and Rust/Solidity for specialized protocols."
    },
    {
        question: "How do you ensure code quality?",
        answer: "100% test coverage, strict TypeScript enforcement, and multi-stage peer reviews are standard in our internal protocol."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Absolutely. We offer retained engineering tiers to ensure system uptime, security patching, and iterative feature development."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <GridSection id="faq" className="w-full bg-background border-t border-b border-white/10 p-0">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12">

                    {/* --- LEFT COLUMN: Sticky Header (Cols 1-5) --- */}
                    <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 relative">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <h2 className="text-5xl md:text-6xl font-display font-bold text-white uppercase  leading-[0.9]">
                                Process <br />
                                <span className="text-vibranium">Queries</span>
                            </h2>
                            <p className="text-zinc-500 text-lg max-w-sm font-sans leading-relaxed">
                                Technical clarity regarding our engineering standards, engagement models, and delivery protocols.
                            </p>

                            {/* Decorative Line */}
                            <div className="w-12 h-[1px] bg-vibranium" />

                            <div className="text-xs font-mono text-vibranium uppercase tracking-widest pt-4">
                                System_FAQs_v2.0
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: FAQ Grid List (Cols 6-12) --- */}
                    <div className="lg:col-span-7">
                        {faqs.map((faq, idx) => (
                            <FAQItem
                                key={idx}
                                index={idx}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === idx}
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </GridSection>
    );
}

function FAQItem({ question, answer, isOpen, onClick, index }: { question: string, answer: string, isOpen: boolean, onClick: () => void, index: number }) {
    return (
        <div className="border-b border-white/10 last:border-b-0">
            <button
                onClick={onClick}
                className="w-full flex items-start justify-between py-10 px-8 md:px-12 text-left group transition-all duration-300"
            >
                <div className="flex items-start gap-6 md:gap-8 pr-8">
                    {/* Index Number */}
                    <span className={cn(
                        "text-xs font-mono mt-1.5 uppercase tracking-widest transition-colors duration-300",
                        isOpen ? "text-vibranium" : "text-zinc-600 group-hover:text-zinc-400"
                    )}>
                        {(index + 1).toString().padStart(2, '0')}
                    </span>

                    {/* Question Title */}
                    <span className={cn(
                        "text-xl md:text-2xl font-display font-bold uppercase  transition-colors duration-300",
                        isOpen ? "text-white" : "text-zinc-400 group-hover:text-white"
                    )}>
                        {question}
                    </span>
                </div>

                {/* Icon Box - Sharp Edge */}
                <div className={cn(
                    "flex-shrink-0 w-8 h-8 flex items-center justify-center border sharp-edge transition-all duration-300 mt-1",
                    isOpen
                        ? "border-vibranium text-vibranium"
                        : "border-white/10 text-zinc-600 group-hover:border-white/30 group-hover:text-white"
                )}>
                    {isOpen ? <Minus size={14} strokeWidth={2} /> : <Plus size={14} strokeWidth={2} />}
                </div>
            </button>

            {/* Answer Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-10 px-8 md:px-12 pl-[60px] md:pl-[84px]">
                            <div className="max-w-xl">
                                <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-sans border-l-2 border-vibranium pl-6">
                                    {answer}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}