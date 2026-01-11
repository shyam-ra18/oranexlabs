import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

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
        <section className="w-full bg-[#050505] border-t border-b border-white/10 py-32" id="faq">
            <div className="max-w-3xl mx-auto px-6">

                {/* 1. Simplified Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tight">
                        Common Context
                    </h2>
                    <p className="text-zinc-500 font-sans text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                        Everything you need to know about our engineering process and protocols.
                    </p>
                </div>

                {/* 2. Single Column List */}
                <div className="border-t border-white/10">
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
        </section>
    );
}

function FAQItem({ question, answer, isOpen, onClick, index }: { question: string, answer: string, isOpen: boolean, onClick: () => void, index: number }) {
    return (
        <div className="border-b border-white/10">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-8 text-left group transition-all duration-300"
            >
                <span className={cn(
                    "text-lg md:text-xl font-display font-bold uppercase transition-colors duration-300 pr-8",
                    isOpen ? "text-white" : "text-zinc-400 group-hover:text-white"
                )}>
                    {question}
                </span>

                {/* Minimal Icon */}
                <div className={cn(
                    "flex-shrink-0 transition-colors duration-300",
                    isOpen ? "text-[#8B5CF6]" : "text-zinc-600 group-hover:text-white"
                )}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
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
                        <div className="pb-8">
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}